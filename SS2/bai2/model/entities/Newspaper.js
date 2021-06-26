import Document from "./Document.js";

class Newspaper extends Document {
  constructor(id, supplier, circulation, publishDate) {
    super(id, supplier, circulation);
    this.publishDate = publishDate;
  }

  get getPublishDate() {
    return this.publishDate;
  }
  set setPublishDate(newPublishDate) {
    this.publishDate = newPublishDate;
  }
}

export default Newspaper;
