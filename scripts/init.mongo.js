db = new Mongo().getDB('getData');

db.users.remove({});
db.friends.remove({});
db.questionform.remove({});

db.questionform.insert([
  {

  }
])

db.friends.insert([
  {
    
    name: 'Serena Chan',
    status: 'Undergraduate',
    school: 'University of Massachusetts Amherst',
    year: '2021',
    rate:  '4.5',
    bio: 'I am a biology and chemestry majory from Hong Kong.',
  },

  {
 
    name: 'Caroline Kato',
    status: 'Undergraduate',
    school: 'University of Massachusetts Amherst',
    year: '2022',
    rate: '4',
    bio: 'I am computer enginnering major from Japan.', 
  },

  {
  
    name: 'Caroline Baker',
    status: 'Undergraduate',
    school: 'University of Massachusetts Amherst',
    year: '2020',
    rate:  '3.5',
    bio: 'I am computer enginnering major from Mass.', 
  },
  
  {
 
    name : 'Molly Miller',
    status: 'Graduate',
    school: 'University of Massachusetts Amherst',
    year: '2021',
    rate:  '5',
    bio: 'I am computer science major from Ireland',
  },

  {
  
    name: 'Tracy Young',
    status: 'Graduate',
    school: 'University of Massachusetts Amherst',
    year: '2020',
    rate: '5',
    bio: 'I am computer science major from Itlay',
  },

  {
    name: 'Jon Doe',
    status: 'Graduate',
    school: 'University of Massachusetts Amherst',
    year: '2023',
    rate: '3.5',
    bio: 'I am a biology major from Cananda.',
  },

]);

db.friends.createIndex({status: 1});