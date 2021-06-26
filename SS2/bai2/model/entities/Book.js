import Document from "./Document.js";

class Book extends Document {
  constructor(id, supplier, circulation, authorName, page) {
    super(id, supplier, circulation);
    this.authorName = authorName;
    this.page = page;
  }

  get getAuthorName() {
    return this.authorName;
  }
  set setAuthorName(newAuthorName) {
    this.authorName = newAuthorName;
  }

  get getPage() {
    return this.page;
  }
  set setPage(newPage) {
    this.page = newPage;
  }
}

export default Book;
