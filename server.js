const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

const formField = {
  one: 'required',
  two: 'required',
  three: 'required',
  four: 'required',
  five: 'required',
  six: 'required',
  seven: 'required',
  eight: 'required',
  categories: 'required',
  nine: 'required',
  ten: 'required',
  eleven: 'required',
  tweleve: 'required',
  thirteen: 'required',
  fourteen: 'optional',
  fifteen: 'optional',
  sixteen: 'optional',
  seventeen: 'optional',
  eighteen:'optional',
};
const validIssueStatus = {
  Undergraduate: true,
  Graduate: true,
};

const issueFieldType = {
  name: 'required',
  status: 'required',
  school: 'required',
  year: 'required',
  rate: 'required',
  bio: 'required',
 
};

function validateForm(question){
  for (const field in formField ) {
    if(formField.hasOwnProperty(field)){
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
function validateIssue(friend) {
  for (const field in issueFieldType){
    if(issueFieldType.hasOwnProperty(field)){
      const type = issueFieldType[field];
      if(!type){
        delete friend[field];
      } else if(type === 'required' && !friend[field]){
        return `${field} is required.`;
      }
    }   
  if (!validIssueStatus[friend.status]) {
      errors.push(`${friend.status} is not a valid status.`);
  }
}
  return (errors.length ? errors.join('; ') : null);
}

app.get('/api/friends', (req, res) => {
  const filter = {};
  if (req.query.status) filter.status = req.query.status;

  db.collection('friends').find(filter).toArray().then(friends => {
    const metadata = { total_count: friends.length };
    res.json({ _metadata: metadata, records: friends })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

app.post('/api/friends', (req, res) => {
  const newFriend= req.body;
  newFriend.created = new Date();
 
  const err = validateIssue(newFriend);
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