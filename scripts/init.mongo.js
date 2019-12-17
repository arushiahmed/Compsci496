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
    academic: "Undergraduate",
    school: 'University of Massachusetts Amherst',
    year: '2021',
    rate:  '4.5',
    bio: 'I am a biology and chemestry majory from Hong Kong. I like to bake, take photos, and watch movies',
  },

  {
    name: 'Caroline Kato',
    academic: 'Undergraduate',
    school: 'University of Massachusetts Amherst',
    year: '2022',
    rate: '4',
    bio: 'I am computer enginnering major from Japan, I like shopping, watching movies, and eating.', 
  },

  {
    name: 'Caroline Baker',
    academic: 'Undergraduate',
    school: 'University of Massachusetts Amherst',
    year: '2020',
    rate:  '3.5',
    bio: 'I am computer enginnering major from Mass, I like shopping, watching movies, and eating. I am looking to meet new friends and help people know the aera', 
  },
  
  {
    name : 'Molly Miller',
    academic: 'Graduate',
    school: 'University of Massachusetts Amherst',
    year: '2021',
    rate:  '5',
    bio: 'I am computer science major from Ireland, I am looking to make some new friends who know the aera and can drive. In my free time I like to watch Netflex, listen to music, and go on random advantures',
  },

  {
    name: 'Tracy Young',
    academic: 'Graduate',
    school: 'University of Massachusetts Amherst',
    year: '2020',
    rate: '5',
    bio: 'I am computer science major from Itlay, I am looking to make some new friends who know the aera and can drive. In my free time I like to watch Netflex, listen to music, and go on random advantures',
  },

  {
    name: 'Jon Doe',
    academic: 'Graduate',
    school: 'University of Massachusetts Amherst',
    year: '2023',
    rate: '3.5',
    bio: 'I am a biology major from Cananda. I am new to the states and looking for someone who knows the aera that can show me around.',
  },

]);

db.friends.createIndex({academic: 1 });