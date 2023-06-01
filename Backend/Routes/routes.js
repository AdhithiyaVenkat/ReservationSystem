// Route.js
const express = require("express")
const router = express.Router();
const fs = require('fs');

const crypto = require("crypto");

const dataPath = './Details/userDetails.json' // path to our JSON file

// util functions
const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}

router.post('/user/register', (req, res) => {

  console.table(req.body);
 
    var existAccounts = getAccountData()
    
    const newAccountId = crypto.randomBytes(16).toString("hex");
 
    existAccounts[newAccountId] = req.body
   
    console.log(existAccounts);
    saveAccountData(existAccounts);
    res.send({success: true, id: newAccountId})
})

// Read - get all accounts from the json file
router.get('/user/list', (req, res) => {
    const accounts = getAccountData()
    res.send(accounts)
})

// Update - using Put method
router.put('/user/:id', (req, res) => {
    var existAccounts = getAccountData()
    fs.readFile(dataPath, 'utf8', (err, data) => {
      const accountId = req.params['id'];
      existAccounts[accountId] = req.body;
      saveAccountData(existAccounts);
      res.send(`accounts with id ${accountId} has been updated`)
    }, true);
  });

  // delete - using delete method
router.delete('/user/:id', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      var existAccounts = getAccountData()
      const userId = req.params['id'];
      delete existAccounts[userId]; 
      saveAccountData(existAccounts);
      res.send(`accounts with id ${userId} has been deleted`)
    }, true);
  })

module.exports = router;