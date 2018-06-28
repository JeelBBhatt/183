//const SHA256=require('crypto-js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

/*******************Hashing using jsonwebtoken**********************/
// let data={ id : 10};

// let token=jwt.sign(data,'145236kk');
// let dtoken=jwt.verify(token,'145236kk');
// console.log(token);
// console.log(dtoken);

/*******************Hashing using bcryptjs**********************/
var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$huAU4qTnQuGPifHEXfV9cOmPJ7p61oKaoXrY1WviiDAznE/rW8oLK';

bcrypt.compare('123!', hashedPassword, (err, res) => {
  console.log(res);
});
