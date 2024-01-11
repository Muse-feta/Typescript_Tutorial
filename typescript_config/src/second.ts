interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
};

class instagrm implements TakePhoto {
    constructor(public cameraMode: string,
    public filter: string,
    public burst: number){}
}