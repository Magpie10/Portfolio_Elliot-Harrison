let health = 100;
let mana = 100;
let stamina = 100;
let gold = 50;
let level = 0;
let currentWeapon = 0;
let currentArmor = 0;
let fighting;
let monsterHealth;
let inventoryWeapons = ["stick"];
let inventoryArmors = ["tattered old tunic"];

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

const weapons = [
    { name: 'stick', power: 5 },
    { name: 'dirk', power: 30 },
    { name: 'sword', power: 50 },
    { name: 'polearm', power: 100 }
  ];
const armors = [
    { name: 'tattered old tunic', defence: 0 },
    { name: 'leather armor', defence: 5 },
    { name: 'chainmail armor', defence: 15 },
    { name: 'platemail armor', defence: 50 }
  ];
const locations = [
    {
        name: "town square",
        "button text": ["Go to the store", "Look for trouble", "Rest at the Inn", "Fight the evil witch"],
        "button functions": [goStore, goTrouble, goRest, goWitch],
        text: "You return to the town square."
    },
    {
        name: "store",
        "button text": ["Buy a weapon", "Buy armor", "Heal up", "Return to town"],
        "button functions": [buyWeapon, buyArmor, buyHealFull, goTown],
        text: "This \"potion seller\" is more than meets the eye."
    },
    {
        name: "trouble",
        "button text": ["Hunt for a giant rat", "Fight an ogre", "Flee", "Fight the evil witch"],
        "button functions": [fightRat, fightOgre, goTown, goWitch],
        text: "As you get farther away from town, you see in the distance evidence of strange beings."
    },
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
    update(locations[2]);g
}

function goRest() {
    // sets staminText and manaText to 100 reduces goldText by 10
    if (gold >= 10) {
      gold -= 10;
      stamina = 100;
      mana = 100;
      goldText.innerText = gold;
      staminaText.innerText = stamina;
      manaText.innerText = mana;
      text.innerText = "You feel rested and mentally sharp.";
    } else {
        text.innerText = "You do not have enough gold to stay at the Inn.";
      }
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
    if (currentWeapon < weapons.length - 1) {
      if (gold >= 30) {
        gold -= 30;
        currentWeapon++;
        goldText.innerText = gold;
        let newWeapon = weapons[currentWeapon].name;
        text.innerText = "You now have a " + newWeapon + ".";
        inventoryWeapons.push(newWeapon);
        text.innerText += " You have: " + inventoryWeapons + inventoryArmors;
      } else {
        text.innerText = "You do not have enough gold to buy a new weapon.";
      }
    } else {
      text.innerText = "You already have the most powerful weapon!";
      button2.innerText = "Sell weapon for 15 gold";
      button2.onclick = sellWeapon;
    }
  }
  
  function sellWeapon() {
    if (inventoryWeapons.length > 1) {
      gold += 15;
      goldText.innerText = gold;
      let currentWeapon = inventoryWeapons.shift();
      text.innerText = "You sold a " + currentWeapon + ".";
      text.innerText += " You have: " + inventoryWeapons + inventoryArmors;
    } else {
      text.innerText = "I don't think you want to take on the witch with your bare hands, do ya?!";
    }
  }



  function buyArmor() {
    if (currentArmor < armors.length - 1) {
      if (gold >= 30) {
        gold -= 30;
        currentArmor++;
        goldText.innerText = gold;
        let newWeapon = armors[currentWeapon].name;
        text.innerText = "You now have a " + newArmor + ".";
        inventoryArmors.push(newArmor);
        text.innerText += " You have: " + inventoryArmors + inventoryWeapons;
      } else {
        text.innerText = "You do not have enough gold to buy new armor.";
      }
    } else {
      text.innerText = "You already have the strongest armor!";
      button2.innerText = "Sell armor for 15 gold";
      button2.onclick = sellArmor;
    }
  }
  
  function sellArmor() {
    if (inventoryArmors.length > 1) {
      gold += 15;
      goldText.innerText = gold;
      let currentArmor = inventoryArmors.shift();
      text.innerText = "You sold a " + currentArmor + ".";
      text.innerText += " You have: " + inventoryArmors + inventoryWeapons;
    } else {
      text.innerText = "Don't think you want to take on the witch with your bare hands, do ya?!";
    }
  }

function fightRat() {

}

function fightOgre() {
  
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
