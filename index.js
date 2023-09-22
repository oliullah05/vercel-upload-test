const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json())

 
app.get("/",(req,res)=>{
    res.send('practise project is running')
})



// dG2n45HnwDEZPyaM
// Practise-Chokolate
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Practise-Chokolate:dG2n45HnwDEZPyaM@cluster0.iono61s.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("Practise-Chokolate");
    const allChokolates = database.collection("Chokolates");




app.get("/allchokolate",async(req,res)=>{
    const cursor = allChokolates.find();
    const results = await cursor.toArray();
    res.send(results)
})

app.get("/allchokolate/:id",async(req,res)=>{
    const id = req.params.id;
    const find = {_id:new ObjectId(id)}
    const result =await allChokolates.findOne(find)
    res.send(result)
})

app.post("/allchokolate",async(req,res)=>{
const newChokolate = req.body ;
const result = await allChokolates.insertOne(newChokolate);
res.send(result)

})

app.put("/allchokolate/:id",async(req,res)=>{
  const id = req.params.id;
  const updatingData = req.body;
  const filter = { _id : new ObjectId(id)};
  const options = { upsert: true }

  const updateData = {
    $set: {
      name:req.body.name,
      email:req.body.email,
      img:req.body.img,
      category:req.body.category,
    },
  };
  const result = await allChokolates.updateOne(filter, updateData, options);
  res.send(result)
})

app.delete("/allchokolate/:id",async(req,res)=>{
    const id = req.params.id;
    const find = {_id:new ObjectId(id)};
    const data = await allChokolates.deleteOne(find)
    res.send(data)
})
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



















app.listen(port,()=>{
    console.log(`your Practise project on port ${port}`);
})