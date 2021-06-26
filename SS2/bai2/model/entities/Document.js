class Document {
  constructor(id, supplier, circulation) {
    this.id = id;
    this.supplier = supplier;
    this.circulation = circulation;
  }

  get getID() {
    return this.id;
  }
  set setID(newID) {
    this.id = newID;
  }

  get getSupplier() {
    return this.supplier;
  }
  set setSupplier(newSupplier) {
    this.supplier = newSupplier;
  }

  get getCirculation() {
    return this.circulation;
  }
  set setCirculation(newCirculation) {
    this.circulation = newCirculation;
  }
}

export default Document;
