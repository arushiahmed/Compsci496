db = new Mongo().getDB('getData');

db.users.remove({});
db.friends.remove({});
db.questionform.remove({});

db.questionform.insert([
  {
    "one": "Both",
    "two": "Undergraduates",
    "three": "Same",
    "four": "Both",
    "five": "Both",
    "six": "Both",
    "seven": "Both",
    "eight": "Different",
    "categories": ["Traveling, ", "Photography, ", "Baking/Cooking, "],
    "nine": "My older sibilings attend UMass. My older brother graduated with an enginnering major and my older sister graduated with a English major. They told me to live on campus for two years live off campus the last two years. There is busses that you can travel around on and off campus.",
    "ten": "There is a every store you can think of such as Target, Walmart, and much more close to campus. My favorite place to go out to eat this pasta place in the center of town.",
    "eleven": "I work at the Learning Commons. I tutots people in math.",
    "tweleve": "Other an the Learning Commons, I go to office hours for help on my assignments.",
    "thirteen": "I am part of Dance Team and Community Out Reach Club",
    "fourteen": 'I love to travel as much as I can. When I travel, I like to take pictures of everything around me. IF i am not traveling I like to bake various different dessert',
    "fifteen": 'I am looking for someone to help me and help others',
    "sixteen": 'Adjusting to campus, and making more friends.',
    "seventeen": 'Looking for someone that has gone through the same challengesd as I have.',
    "eighteen": "I am open to meeting new people, would get lunch with someone to talk about similar and different challenges. "
  }
])

db.friends.insert([
  {
    "name": "Serena Chan",
    "degree": "Undergraduate",
    "school": "University of Massachusetts Amherst",
    "year": "2021",
    "rate":  "4.5",
    "bio": "I am a biology and chemestry majory from Hong Kong. I like to bake, take photos, and watch movies",
  },

  {
    "name": "Caroline Kato",
    "degree": "Undergraduate",
    "school": "University of Massachusetts Amherst",
    "year": "2022",
    "rate": "4",
    "bio": "I am computer enginnering major from Japan, I like shopping, watching movies, and eating.", 
  },

  {
    "name": "Caroline Baker",
    "degree": "Undergraduate",
    "school": "University of Massachusetts Amherst",
    "year": "2020",
    "rate":  "3.5",
    "bio": "I am computer enginnering major from Mass, I like shopping, watching movies, and eating. I am looking to meet new friends and help people know the aera", 
  },
  
  {
    "name" : "Molly Miller",
    "degree": "Graduate",
    "school": "University of Massachusetts Amherst",
    "year": "2021",
    "rate":  "5",
    "bio": "I am computer science major from Ireland, I am looking to make some new friends who know the aera and can drive. In my free time I like to watch Netflex, listen to music, and go on random advantures",
  },

  {
    "name": "Tracy Young",
    "degree": "Graduate",
    "school": "University of Massachusetts Amherst",
    "year" : "2020",
    "rate": "5",
    "bio": "I am computer science major from Itlay, I am looking to make some new friends who know the aera and can drive. In my free time I like to watch Netflex, listen to music, and go on random advantures",
  },

  {
    "name": "Jon Doe",
    "degree": "Graduate",
    "school": "University of Massachusetts Amherst",
    "year": "2023",
    "rate": "3.5",
    "bio": "I am a biology major from Cananda. I am new to the states and looking for someone who knows the aera that can show me around.",
  },

]);
