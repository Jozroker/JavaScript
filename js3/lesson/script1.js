class makeBuffer {
    _bufer = "";

    constructor() {
    }

    add(value) {
        this._bufer += value
    }

    print() {
        console.log(this._bufer)
    }

    clear() {
        this._bufer = ""
    }
}

let buffer = new makeBuffer();
buffer.add("Some value");
buffer.print();
buffer.add(1);
buffer.add(2);
buffer.print();
buffer.clear();
buffer.add(1);
buffer.add(2);
buffer.add(3);
buffer.print();