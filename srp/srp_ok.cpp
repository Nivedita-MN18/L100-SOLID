//
// Created by nived on 11-01-2026.
//

class Order {
    vector<string> items;
public:
    void addItem(const string& item) { items.push_back(item); }
    void removeItem(const string& item) {
        items.erase(remove(items.begin(), items.end(), item), items.end());
    }
    int getTotalPrice() const { return items.size() * 100; }
};
