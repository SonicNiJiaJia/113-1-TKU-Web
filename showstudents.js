const { MongoClient } = require('mongodb');

// MongoDB 連接設定
const uri = "mongodb://localhost:27017";
const dbName = "411630030";
const collectionName = "studentslist";

(async () => {
    const client = new MongoClient(uri);

    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const results = await collection.find().toArray();
        for(each of results){
            console.log(each);
        }
    } catch (error) {
        console.error("發生錯誤：", error);
    }finally{
        client.close();
    }
})();