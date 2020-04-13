class Robot {

    constructor() {}

    work() {
        console.log("I'm Robot - I'm working")
    }
}

class CoffeeRobot extends Robot {

    constructor() {
        super();
    }

    work() {
        console.log("I'm CoffeeRobot - I make coffee")
    }
}

class RobotDancer extends Robot {

    constructor() {
        super();
    }

    work() {
        console.log("I'm RobotDancer - I dance")
    }
}

class RobotCooker extends Robot {

    constructor() {
        super();
    }

    work() {
        console.log("I'm RobotCooker - I cook")
    }
}

let coffeeRobot = new CoffeeRobot();
let robotDancer = new RobotDancer();
let robotCooker = new RobotCooker();

let robots = [coffeeRobot, robotDancer, robotCooker];
for (let robot in robots) {
    robots[robot].work()
}

