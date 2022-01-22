const { v4: uuidv4 } = require("uuid");

class Warehouse {
  constructor(address) {
    this.id = uuidv4();
    this.location = null;
    this.address = address;
    this.inventory = {}; // {itemId: quantity}
    this.distance = null; // needs to be removed
  }
}

class Item {
  constructor(name, quantity, imageURL) {
    this.warehouseIds = new Set();
    this.id = uuidv4();
    this.name = name;
    this.quantity = quantity;
    this.imageURL = imageURL ? imageURL : "";
    this.batches = []; // FIFO queue implemented as a list since popping first element in JS is pretty efficient
  }
}

class ItemBatch {
  constructor(name, itemId, quantity, warehouseId) {
    this.name = name;
    this.itemId = itemId;
    this.batchId = uuidv4();
    this.quantity = quantity;
    this.warehouseId = warehouseId;
    this.dateAdded = new Date().toDateString();
  }
}

module.exports = { Warehouse, Item, ItemBatch };
