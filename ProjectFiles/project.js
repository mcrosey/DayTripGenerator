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



let vacationSpots = ["1", "2", "3"];

function pickMeALocation (locationOptions){
    let positive = "yes";
    let goHere = locationOptions[Math.floor(Math.random() * locationOptions.length)];
    let maybeHere = locationOptions [Math.floor(Math.random() * locationOptions.length)];
    
    let makeAPick = prompt (goHere + "!" + " " + "Do you wish to pick this location? ");
        while (makeAPick != positive){
            
                 makeAPick = prompt ("How about this location?" + " " + maybeHere);
            }
            console.log(goHere);
        }
      




pickMeALocation(vacationSpots);
//come back to fix the randomizing

//swap out letters with actual locations once it fully works
let foodChoices = ["a", "b", "c"];

function letsEat (foodChoices){
    let agree = "yes";
    let eatHere = foodChoices [Math.floor(Math.random() * foodChoices.length)];
    let eatHere2= foodChoices [Math.floor(Math.random() * foodChoices.length)];
    let whereToEat = prompt (eatHere + "," + " " + "Do you wish to dine here?");
        while (whereToEat != agree){
            whereToEat = prompt ("Would you rather dine here?" + " " + eatHere2);
        
        }
        console.log(whereToEat);
}

letsEat (foodChoices);