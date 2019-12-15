const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

const formField = {
  "one": 'required',
  "two": 'required',
  "three": 'required',
  "four": 'required',
  "five": 'required',
  "six": 'required',
  "seven": 'required',
  "eight": 'required',
  "nine": 'required',
  "ten": 'required',
  "eleven": 'required',
  "tweleve": 'required',
  "thirteen": 'required',
};

const friendFieldType = {
    "name" : 'required',
    "degree": 'required',
    "school": 'required',
    "year" : 'required',
    "bio": 'required',
    "rate":  'required',
};

function validateForm(question){
  for (const field in formField ) {
    if(formField .hasOwnProperty(field)){
         const type = formField [field];
          if (!type) {
            delete question[field];
          } else if (type === 'required' && !question[field]) {
            return `${field} is required.`;
          }
    }
   }
  return null;
}

app.get('/api/questionform', (req, res) => {
  db.collection('questionform').find().toArray().then(questionform => {
    const metadata = { total_count: questionform.length };
    res.json({ success: true, _metadata: metadata, records: questionform })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ success:false, message: `Internal Server Error: ${error}` });
  });
});

app.post('/api/questionform', (req, res) => {
  console.log(req)
  const newForm = req.body;
  newForm.date = new Date();

  const err = validateForm(newForm);
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }

  db.collection('questionform').insertOne(newForm).then(result =>

    db.collection('questionform').find({ _id: result.insertedId }).limit(1).next()
  ).then(newForm => {
    res.json(newForm);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

//Form Friends List
function validateFriend(friend) {
  for (const field in friendFieldType) {
    if(friendFieldType.hasOwnProperty(field)){
         const type = friendFieldType[field];
          if (!type) {
            delete friend[field];
          } else if (type === 'required' && !friend[field]) {
            return `${field} is required.`;
          }
    }
   }
  return null;
}

app.get('/api/friends', (req, res) => {
  db.collection('friends').find().toArray().then(friends => {
    const metadata = { total_count: friends.length };
    res.json({ success: true, _metadata: metadata, records: friends })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ success:false, message: `Internal Server Error: ${error}` });
  });
});

app.post('/api/friends', (req, res) => {
  console.log(req)
  const newFriend = req.body;

  newFriend.date = new Date();

  const err = validateFriend(newFriend);
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }

  db.collection('friends').insertOne(newFriend).then(result =>

    db.collection('friends').find({ _id: result.insertedId }).limit(1).next()
  ).then(newFriend => {
    res.json(newFriend);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('getData');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});