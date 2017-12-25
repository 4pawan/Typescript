	class Car {
		engineName:string;
		gears :number;
	    private speed:number;
		                      constructor(_speed:number) {
	                            this.speed =_speed||0;                             
		                                            }

		   accelrate():void{
		   	this.speed++;
		   }  ;
           decreaseSpeed():void{ this.speed--; };
           getSpeed():void{ console.log(this.speed) };
         static noOfWheels():number{ return 4;}
		   }




		   var mycar = new Car(5);
		   console.log(Car.noOfWheels());
		   mycar.accelrate();
		   mycar.getSpeed();
		   