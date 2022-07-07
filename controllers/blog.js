const Blog = require("../models/blog");

exports.list = async (req, res) => {
  try {
    const blog = await Blog.find();

    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
