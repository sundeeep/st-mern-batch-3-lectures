const vehicle = {
    start: function(){
        console.log("Vehicle is starting")
    },
    stop: function() {
        console.log("Vehicle is starting")
    }
}

const car = {
    wheels: 4,
    drive: function(){
        console.log("We can drive the car!")
    }
}

car.__proto__ = vehicle;

const fuelCar  = {
    hasEngine: true,
    hasDriver: true,
    needFuel: true,
    hasFuelTank: true
}

fuelCar.__proto__ = car;

const petrolCar = {
    fuel: "petrol"
}

petrolCar.__proto__ = fuelCar;

const dieselCar = {
    fuel: "diesel"
}

dieselCar.__proto__ = fuelCar;


const gasCar = {
    fuel: "gas"
}

gasCar.__proto__ = fuelCar;


const electicCar = {
    hasEngine: false,
    hasBattery: true,
    hasDriver: true,
    charge: function(){
        console.log("We can charge the car battery!")
    }
}

electicCar.__proto__ = car;

const selfDrivingTeslaCar = {
    hasDriver: false,
    hasAI: true
}

selfDrivingTeslaCar.__proto__ = electicCar;
selfDrivingTeslaCar.charge();

selfDrivingTeslaCar.start();