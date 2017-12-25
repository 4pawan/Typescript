"use strict";
// interce can be used to create custom dataType....defines contract tht each class/objects will hv to follow.....
//not compiled to JS 
var myvar;
var myuser;
myuser = {
    firstName: "ABC",
    lastName: "TRTT"
};
var mynewcar = {
    accelerate: function (msg) {
        return msg;
    }
};
console.log(myuser);
var msg = mynewcar.accelerate("Yes...I can drive!");
console.log(msg);
