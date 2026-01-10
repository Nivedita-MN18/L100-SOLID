class Order {
    private items: string[] = [];
    addItem(item: string) {
        this.items.push(item);
    }
    removeItem(item: string) {
        this.items = this.items.filter(i => i !== item);
    }
    getTotalPrice(): number {
        return this.items.length * 100;
    }
}

