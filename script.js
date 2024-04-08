let xp = 0;
let health = 100;
let maxHealth;
let gold = 1000;
let profession;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let monsterLevel;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const powerText = document.querySelector("#powerText");
const goldText = document.querySelector("#goldText");
const majorText = document.querySelector("#majorText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const playButton = document.querySelector("#playButton");
const professions = document.querySelector("#professions");
const professionsText = document.querySelector("#professionText");
const professionButtons = document.querySelectorAll(".profession");
const monsterLevelText = document.querySelector("#monsterLevel");

professionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedProfession = button.dataset.profession;
    selectProfession(selectedProfession);
  });
});

function selectProfession(professionName) {
  profession = professionName;
  professions.style.display = "none";
  stats.style.display = "block";
  controls.style.display = "block";
  majorText.innerText = professionName;
  updateProfessionStats(professionName);
}

function updateProfessionStats(profession) {
  const selectedProfession = professionsData.find((p) => p.name === profession);
  if (selectedProfession) {
    health = selectedProfession.health;
    power = selectedProfession.power;
    healthText.innerText = health;
    powerText.innerText = power;
  }
}
// const powerText = document.querySelector("#powerText");
// const speedText = document.querySelector("#speedText");
// const rangeText = document.querySelector("#rangeText");
// const statsDiv = document.querySelector("#statsDiv");

const professionsData = [
  { name: "Warrior", health: 120, power: 5, speed: 6, range: 3 },
  { name: "Mage", health: 50, power: 5, speed: 5, range: 9 },
  { name: "Archer", health: 65, power: 5, speed: 10, range: 10 },
  { name: "Priest", health: 100, power: 5, speed: 5, range: 8 },
  { name: "Knight", health: 150, power: 5, speed: 3, range: 2 },
];

playButton.addEventListener("click", function () {
  document.getElementById("professions").style.display = "block";
  document.getElementById("playButton").style.display = "none";
});

function selectProfessions(professions) {
  text.innerText = "You've chosen the " + professions + " profession.";
  document.getElementById("stats").style.display = "block";
  document.getElementById("controls").style.display = "block";
}

const weapons = [
  { name: "stick", power: 5 },
  { name: "dagger", power: 30 },
  { name: "claw hammer", power: 50 },
  { name: "sword", power: 100 },
  { name: "gun", power: 500 },
  { name: "Spear of Longinus", power: 1000 },
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15,
    // attackPower: 5,
    // defense: 2,
    // elementalAffinity: "water",
    // specialAbilities: ["Slime Spit", "Regeneration"],
    // drops: ["Slime Essence", "Gold"],
  },
  {
    name: "fanged beast",
    level: 5,
    health: 60,
    // attackPower: 10,
    // defense: 5,
    // specialAbilities: ["Bite", "Frenzy"],
  },
  {
    name: "chick goblin",
    level: 10,
    health: 95,
    // attackPower: 25,
    // defense: 15,
    // specialAbilities: ["slash", "stab"],
  },
  {
    name: "orc",
    level: 15,
    health: 300,
  },
  {
    name: "ghoul",
    level: 20,
    health: 500,
  },
  {
    name: "gargoyle",
    level: 30,
    health: 1200,
  },
  {
    name: "fire devil",
    level: 35,
    health: 1500,
  },
  {
    name: "demon",
    level: 42,
    health: 2700,
  },
  {
    name: "death knight",
    level: 55,
    health: 5000,
  },
  {
    name: "dragon",
    level: 100,
    health: 1000,
  },
];
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to map", "Fight dragon"],
    "button functions": [goStore, goMap, fightDragon],
    text: 'You are in the town square. You see a sign that says "Store".',
  },
  {
    name: "store",
    "button text": [
      "Buy 10 health (10 gold)",
      "Buy weapon (30 gold)",
      "Go to town square",
    ],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store.",
  },
  {
    name: "map",
    "button text": [
      "Novice Village",
      "Outpost",
      "Terror Canyon",
      "Legion War",
      "Go to town square",
    ],
    "button functions": [goNoviceVillage, goOutpost, goTerrorCanyon, goTown],
    text: "Your enter the map, where do you want to go?",
  },
  {
    name: "novice village",
    "button text": ["slime", "fanged beast", "chick goblin"],
    "button functions": [fightSlime, fightBeast, fightGoblin],
    text: "You've entered Novice Village. It's a peaceful area for adventurers just starting out (Level 1 to 10).",
  },
  {
    name: "outpost",
    "button text": ["orc", "ghoul", "gargoyle"],
    "button functions": [fightOrc, fightGhoul, fightGargoyle],
    text: "You've arrived at the Outpost. It serves as a hub for adventurers venturing into more dangerous territories (Level 10 to 30).",
  },
  {
    name: "terror canyon",
    "button text": ["fire devil", "demon", "death knight"],
    "button functions": [fightDevil, fightDemon, fightKnight],
    text: "You've reached Terror Canyon. It's a treacherous place filled with dangerous monsters and hidden dangers (Level 30 to 55).",
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster.",
  },
  {
    name: "kill monster",
    "button text": [
      "Go to town square",
      "Go to town square",
      "Go to town square",
    ],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.',
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;",
  },
  {
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;",
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
  },
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goMap;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];

  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goMap() {
  update(locations[2]);
  button1.onclick = locations[2]["button functions"][0];
  button2.onclick = locations[2]["button functions"][1];
  button3.onclick = locations[2]["button functions"][2];
}

