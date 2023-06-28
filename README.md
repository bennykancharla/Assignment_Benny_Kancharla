// -------------------------------------1-----------------------------------------------------

const express = require("express"); const path = require("path"); const {open} = require("sqlite"); const sqlite3 = require("sqlite3");

const app = express(); app.use(express.json());

const dbPath = path.join(\_\_dirname,"sampleDatabase.db"); //Assume "sampleDatabase.db" let db;

const getConnection = () => { try{ db = open({ filename:dbPath, driver:sqlite3.Database }); app.listen(3000, () => { console.log("Sever is Starting") }) } error(e){ console.log(`Error:${e.message}`); process.exit(1); } }

getConnection();

app.post("PATH/customer/:username/number/:phoneNumber", async (request,response) => { const {username,phoneNumber} = request.params;

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

// -------------------------------------2-------------------------------------------

SELECT subject_student_mapping.customerId, customers.name, GROUP_CONCAT(subjects.subjectName) AS subjects FROM subject_student_mapping INNER JOIN customers ON subject_student_mapping.customerId = customers.customerId INNER JOIN subjects ON subject_student_mapping.subjectId = subjects.subjectId GROUP BY subject_student_mapping.customerId ORDER BY subject_student_mapping.customerId;

// ------------------------------------3----------------------------------------------

const express = require("express"); const path = require("path"); const {open} = require("sqlite"); const sqlite3 = require("sqlite3");

const app = express(); app.use(express.json());

const dbPath = path.join(\_\_dirname,"sampleDatabase.db"); //Assume "sampleDatabase.db" let db;

const getConnection = () => { try{ db = open({ filename:dbPath, driver:sqlite3.Database }); app.listen(3000, () => { console.log("Sever is Starting") }) } error(e){ console.log(`Error:${e.message}`); process.exit(1); } }

getConnection();

const customers = [{ email : "anurag11@yopmail.com" , name : "anurag" }, { email : "sameer11@yopmail.com" , name : "sameer" }, { email : "ravi11@yopmail.com" , name : "ravi" }, { email : "akash11@yopmail.com" , name : "akash" }, { email : "anjali11@yopmail.com" , name : "anjai" }, { email : "santosh11@yopmail.com" , name : "santosh" } ]

const insertTheData = async (object) => { const {email,name} = object; const checkEmailQuery = `SELECT * FROM customer WHERE email= ${email};`; const isEmailExists = await db.all(checkEmailQuery);

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

app.post("PATH", async (request,response) => { await customers.forEach(insertTheData(eachObject)) response.send("Query Successful"); } )

// ------------------------------------4----------------------------------------

const person = { id:2, gender:"male" };

const student = { name:"ravi", email:"ravi11@yopmail.com" };

const newObj = { ...person,...student } console.log(newObj);

// ------------------------------------5----------------------------------------------

const url = "http://www.google.com";

const getGoogleHomePage = async () => { try{ const response = await fetch(url); const jsonData = await response.json(); console.log(`RESULT ==> ${jsonData}`)

        return response.statusCode;
    }
    catch(error){
        console.log(`RESULT ==> ${error}`)
    }

}

console.log(getGoogleHomePage());

// ------------------------------------6------------------------------------------------------

const array = [1,2,3,4,5,7,8,9,10];//Assuming there are 1 to 100 integers let missing = []; let reference = 1; for (let num of array){ if(num !== reference){ missing.push(reference); }; reference = reference+1; } console.log(missing);
