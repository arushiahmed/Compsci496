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
    name: 'Piazza Glance',
    status: 'Graduate',
    school: 'University of Massachusetts Amherst',
    year: '2025',
    rate:  4.5,
    bio: 'I am a biology and chemestry majory from Cananda. My favorite food is pizza and anything that is Italian. I really enjoy traveling and want to learn the aera better.',
  },

  {
    name: 'Spire Tower',
    status: 'Undergraduate',
    school: 'University of Massachusetts Amherst',
    year: '2021',
    rate:  4,
    bio: 'I am currently undecided from Wyoming. I like to Hike, Bike, and make craft cheese. I have been to Amherst before I started and know the aera well. I am open to meeting new people.', 
  },

  {
    name: 'Grade Scope',
    status: 'Undergraduate',
    school: 'University of Massachusetts Amherst',
    year: '2021',
    rate: 1.5,
    bio: 'I am Finance Major from New York. I like reading, writing, and watching movies. I am willing to help anyone out that needs infomation about the school. Just a warning I am a New York Gaints Fan!!!',
  },
  {
 
    name: 'Moodle Course',
    status: 'Undergraduate',
    school: 'University of Massachusetts Amherst',
    year: '2023',
    rate: 2,
    bio: 'I am communcations major from Japan. I am hoping to be part of the ZBT brotherhood and want to meet more people outside my major. If anyone has a car on campus or part of ZBT please message me because I want to know more infomation.', 
  },
 
  {
 
    name : 'Owl Demo',
    status: 'Graduate',
    school: 'University of Massachusetts Amherst',
    year: '2022',
    rate:  3,
    bio: 'I am undecided from Massachusetts. My home town is an hour away which is not too far. My whole family went to UMass so I know the area very well. I love to give people advice about the town and where to go for the weekends.',
  },

  {
    name: 'Sam the Minuteman',
    status: 'Undergraduate',
    school: 'University of Massachusetts Amherst',
    year: '2020',
    rate: 4,
    bio: 'I am a Sports Management from Massachusetts. I am part of ROTC and happy to give more infomation about ROTC. If I am not doing school work I am at every UMass home game such as football and hockey.',
  },
  {
    name: 'Echo Three-Sixty',
    status: 'Undergraduate',
    school: 'University of Massachusetts Amherst',
    year: '2024',
    rate: 2.5,
    bio: 'I am  aPsychology Major from Germany. I enjoy making videos for people and part of the theater club. I am willing to help people wether it is school related or not. I am looking for a friend(s) that are interseted in traveling around the state.'
  },

  {
    name: 'Kumble R. Subbaswamy',
    status: 'Graduate',
    school: 'University of Massachusetts Amherst',
    year: '2020',
    rate: 4.5,
    bio: 'I am a Physics major, finishing up my last year, and American Indain. I am open to helping others get throught the transition from undergraduate to gradschool. I like water sports and playing board games for real life.' ,
  },

  {
    name: 'Eduroam Wifi',
    status: 'Graduate',
    school: 'University of Massachusetts Amherst',
    year: '2022',
    rate: 5,
    bio: 'I am a computer science major with a minior in infomation technology. I am from London and very much enjoy programming. If I am not programming then I am either playing video games and live stream on twitch. Fun Fact I am sponsered by Amazon!'
  },

  {
    name: 'HR Direct',
    status: 'Graduate',
    school: 'University of Massachusetts Amherst',
    year: '2021',
    rate: 3,
    bio: 'I am a triple major in Finance, Accounting, and Turf Grass Management with a minor in Math. I am currenlty working three jobs because I am broke college students. I work for the dining commons, peer advisor, and campus tour gruide. If you need any information about the school feel free to message me.' 
  },

  {
    name: 'Frank Worcester',
    status: 'Undergraduate',
    school: 'University of Massachusetts Amherst',
    year: '2022',
    rate: 3.5,
    bio: 'I am a food science major from Calinforina. The only reason why I decided to come to UMass because we are number one in dining. As you can read from my bio I really enjoy food which also means I do love to Baking/Cooking. If anyone is intersted in taking cooking class with me fill free to message me. I also have a car!!' 
  },

  {
    name: 'Berk Hampshire',
    status: 'Undergraduate',
    school: 'University of Massachusetts Amherst',
    year: '2024',
    rate:  4,
    bio: 'I am a Nutrition major from Calinforina. The only reason why I decided to come to UMass because we are number one in dining. As you can read from my bio I really enjoy food which also means I do love to Baking/Cooking. If you can read from my name my favorite dining commons on campus is Berk and Hampshire.'
  },

]);

db.friends.createIndex({status: 1});