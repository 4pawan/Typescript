
// interce can be used to create custom dataType....defines contract tht each class/objects will hv to follow.....
//not compiled to JS 

let myvar :string ;

interface User{
   firstName :string;
   lastName:string;
   phone?:number
}	

let myuser :User;
myuser = {
firstName:"ABC",
lastName:"TRTT"
};


interface canDrive {
	accelerate(msg :string):string ;
}

let mynewcar: canDrive =
{
    accelerate(msg:string) {
        return msg;
    }

}



console.log(myuser);

let msg:string = mynewcar.accelerate("Yes...I can drive!");
console.log(msg);