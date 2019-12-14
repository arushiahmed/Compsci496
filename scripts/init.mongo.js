db = new Mongo().getDB('getData');

db.users.remove({});

db.users.insert([
{

},
]);


db.questionform.remove({});
db.friends.remove({});

db.friends.insert([
  {
    "name" : "Serena Chan",
    "school": "University of Massachusetts Amherst",
    "year" : "2021",
    "rate":  "4.5",
    "bio": "I am a biology and chemestry majory from Hong Kong. I like to bake, take photos, and watch movies",
  },

  {
    "name" : "Caroline Kato",
    "school": "University of Massachusetts Amherst",
    "year" : "2022",
    "rate": "4",
    "bio": "I am computer enginnering major from Japan, I like shopping, watching movies, and eating. I am looking for someone who could help me with my english and show me around campus", 
  },

  {
    "name" : "Caroline Baker",
    "school": "University of Massachusetts Amherst",
    "year" : "2020",
    "rate":  "4",
    "bio": "I am computer enginnering major from Mass, I like shopping, watching movies, and eating. I am looking to meet new friends and help people know the aera", 
  },
  
  {
    "name" : "Molly Miller",
    "school": "University of Massachusetts Amherst",
    "year" : "2021",
    "rate":  "5",
    "bio": "I am computer science major from Ireland, I am looking to make some new friends who know the aera and can drive. In my free time I like to watch Netflex, listen to music, and go on random advantures",
  },

  {
    "name" : "Tracy Young",
    "school": "University of Massachusetts Amherst",
    "year" : "2020",
    "rate": "5",
    "bio": "I am computer science major from Itlay, I am looking to make some new friends who know the aera and can drive. In my free time I like to watch Netflex, listen to music, and go on random advantures",
  },

]);
