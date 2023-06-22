// Route.js
const express = require("express")

const { MongoClient } = require("mongodb");

const router = express.Router();

router.route("/").get((req, res) => {
  const cl = new MongoClient("mongodb://localhost:27017");
  async function run(){
    await cl.connect();
    const dbs = client.db("intro");
    const coll = dbs.collection("quotes");

    const rest = await coll.insertOne({"quote":"This is my quote."});
    res.end(JSON.stringify(rest));
  }
  run();
});
// router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports = router;