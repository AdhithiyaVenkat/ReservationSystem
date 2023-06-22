const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  name: String,
  email: String,
  contact: Number,
  dob: Date,
  reservationDate: String,
  city: String,
  gender: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Blog", blogSchema);

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await model.find();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await model.create(req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await model.findById(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await model.findByIdAndUpdate(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await model.findByIdAndDelete(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};