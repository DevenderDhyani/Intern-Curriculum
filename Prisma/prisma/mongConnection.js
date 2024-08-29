/**
* Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
* See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
*/

const { MongoClient } = require('mongodb');

async function main() {
    // we'll add code here soon
 }
 const uri = "mongodb+srv://rohangarg:<>@cluster0.8r8v8.mongodb.net/";       
 const client = new MongoClient(uri);
 try {
    await client.connect();

    await listDatabases(client);

} catch (e) {
    console.error(e);
}