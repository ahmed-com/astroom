import { Socket } from 'socket.io-client';
import vm from '../main';

export default class User{

    private _name: string;
    private _socketId: string;
    private _pc: RTCPeerConnection;
    private _mySocket: Socket | null; // TO-DO : change this prop to static
    private _stream: MediaStream;

    private static myStream: MediaStream;

    constructor(name: string, socketId: string){
        this._name = name;
        this._socketId = socketId;
        this._pc = new RTCPeerConnection();
        this._mySocket = vm.$store.getters.socket;
        this._stream = new MediaStream();

        this._pc.ontrack = ev => {
            this._stream.addTrack(ev.track);
            console.log("track recieved is :",ev.track);
        }

        this.startStreaming();
        
        this._mySocket?.on('offerCreated',(data: {offer: RTCSessionDescription; socketId: string})=>{
            if(data.socketId === this._socketId) this.handleOffer(data.offer);
        });
    }

    public get stream(): MediaStream{
        return this._stream;
    }

    public static setMyStream(stream: MediaStream): void{
        User.myStream = stream;
    }

    private async handleOffer(offer: RTCSessionDescription){
        await this._pc.setRemoteDescription(offer);
        const answer: RTCSessionDescription = new RTCSessionDescription(await this._pc.createAnswer());

        this._mySocket?.emit('createAnswer',{
            answer,
            to : this._socketId
        });
    }

    private startStreaming(){
        User
        .myStream
        .getTracks()
        .forEach(track=>{
            console.log('track added :',track);
            this._pc.addTrack(track);
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