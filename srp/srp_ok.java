package SOLID;

import java.util.ArrayList;
import java.util.List;

class Order {
    private List<String> items = new ArrayList<>();

    void addItem(String item) { items.add(item); }
    void removeItem(String item) { items.remove(item); }
    int getTotalPrice() { return items.size() * 100; }
}

