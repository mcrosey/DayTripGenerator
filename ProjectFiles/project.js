//first decide on locations to use
//states or what???
//ft myers/cape coral/sanibel
//second decide on resturaunts to use
//real; make believe; or just generic types??
//real, pick 5 off google
//third decide on modes of transportation
//like uber? train? bicycle? or is it to the actual destination
//
//fourth decide on types of entertainment
//what is considered entertainment????
//google tourist things in that area, ie sunset sail
//have a pop up that displays all the combined options? (final maybe)
//needs to have a way for user to disagree or opt back/or for new 
//directions state just new so not backwards
//maybe have it pop up each selection at a time and allow user to pick
//^^like a prompt window that displays the choice to enter yes/no
//if no have a new prompt with a new random selection
//rember the password coding, reasigning the variable
//^^ how can you guarentee that is will pick a new random??

//final consolelog will display the full secelction



//example of using math to fairly pick a random location or any type of variable

//let pickMeAPlace = randomLocations[Math.floor(Math.random() * randomLocations.length)];
//console.log(pickMeAPlace);

//first function needs to be focused on the locations 
//success in location picking
//add prompt with that selection
//second prompt only circulates through once .. 




let vacationSpots = ["Ft. Myers", "Sanibel Island", "Pine Island", "Cape Coral", "Captiva"];


function pickMeALocation (locationOptions){
    let positive = "yes";
    let goHere = locationOptions[Math.floor(Math.random() * locationOptions.length)];
    let makeAPick = prompt (goHere + "!" + " " + "Do you wish to travel to this location?");
    while(makeAPick != positive){
        let maybeHere = locationOptions [Math.floor(Math.random() * locationOptions.length)];
        makeAPick = prompt ("How about this location?" + " " + maybeHere);
    }
    console.log(goHere);
}
pickMeALocation (vacationSpots);


let foodList = ["Joe's Crab Shack", "Twisted Lobster", "Izzy's Fish and Oysters", "FINS seafood and Dive Bar", "Cape Cod Fish Company"];


function letsEat (foodChoices){
    let agree = "yes";
    let eatHere = foodChoices [Math.floor(Math.random() * foodChoices.length)];
    let whereToEat = prompt (eatHere + "," + " " + "Do you wish to dine here?");
    while (whereToEat != agree){
        let eatHere2 = foodChoices [Math.floor(Math.random() * foodChoices.length)];
        whereToEat = prompt ("Would you rather dine here?" + " " + eatHere2);
    }
    console.log (eatHere);
}

letsEat (foodList);



let entertainment = ["Sunset sail", "Fishing charter", "Snorkeling", "Shelling", "Seaside cabana"];

function entertainMe (entertainOptions){
    let yes = "yes";
    let attendHere = entertainOptions [Math.floor(Math.random() * entertainOptions.length)];
    let whatToDo = prompt (attendHere + "," + " " + "Would you like to include this activity?");
    while (whatToDo != yes){
        let secondOption = entertainOptions [Math.floor(Math.random() * entertainOptions.length)];
        whatToDo = prompt ("Does this sound more fun?" + " " + secondOption);
    }
    console.log(attendHere);
}
entertainMe (entertainment);


let modesOfTransportation = ["Bicycle", "Moped", "Uber", "Walking trail", "Rental car"];

function howToGetThere (travelOptions){
    let confirm = "yes"
    let wayOfTravel = travelOptions [Math.floor(Math.random() * travelOptions.length)];
    let howToTravel = prompt (wayOfTravel + "," + " " + "Would you like to select this mode of transportation?");
    while (howToTravel != confirm){
        let altTravelOption = travelOptions [Math.floor(Math.random() * travelOptions.length)];
        howToTravel = prompt ("Does this suit your needs better?" + " " + altTravelOption);
    }
    console.log(wayOfTravel);
}

howToGetThere (modesOfTransportation);


let finalMessage = "Congrats on completing your day trip! Enjoy!"

function completion (message){
    let finish = "finish";
    let display = prompt ("Enter finish to finalize your trip")
    while (display == finish){
        let display = alert (message);
        break;
    }
}
completion (finalMessage);