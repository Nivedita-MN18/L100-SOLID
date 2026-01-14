interface RemoteControl {
    turnOn(): void;
    turnOff(): void;
    record(): void;
}
class TV implements RemoteControl {
    turnOn() {
//LOGIC
}
    turnOff() {
//logic
    }
    record() {
        throw new Error("TV cannot record");
    }
}

class Camera implements RemoteControl {
    turnOn() {
        //logic
    }

    turnOff() {
        //logic
    }

    record() {
        //logic
    }
}

//good code
interface Switchable {
    turnOn(): void;
    turnOff(): void;
}
interface Recordable {
    record(): void;
}
class TVGood implements Switchable {
    turnOn() {
        //logic
    }
    turnOff() {
        //logic
    }
}
class CameraGood implements Switchable, Recordable {
    turnOn() {
    //logic
    }
    turnOff() {
        //logic
    }
    record() {
        //logic
    }
}
