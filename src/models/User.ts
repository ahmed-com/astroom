import { Socket } from 'socket.io-client';
import vm from '../main';

type streamEventListener = (stream: MediaStream) => void

export default class User{

    private _name: string;
    private _socketId: string;
    private _pc: RTCPeerConnection;
    private _mySocket: Socket | null;
    private _videoStreamEventListeners: streamEventListener[];

    private static myStream: MediaStream;

    constructor(name: string, socketId: string){
        this._name = name;
        this._socketId = socketId;
        this._pc = new RTCPeerConnection();
        this._mySocket = vm.$store.getters.socket;
        this._videoStreamEventListeners = [];

        this._pc.ontrack = ({streams}) => {
            const [videoStream] = streams;

            this.videoStream = videoStream;
        }

        this.startStreaming();
        
        this._mySocket?.on('offerCreated',(data: {offer: RTCSessionDescription; socketId: string})=>{
            if(data.socketId === this._socketId) this.handleOffer(data.offer);
        });
    }

    private startStreaming(){
        User
        .myStream
        .getTracks()
        .forEach(track=>{
            this._pc.addTrack(track,User.myStream);
        });
    }

    public static setMyStream(stream: MediaStream): void{
        User.myStream = stream;
    }

    private set videoStream(stream: MediaStream){
        this._videoStreamEventListeners.forEach(listener=>{
            listener(stream);
        });
    }

    private onVideoStream(listener: streamEventListener){
        this._videoStreamEventListeners.push(listener);
    }

    public async getVideoStream(): Promise<MediaStream>{
        return new Promise((resolve,_)=>{
            this.onVideoStream(resolve);
        })
    }

    private async handleOffer(offer: RTCSessionDescription){
        await this._pc.setRemoteDescription(offer);
        const answer: RTCSessionDescription = new RTCSessionDescription(await this._pc.createAnswer());

        this._mySocket?.emit('createAnswer',{
            answer,
            to : this._socketId
        });
    }

    public get name(): string{
        return this._name;
    }

    public get socketId(): string{
        return this._socketId;
    }

    public async connect(){
        const offer: RTCSessionDescription = new RTCSessionDescription(await this._pc.createOffer());
        await this._pc.setLocalDescription(offer);

        this._mySocket?.emit('createOffer',{
            offer,
            to : this._socketId
        });

        this._mySocket?.on('answerCreated',(data: {answer: RTCSessionDescription; socketId: string})=>{
            if(data.socketId === this._socketId) this.handleAnswer(data.answer);
        });
    }


    private async handleAnswer(answer: RTCSessionDescription){
        await this._pc.setRemoteDescription(answer);
    }
}