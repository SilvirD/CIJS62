import Document from "./Document.js";

class Magazine extends Document {
  constructor(id, supplier, circulation, issue, releaseMonth) {
    super(id, supplier, circulation);
    this.issue = issue;
    this.releaseMonth = releaseMonth;
  }

  get getIssue() {
    return this.issue;
  }
  set setIssue(newIssue) {
    this.issue = newIssue;
  }

  get getReleaseMonth() {
    return this.releaseMonth;
  }
  set setReleaseMonth(newReleaseMonth) {
    this.releaseMonth = newReleaseMonth;
  }
}

export default Magazine;
