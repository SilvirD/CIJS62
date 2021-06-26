import Manager from "./model/entities/Manager.js";
import Book from "./model/entities/Book.js";
import Magazine from "./model/entities/Magazine.js";
import Newspaper from "./model/entities/Newspaper.js";

const b1 = new Book("b1", "kimdong", 1000, "namcao", 123);
const b2 = new Book("b2", "kimdong", 3000, "namcao2", 123);

const m1 = new Magazine("m1", "hoctrocuoi", 2000, 2, 12);
const n1 = new Newspaper("n1", "thanh nien", 2000, "20/3/2021");

const library = new Manager();

library.addDocumentByInstance(b1);
library.addDocumentByInstance(b2);
library.addDocumentByInstance(m1);
library.addDocumentByInstance(n1);

library.deleteDocument(b1, "book");

console.log(library);

library.showDocument(b2, "book");
library.showDocument(m1, "magazine");
library.showDocument(n1, "newspaper");
