abstract class TakePhotoo {
    constructor(public cameraMode: string, public filter: string){}

    abstract getSepia():void
};

// const musee = new TakePhoto('test', "test") // can not set value for abstract class

class facebook extends TakePhotoo {
    constructor(public cameraMode: string, public filter: string, public burst: number){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log('this')
    }
}

const musee = new facebook('test', 'test', 99)