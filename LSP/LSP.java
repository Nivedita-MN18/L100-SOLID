package SOLID;

// bad code
class ReadOnlyList {
    int get(int index) {
        return 0;
    }
}

class MutableList extends ReadOnlyList {
    void add(int value) {
        // modifies list
    }
}

// good code
interface ReadOnlyListFixed {
    int get(int index);
}

interface MutableListFixed extends ReadOnlyListFixed {
    void add(int value);
}

// Postcondition violation

// BAD
class Cache {
    void put(String key, String value) {}
    String get(String key) {
        return "value";
    }
}

class WriteOnlyCache extends Cache {
    String get(String key) {
        return null;
    }
}

// GOOD
interface ReadableCache {
    String get(String key);
}

interface WritableCache {
    void put(String key, String value);
}


// Example 3

// BAD
class User {
    int id;
    User(int id) {
        this.id = id;
    }
}

class UserService {
    User getUser(int id) {
        return new User(id);
    }
}

class NullableUserService extends UserService {
    User getUser(int id) {
        return null;
    }
}

// GOOD
class UserServiceFixed {
    User getUser(int id) {
        return null; // explicit contract
    }
}

public class LSP {

}
