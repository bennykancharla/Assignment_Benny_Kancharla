// -------------------------------------1-----------------------------------------------------

const express = require("express");
 const path = require("path"); 
 const {open} = require("sqlite");
  const sqlite3 = require("sqlite3");

const app = express();
app.use(express.json());

const dbPath = path.join(\_\_dirname,"sampleDatabase.db"); //Assume "sampleDatabase.db" let db;

const getConnection = () => {
     try{
          db = open({ filename:dbPath, driver:sqlite3.Database });
           app.listen(3000, () => { console.log("Sever is Starting") })
         } 
           error(e){ console.log(`Error:${e.message}`);
            process.exit(1);
         }
         }

getConnection();

app.post("PATH/customer/:username/number/:phoneNumber", async (request,response) => { 
    const {username,phoneNumber} = request.params;

    const userQuery = `SELECT * FROM users WHERE phone_number = ${phoneNumber};`;
    const checkUser = await db.get(userQuery);

    if(checkUser !== undefined){
        response.status(400)
        response.send("Customer Already Exists");
    }
    else{
        const addUserQuery = `INSERT INTO users (name,phone_number) VALUES("${username}",${phoneNumber});`;
        const addUserResult = await db.run(addUserQuery);
        response.send("Customer Added");

    }

})
