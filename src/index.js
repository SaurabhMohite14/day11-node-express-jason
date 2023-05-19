import { MongoClient } from "mongodb";






async function insertTodo()
{
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri); 

    
console.log("connection success");


   await client.close();
}

insertTodo();
    