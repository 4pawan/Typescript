"use strict";
var Car = /** @class */ (function () {
    function Car(_speed) {
        this.speed = _speed || 0;
    }
    Car.prototype.accelrate = function () {
        this.speed++;
    };
    ;
    Car.prototype.decreaseSpeed = function () { this.speed--; };
    ;
    Car.prototype.getSpeed = function () { console.log(this.speed); };
    ;
    Car.prototype.noOfWheels = function () { return 4; };
    return Car;
}());
