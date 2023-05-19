import { MongoClient } from "mongodb";






async function insertTodo()
{
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri); 
    const db = client.db("Project");
    let data={message:"Hello Mongo!!"};
 let result =await db.collection("todo").insertOne({data});

   await client.close();
}

insertTodo();
    