import { MongoClient } from "mongodb";


const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri); 



async function insertTodo()
{
    const db = client.db("Project");
    let data={message:"Hello Mongo!!"};
 let result =await db.collection("todo").insertOne({data});

   await client.close();
}

async function readalltodo(){
 

const db=client.db("Project");
const todoCollection=db.collection("todo");

let list=await todoCollection.find().toArray();


await client.close();
return list;
}

export{insertTodo,readalltodo}
readalltodo();
//insertTodo();
    