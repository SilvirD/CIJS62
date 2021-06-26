import Book from "./Book.js";
import Magazine from "./Magazine.js";
import Newspaper from "./Newspaper.js";

class Manager {
  constructor() {
    this.listBook = [];
    this.listMagazine = [];
    this.listNewspaper = [];
  }

  /**
   * Add document by type
   * @param {*} doc
   * @param {*} type
   */
  addDocument(doc, type) {
    if (type === "book") {
      this.listBook.push(doc);
    } else if (type === "magazine") {
      this.listMagazine.push(doc);
    } else if (type === "newspaper") {
      this.listNewspaper.push(doc);
    } else {
      console.log("invalid");
    }
  }

  /**
   * Add document without type - by instanceOf
   * @param {*} doc
   */
  addDocumentByInstance(doc) {
    if (doc instanceof Book) {
      this.listBook.push(doc);
    } else if (doc instanceof Magazine) {
      this.listMagazine.push(doc);
    } else if (doc instanceof Newspaper) {
      this.listNewspaper.push(doc);
    } else {
      console.log("invalid");
    }
  }

  /**
   * Delete document by id and type
   * @param {*} docID
   * @param {*} type
   */
  deleteDocument(docID, type) {
    if (type === "book") {
      docID = this.listBook.indexOf(docID);
      this.listBook.splice(docID, 1);
    } else if (type === "magazine") {
      docID = this.listMagazine.indexOf(docID);
      this.listMagazine.splice(docID, 1);
    } else if (type === "newspaper") {
      docID = this.listNewspaper.indexOf(docID);
      this.listNewspaper.splice(docID, 1);
    } else {
      console.log("invalid");
    }
  }

  findArray(a, docID) {
    a.find(() => {
      docID = a.indexOf(docID);
      console.log(a[docID]);
    });
  }

  /**
   * Show document by id and type
   * @param {*} docID
   * @param {*} type
   */
  showDocument(docID, type) {
    if (type === "book") {
      this.findArray(this.listBook, docID);
    } else if (type === "magazine") {
      this.findArray(this.listMagazine, docID);
    } else if (type === "newspaper") {
      this.findArray(this.listNewspaper, docID);
    } else {
      console.log("invalid");
    }
  }
}

export default Manager;
