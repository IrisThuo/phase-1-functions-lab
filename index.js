// Code your solution in this file!

function distanceFromHqInBlocks(location){
    let locationHq=42;
    let blocks= location-locationHq;
    //ensure to return positive integer by use of math.abs()
    blocks=Math.abs(blocks);
    return blocks; 
}

function distanceFromHqInFeet(feet){
    let newBlocks=distanceFromHqInBlocks(feet);
    let inFeet=newBlocks*264;
    return inFeet;
}

function distanceTravelledInFeet(start, destination){
    let distance=destination-start;
    let distanceTravelled= distance*264;
    distanceTravelled=Math.abs(distanceTravelled);
    return distanceTravelled;
}

function calculatesFarePrice(start, destination){
let howFar=distanceTravelledInFeet(start, destination);
let charges;

 if(howFar<=400){
    charges=0
    return charges;
 }else if(howFar>400 && howFar<=2000){
    charges=(howFar-400)*0.02;
    return charges;
 }else if(howFar>2000 && howFar<=2500){
    charges= 25;
    return charges;
 }else if(howFar > 2500){
    return 'cannot travel that far';
 }
}