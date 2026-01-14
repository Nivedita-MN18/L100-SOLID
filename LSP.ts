//bad code
class ReadOnlyList {
    get(index: number): number {
        return 0;
    }
}

class MutableList extends ReadOnlyList {
    add(value: number): void {
        // modifies list
    }
}

// good code
interface ReadOnlyListFixed {
    get(index: number): number;
}

interface MutableListFixed extends ReadOnlyListFixed {
    add(value: number): void;
}

//example 2:post-condition violated
// bad example
class Cache {
    put(key: string, value: string): void {}
    get(key: string): string {
        return "value";
    }
}

class WriteOnlyCache extends Cache {
    get(key: string): string {
        return "";
    }
}

// good example
interface ReadableCache {
    get(key: string): string;
}

interface WritableCache {
    put(key: string, value: string): void;
}

// Example 3

// bad code
class User {}

class UserService {
    getUser(id: number): User {
        return new User();
    }
}

class NullableUserService extends UserService {
    getUser(id: number): User {
        return null as any;
    }
}

// good code
class UserServiceFixed {
    getUser(id: number): User | null {
        return null;
    }
}