function goNoviceVillage() {
  update(locations[3]);
  button1.onclick = locations[3]["button functions"][0];
  button2.onclick = locations[3]["button functions"][1];
  button3.onclick = locations[3]["button functions"][2];
}
function goOutpost() {
  update(locations[4]);
  button1.onclick = locations[4]["button functions"][0];
  button2.onclick = locations[4]["button functions"][1];
  button3.onclick = locations[4]["button functions"][2];
}

function goTerrorCanyon() {
  update(locations[5]);
  button1.onclick = locations[5]["button functions"][0];
  button2.onclick = locations[5]["button functions"][1];
  button3.onclick = locations[5]["button functions"][2];
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 100;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      let newWeaponPower = weapons[currentWeapon].power;
      let totalPower = power + newWeaponPower;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
      powerText.innerText = totalPower;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let soldWeapon = inventory.splice(currentWeapon, 1)[0];
    if (currentWeapon >= inventory.length) {
      currentWeapon = inventory.length - 1;
    }
    let newWeapon = weapons[currentWeapon].name;
    let newWeaponPower = weapons[currentWeapon].power;
    let totalPower = power + newWeaponPower;
    text.innerText = "You sold a " + soldWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
    powerText.innerText = totalPower;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightGoblin() {
  fighting = 2;
  goFight();
}

function fightOrc() {
  fighting = 3;
  goFight();
}

function fightGhoul() {
  fighting = 4;
  goFight();
}

function fightGargoyle() {
  fighting = 5;
  goFight();
}

function fightDevil() {
  fighting = 6;
  goFight();
}

function fightDemon() {
  fighting = 7;
  goFight();
}

function fightKnight() {
  fighting = 8;
  goFight();
}
function fightDragon() {
  fighting = 9;
  goFight();
}

function goFight() {
  update(locations[6]);
  monsterHealth = monsters[fighting].health;
  monsterLevel = monsters[fighting].level;
  monsterStats.style.display = "block";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
  monsterLevelText.innerText = monsterLevel;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText +=
    " You attack it with your " + weapons[currentWeapon].name + ".";

  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -=
      weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
  } else {
    text.innerText += " You miss.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    if (fighting === 9) {
      winGame();
    } else {
      defeatMonster();
    }
  }
  if (Math.random() <= 0.1 && inventory.length !== 1) {
    text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = level * 5 - Math.floor(Math.random() * xp);
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > 0.2 || health < 20;
}

function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function updateLevel() {
  const levelText = document.getElementById("levelText");
  const playerLevel = calculateLevel(xp);
  levelText.innerText = playerLevel;

  if (playerLevel > 1) {
    power += 20;
    if (currentWeapon >= 0 && currentWeapon < weapons.length) {
      power += weapons[currentWeapon].power;
    }
    health += 50;
    healthText.innerText = health;
    powerText.innerText = power;
  }
}
function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[7]);
  checkLevelUp();
  updateLevel();
}

function calculateLevel(xp) {
  if (xp >= 20 && xp < 100) {
    return Math.floor((xp - 20) / 20) + 1;
  } else if (xp >= 100 && xp < 350) {
    return Math.floor((xp - 350) / 100) + 6;
  } else if (xp >= 350 && xp < 550) {
    return Math.floor((xp - 550) / 150) + 11;
  } else {
    return 1;
  }
}

function checkLevelUp() {
  const currentLevel = calculateLevel(xp);
  const previousLevel = calculateLevel(xp - 1);
  if (currentLevel > previousLevel) {
    health += 50;
    power += 20;
    healthText.innerText = health;
    powerText.innerText = power;
    updateLevel();
  }
}

function lose() {
  update(locations[8]);
  restart();
}

function winGame() {
  update(locations[9]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  professions.style.display = "block";
  playButton.style.display = "none";
  stats.style.display = "none";
  controls.style.display = "none";
  text.innerText = "You die, you have to start a new game.";
  button1.innerText = "Go to town";
  button2.innerText = "Go to store";
  button3.innerText = "Fight dragon";
  button1.onclick = goTown;
  button2.onclick = goStore;
  button3.onclick = fightDragon;
  checkLevelUp();
  updateLevel();
}

function restartGame() {
  goTown();
}

function easterEgg() {
  update(locations[10]);
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health <= 0) {
      lose();
    }
  }
}
