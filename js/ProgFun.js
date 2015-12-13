/*ProgFunCode
var stuff;

stuff = prompt("enter some stuff!");

output = "you entered "+stuff+", hooray!";

document.write(output); */


function gameName(){
  
  //This is the variable section!
  var playStyle;
  var gameType;
  var output;
  var yourName;
  var yourTitle;
  
  //This is where we ask client for input!
  gameType = prompt("Please choose one of the following: FPS, RPG, Action,Puzzle or Troll");
  playStyle = prompt("Is your playstyle: Aggressive, Passive, Support or Troll?");
  
  //This is where the random name will be generated for the client!
  if(gameType === "FPS"){
    var arrayOfFPSNames = ["DeadEyeGuy", "NoseScopeYolo", "HeadShots4Baes","OneMoreShot","SwallowMyBullets"];
    yourName = arrayOfFPSNames[ Math.floor ( Math.random () * arrayOfFPSNames.length) ];
    
  }else if(gameType === "RPG"){
    var arrayOfRPGNames = ["Ophelia", "Reya","Percival","Horatio","Licenia","Crixus","Lucian","Raphaela"];
    yourName = arrayOfRPGNames[ Math.floor (Math.random () * arrayOfRPGNames.length)];
    
  }else if(gameType === "Action"){
    var arrayOfActionNames = ["Bruce", "John","Sting","Lady","Boss","Ace","Queen","King","Jack"];
    yourName = arrayOfActionNames[ Math.floor (Math.random () * arrayOfActionNames.length)];
    
  }else if(gameType === "Puzzle"){
    var arrayOfPuzzleNames = ["Straights", "Luvs2Think", "PlacementMaster", "WordWise","Stacker"];
    yourName = arrayOfPuzzleNames[ Math.floor (Math.random () * arrayOfPuzzleNames.length)];
    
  }else if(gameType === "Troll"){
    var arrayOfTrollNames = ["ImaSpicyMeatBall", "Ron Jeremy","Donald Hump", "MeatMyMom","Big Ol' Kitties"];
    yourName = arrayOfTrollNames[ Math.floor (Math.random () * arrayOfTrollNames.length)];
  //If client types in anything but the given choices they'll get this name! 
  }else{
    yourName = "Mud";
  }
  
  //This is where the random title will be generated for the client!
  if(playStyle === "Aggressive"){
    var arrayOfAggressivePlayStyles = ["The Trigger Happy","Ravaging Hands","Firestick Fury","Of One-Thousand Bullets","The Burning Fist"];
    yourTitle = arrayOfAggressivePlayStyles[ Math.floor (Math.random () * arrayOfAggressivePlayStyles.length)];
    
  }else if(playStyle === "Passive"){
    var arrayOfPassivePlayStyles = ["The Fluid", "The Patient", "Of Iron", "The Calm","Stoic Guardian"];
    yourTitle = arrayOfPassivePlayStyles[ Math.floor (Math.random () * arrayOfPassivePlayStyles.length)];
    
  }else if(playStyle === "Support"){
    var arrayOfSupportPlayStyles = ["Of the Soothing Rain", "The Shining Hope", "Crisis Mender","Aegis of the Meek"];
    yourTitle = arrayOfSupportPlayStyles[ Math.floor (Math.random () * arrayOfSupportPlayStyles.length)];
    
  }else if(playStyle === "Troll"){
    var arrayOfTrollPlayStyles = ["The Biscuit Butterer", "The B.F. Commander", "Lord of Lost Yolos","The JackAss of all Trades"];
    yourTitle = arrayOfTrollPlayStyles[ Math.floor (Math.random () * arrayOfTrollPlayStyles.length)];
  //If client types in anything but the given choices they'll get this title!  
  }else{
    yourTitle = "Of Mud";
  }
  //Gotta make sure the client can see their new name and title!
  output = "Your new name is: <h1>"+yourName+
  "</h1>\nand your exciting new title is: <h1>"+yourTitle+"</h1>  If all you got was \"mud\" try typing choices as you see them!";
  document.write(output);
  

}

//Making sure to call the function!
gameName();
