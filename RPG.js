let health = 100;
let mana = 100;
let stamina = 100;
let gold = 50;
let level = 0;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#text");
const levelText = document.querySelector("#levelText");
const healthText = document.querySelector("#healthText");
const manaText = document.querySelector("#manaText");
const staminaText = document.querySelector("#staminaText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [
    {
        name: "town square",
        "button text": ["Go to the store", "Look for trouble", "Rest at the Inn", "Fight the evil witch"],
        "button functions": [goStore, goTrouble, goRest, goWitch],
        text: "You return to the town square."
    },
    {
        name: "store",
        "button text": ["Buy a weapon", "Heal up", "Gossip", "Return to town"],
        "button functions": [buyWeapon, buyHealFull, goGossip, goTown],
        text: "This \"potion seller\" is more than meets the eye."
    },
    {
        name: "trouble",
        "button text": ["Hunt for a giant rat", "Fight an ogre", "Flee", "Fight the evil witch"],
        "button functions": [fightRat, fightOgre, goTown, goWitch],
        text: "As you get farther away from town, you see in the distance evidence of strange beings."
    },
    /*
    {
        name: "fight",
        "button text": ["Attack", "Cast a spalll", "block", "Flee"],
        "button functions": [goAttack, goSpell, goBlock, goTown],
        text: "A ravenous beast stands before you with snarling teeth and fur standing on end."
    }, 
    {
        name: "spell",
        "button text": ["Hurl a fireball", "Heal yourself", "Go back"],
        "button functions": [goFireBall, goHeal, goFight],
        text: "A ravenous beast stands before you with snarling teeth and fur standing on end."
    },*/
    {
        name: "witch",
        "button text": ["Attack", "Cast a spalll", "block", "Flee"],
        "button functions": [goAttack, goSpell, goBlock, goTown],
        text: "A rancid venemous hag stares strait into your soul with eyes as black as night."
    }
];

// initilize buttons
button1.onclick = goStore;
button2.onclick = goTrouble;
button3.onclick = goRest;
button4.onclick = goWitch;

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button4.innerText = location["button text"][3];
    button1.onclick = location["button function"][0];//HERE//
    button2.onclick = location["button function"][1];
    button3.onclick = location["button function"][2];
    button4.onclick = location["button function"][3];
    text.innerText = location.text;
  }

function goTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
    console.log("Went to store")
}

function goTrouble() {
    update(locations[2]);
}

function goRest() {
    // sets staminText and manaText to 100 reduces goldText by 10
       text.innerText = "You feel rested and mentally sharp.";
}

function goWitch() {
    update(locations[5]);
    console.log("Fighting the witch.");
}

function buyHealFull() {
    //  set healthText to 100
    // reduct goldText by 20
}

function buyWeapon() {
}

function fightRat(){

}

function fightOgre(){
  
}





function goFight() {
    update(locations[3]);
}

function goGossip() {
}

function goAttack() {
    // reduces staminaText by 15
    // reduces healthText by 15
    // reduces monsterHealth 15
    }

function goSpell() {
    update(locations[4]);
    button1.innerText = "Hurl a fireball";
    button2.innerText = "Heal yourself";
    button3.innerText = "Go back";
    button1.onclick = goFireBall;
    button2.onclick = goHeal;
    button3.onclick = goTrouble;
    text.innerText = "What will you choose to do with this power you possess?";
}

goSpell()

function goBlock() {
}


function goFireBall() {
// reduce monsterHealText by 25
// reduce manaText by 20(min 0/requires > 20)
// reduces healthText 15
}

function goHeal() {
// Increases healthText by 20 (max 100)
// Reduces mana by 25 (min 0/requires > 25)
}


/*button1.innerText = "Go to store";
    button2.innerText = "Look for trouble";
    button3.innerText = "rest";
    button1.onclick = goStore;
    button2.onclick = goTrouble;
    button3.onclick = goRest;
    text.innerText = "You are in civilization.";
  }
*/


/* button1.innerText = "Buy a weapon";
    button2.innerText = "Heal up";
    button3.innerText = "Return to town";
    button1.onclick = buyWeapon;
    button2.onclick = buyHealFull;
    button3.onclick = goTown;
    text.innerText = "This \"potion seller\" is more than meets the eye.";
} */

/*  button1.innerText = "Attack";
  button2.innerText = "Cast a spalll";
  button3.innerText = "Flee";
  button1.onclick = goAttack;
  button2.onclick = goSpell;
  button3.onclick = goTown;
  text.innerText = "A ravenous beast stands before you with snarling teeth and fur standing on end.";
}*/
