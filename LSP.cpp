//
// Created by nived on 14-01-2026.
//
#include <string>
#include <optional>

// bad code
class ReadOnlyList {
public:
    virtual int get(int index) const {
        return 0;
    }
    virtual ~ReadOnlyList() = default;
};

class MutableList : public ReadOnlyList {
public:
    void add(int value) {
        // modifies state
    }
};

// good code
class ReadOnlyListFixed {
public:
    virtual int get(int index) const = 0;
    virtual ~ReadOnlyListFixed() = default;
};

class MutableListFixed : public ReadOnlyListFixed {
public:
    int get(int index) const override {
        return 0;
    }
    void add(int value) {}
};

// Example 2

// bad code
class Cache {
public:
    virtual void put(const std::string& key, const std::string& value) {}
    virtual std::string get(const std::string& key) {
        return "value";
    }
    virtual ~Cache() = default;
};

class WriteOnlyCache : public Cache {
public:
    std::string get(const std::string& key) override {
        return "";
    }
};

// good code
class ReadableCache {
public:
    virtual std::string get(const std::string& key) = 0;
};

class WritableCache {
public:
    virtual void put(const std::string& key, const std::string& value) = 0;
};



// bad code
class User {};

class UserService {
public:
    virtual User* getUser(int id) {
        return new User();
    }
    virtual ~UserService() = default;
};

class NullableUserService : public UserService {
public:
    User* getUser(int id) override {
        return nullptr;
    }
};

// good code
class UserServiceFixed {
public:
    virtual std::optional<User> getUser(int id) {
        return std::nullopt;
    }
};
