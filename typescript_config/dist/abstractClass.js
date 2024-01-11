"use strict";
class TakePhotoo {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
;
// const musee = new TakePhoto('test', "test") // can not set value for abstract class
class facebook extends TakePhotoo {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('this');
    }
}
const musee = new facebook('test', 'test', 99);
