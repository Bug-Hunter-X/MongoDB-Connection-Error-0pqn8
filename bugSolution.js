```javascript
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://<username>:<password>@<cluster-address>/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Adjust as needed
  retryWrites: true,
  w: 'majority'
});

async function main() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db('myFirstDatabase');
    const collection = db.collection('documents');
    // Your database operations here...
    const docs = await collection.find({}).toArray();
    console.log(docs);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    // Implement retry logic here if needed
  } finally {
    await client.close();
  }
}

main();
```