export var SYSDEMANDS = [
  {"projectTitle": "Grubhub",
   "description": "Make food come to you more easily",
   "deadline": "Dec 12, 2018",
   "currentBid": "$1337",
   "postTime": "3 hours ago",
   "status": "closed",},

  {"projectTitle": "CCNY",
   "description": "College with leaky ceilings",
   "deadline": "January 14, 2020",
   "currentBid": "$100000000",
   "postTime": "A day ago",
   "status": "closed",},

  {"projectTitle": "Flora",
   "description": "Online flower shop",
   "deadline": "April 13th, 2019",
   "currentBid": "$8008",
   "postTime": "A month ago",
   "status": "open",},
 ];

export var USERS =
  {'developers': [
    {"name": "Enzo Ames",
     "bio": "Founder of Plugr",
     "since": "Dec 12, 2012",
     "rating": '5',},

     {"name": "Norbu Tsering",
     "bio": "CCNY Student",
     "since": "Oct 14, 2011",
     "rating": '5',},

     {"name": "Sami Abed",
     "bio": "Hacker",
     "since": "Nov 04, 1337",
     "rating": '5',},

     {"name": "Rohan Swaby",
     "bio": "Database Guy",
     "since": "Apr 1, 2011",
     'rating': '5',},],

  'clients': [
    {"name": "Jon Doe",
     "bio": "Lazy mofo",
     "since": "Dec 12, 2012",
     'rating': '1',},

     {"name": "Alan Greenspan",
     "bio": "Dummy",
     "since": "Oct 14, 2011",
     'rating': '2',},

     {"name": "Alice Cambell",
     "bio": "Soup Enthusiast",
     "since": "Apr 1, 2011",
     'rating': '3',},

     {"name": "George Orwell",
     "bio": "Sci-Fi Author",
     "since": "Nov 15, 2017",
     'rating': '5',},],
   };

 export var BIDS = [];

let SD_ids = [];
let C_ids = [];
let D_ids = [];
let B_ids = [];

let NUM_BIDS = 20;

for (var i = 0; i < SYSDEMANDS.length; i++) {
  SD_ids.push(i);
  SYSDEMANDS[i].id = i;
}

let UID = 0
for (var i = 0; i < USERS.developers.length; i++) {
  D_ids.push(UID)
  USERS.developers[i].id=UID;
  UID += 1;
}

for (var i = 0; i < USERS.clients.length; i++) {
  C_ids.push(UID)
  USERS.clients[i].id=UID;
  UID += 1;
}

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

//fill bids array
for (var i = 0; i < NUM_BIDS; i++) {
  let R_Dev = D_ids.sample();
  let R_Sys = SD_ids.sample();
  let R_amm = Math.floor(Math.random()*2000);
  BIDS.push({})
  BIDS[i].bidderID = R_Dev;
  BIDS[i].bidAmount = R_amm;
  BIDS[i].sysDemandID = R_Sys;
}

//assign sys demand owners
for (var i = 0; i < SYSDEMANDS.length; i++) {
  SYSDEMANDS[i].posterID = C_ids.sample();
}
