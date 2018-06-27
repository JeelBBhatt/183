//const SHA256=require('crypto-js');
const jwt=require('jsonwebtoken');

let data={ id : 10};

let token=jwt.sign(data,'145236kk');
let dtoken=jwt.verify(token,'145236kk');
console.log(token);
console.log(dtoken);