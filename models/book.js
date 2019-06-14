const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, required: false },
  machine_name: { type: String, required: true },
  assignedto: { type: String, required: true },
  api1: { type: String, required: true},
  ping_tool: { type: String, required: true},
  status: {type: String, required: true},
  comment: {type: String, required: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
