import {CricketCoach} from "./interfaces/impl/CricketCoach";
import {GolfCoach} from "./interfaces/impl/GolfCoach";
import {Coach} from "./interfaces/Coach";

let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();

// declare an arrray for coaches
let coaches: Coach[] = [];
coaches.push(cricketCoach);
coaches.push(golfCoach);

for(let coach of coaches)
    console.log(coach.getDailyWorkout());
