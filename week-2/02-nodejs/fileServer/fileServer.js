/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
// import * as fs from 'node:fs/promises';
const path = require('path');
const app = express();
const port=500;


app.get("/files",(req,res)=>{
  
    fs.readdir("./files/",(err,data)=>{
      if(err){
        res.status(500).send();
      }else{
        res.json(data);
      }
    });
    //below causes error
    // fs.readdir('./files/',(err,data)=>{
    //   res.json(data);
    // })
  }
)

app.get("/files/:filename",(req,res)=>{
    const name=req.params.filename;
    // console.log(__dirname);
    fs.readdir("./files/",(err,data)=>{
      const file=data.find((x)=> x==name);
    
      if(!file){
        res.status(404).send("File not found");
      }else{
        const filePath=path.join('./files',file);
        // console.log(filePath);
        fs.readFile(filePath,"utf-8",(err,data)=>{
            res.send(data);
        })
      }
      
    })
})

app.use((req, res, next)=>{
  res.status(404).send("Route not found");
})

app.listen(port);

module.exports = app;