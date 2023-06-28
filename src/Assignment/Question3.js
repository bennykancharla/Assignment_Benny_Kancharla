
const express = require("express"); 
const path = require("path"); 
const {open} = require("sqlite"); 
const sqlite3 = require("sqlite3");

const app = express(); app.use(express.json());

const dbPath = path.join(\_\_dirname,"sampleDatabase.db"); //Assume "sampleDatabase.db" let db;

const getConnection = () => { 
    try{ db = open({ filename:dbPath, driver:sqlite3.Database }); 
    app.listen(3000, () => { console.log("Sever is Starting") }) 
} 
error(e){ 
    console.log(`Error:${e.message}`); 
    process.exit(1); 
} 
}

getConnection();

const customers = [
    { email : "anurag11@yopmail.com" , name : "anurag" },
 { email : "sameer11@yopmail.com" , name : "sameer" },
  { email : "ravi11@yopmail.com" , name : "ravi" }, 
  { email : "akash11@yopmail.com" , name : "akash" }, 
  { email : "anjali11@yopmail.com" , name : "anjai" }, 
  { email : "santosh11@yopmail.com" , name : "santosh" }
 ]

const insertTheData = async (object) => { 
    const {email,name} = object; 
    const checkEmailQuery = `SELECT * FROM customer WHERE email= ${email};`; 
    const isEmailExists = await db.all(checkEmailQuery);

    if(isEmailExists===undefined){
        const query = `INSERT INTO customer
        (
            email,name
        )
        VALUES ("${email}","${name}");
        `
        await db.run(query);
    }
    else{
        const query = `UPDATE customer
        SET name=${name}
        WHERE email=${email};`;
        await db.run(query);
    }

}

app.post("PATH", async (request,response) => { 
    await customers.forEach(insertTheData(eachObject)) 
    response.send("Query Successful"); 
}
 )
