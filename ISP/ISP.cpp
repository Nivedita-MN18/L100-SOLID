//
// Created by nived on 15-01-2026.
//
#include <iostream>
#include <stdexcept>
using namespace std;
class RemoteControl {
public:
    virtual void turnOn() = 0;
    virtual void turnOff() = 0;
    virtual void record() = 0;
    virtual ~RemoteControl() = default;
};
class TV : public RemoteControl {
public:
    void turnOn() override {
        //logic
    }
    void turnOff() override {
        //logic
    }
    void record() override {
        throw logic_error("");
    }
};
class Camera : public RemoteControl {
public:
    void turnOn() override {
        //logic
    }
    void turnOff() override {
        //logic
    }
    void record() override {
        //logic
    }
};
class Switchable {
public:
    virtual void turnOn() = 0;
    virtual void turnOff() = 0;
    virtual ~Switchable() = default;
};
class Recordable {
public:
    virtual void record() = 0;
    virtual ~Recordable() = default;
};
class TVFixed : public Switchable {
public:
    void turnOn() override {
        //logic
    }
    void turnOff() override {
        //logic
    }
};
class CameraFixed : public Switchable, public Recordable {
public:
    void turnOn() override {
        //logic
    }
    void turnOff() override {
        //logic
    }
    void record() override {
        //logic
    }
};
