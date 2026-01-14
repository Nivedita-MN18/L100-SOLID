package SOLID;
interface RemoteControl {
    void turnOn();
    void turnOff();
    void record(); // not needed by all
}
class TV implements RemoteControl {
    public void turnOn() {
    //logic
    }
    public void turnOff() {
    //logic
    }

    public void record() {
        throw new UnsupportedOperationException();
    }
}
class Camera implements RemoteControl {
    public void turnOn() {
        //logic
    }
    public void turnOff() {
        //logic
    }
    public void record() {
        //logic
    }
}

interface Switchable {
    void turnOn();
    void turnOff();
}
interface Recordable {
    void record();
}
class TVGood implements Switchable {
    public void turnOn() {
        //logic
    }
    public void turnOff() {
        //logic
    }
}
class CameraFixed implements Switchable, Recordable {
    public void turnOn() {
        //logic
    }
    public void turnOff() {
        //logic
    }

    public void record() {
        //logic
    }
}

public class ISP {
}
