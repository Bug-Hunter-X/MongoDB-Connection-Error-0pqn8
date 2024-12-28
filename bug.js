```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('myFirstDatabase');
    const collection = database.collection('documents');
    // Insert a document
    const doc = { name: "John Doe", age: 30 };
    const result = await collection.insertOne(doc);
    console.log(`Inserted ${result.insertedCount} document into the collection`);

    // Query for documents
    const query = { name: 'John Doe' };
    const results = await collection.find(query).toArray();
    console.log(results);
  } finally {
    await client.close();
  }
}
main().catch(console.dir);
```