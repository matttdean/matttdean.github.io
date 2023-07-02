let selector = document.getElementById("menu__selector");
let menu = document.getElementsByClassName("menu--battle")[0];
let attackMenu = document.getElementsByClassName("menu__border--move-list")[0];
let moveInfo = document.getElementsByClassName("menu__border--move-info-container")[0];
let moveList = document.getElementsByClassName("menu__move-list-container")[0];
let moveType = document.getElementById("move-type");
let currentPP = document.getElementById("current-pp");
let totalPP = document.getElementById("total-pp");
let hpBar = document.getElementById("hp-bar");
let opponentPokemon = document.getElementById("opponent-pokemon");
let opponentHPBar = document.getElementById("opponent-hp-bar");
let upButton = document.getElementById("up");
let downButton = document.getElementById("down");
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let aButton = document.getElementById("a-button");
let bButton = document.getElementById("b-button");
let aBSound = new Audio('sfx/SFX_PRESS_AB.wav');
let selectorPosition = 1;
let currentPokemon;
let currentOpponentPokemon;

//Classes
class Pokemon {
    constructor(name, type, hp, totalHP, level, attack, defense, special, speed, moveset) {
        this._name = name;
        this._type = type;
        this._hp = hp;
        this._totalHP = totalHP;
        this._level = level;
        this._attack = attack;
        this._defense = defense;
        this._special = special;
        this._speed = speed;
        this._moveset = moveset;
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    get hp() {
        return this._hp;
    }
    get totalHP() {
        return this._totalHP
    }
    get level() {
        return this._level;
    }
    get attack() {
        return this._attack;
    }
    get defense() {
        return this._defense;
    }
    get special() {
        return this.special;
    }
    get moveset() {
        return this._moveset;
    } 
    set changeHP(newHP) {
        this._hp = newHP;
    }
}

class Move {
    constructor(move, type, pp, totalpp, power, accuracy) {
        this._move = move;
        this._type = type;
        this._pp = pp;
        this._totalpp = totalpp;
        this._power = power;
        this._accuracy = accuracy;
    }
    get move() {
        return this._move;
    }
    get type() {
        return this._type;
    }
    get totalpp() {
        return this._totalpp;
    }
    get pp() {
        return this._pp;
    }
    get power() {
        return this._power;
    }
    get accuracy() {
        return this._accuracy;
    } 
    set changePP(newPP) {
        this._pp = newPP;
    }
}

//Moves
let tackle = new Move("Tackle", "normal", 35, 35, 35, 100);
let growl = new Move("Growl", "normal", 20, 20, 0, 100);


//Pokemon
let bulbasaur = new Pokemon("Bulbasaur", "grass", 20, 20, 5, 11, 11, 13, 13, [tackle, growl]);
let charmander = new Pokemon("Charmander", "fire", 20, 20, 5, 11, 11, 13, 11, [tackle, growl]);

currentPokemon = bulbasaur;
currentOpponentPokemon = charmander;

//set current pokemon
const setPokemon = pokemon => {
    document.getElementById("pokemon-name").innerHTML = pokemon.name;
    document.getElementById("current-hp").innerHTML = pokemon.hp;
    document.getElementById("total-hp").innerHTML = pokemon.hp;
    document.getElementById("pokemon-level").innerHTML = pokemon.level;
    document.getElementById("first").innerHTML = pokemon.moveset[0].move;
    document.getElementById("second").innerHTML = pokemon.moveset[1].move;
    if (pokemon.moveset[2]) {
        document.getElementById("third").innerHTML = pokemon.moveset[2].move;
    }
    if (pokemon.moveset[3]) {
        document.getElementById("fourth").innerHTML = pokemon.moveset[3].move;
    }
    document.getElementById("pokemon").classList.add(pokemon.name.toLowerCase())
}

const setOpponentPokemon = pokemon => {
    document.getElementById("opponent-pokemon-name").innerHTML = pokemon.name;
    document.getElementById("opponent-pokemon-level").innerHTML = pokemon.level;
    document.getElementById("opponent-pokemon").classList.add(pokemon.name.toLowerCase() + "-front")
}

setPokemon(currentPokemon);
setOpponentPokemon(currentOpponentPokemon);

const calculateDamage = (pokemon, oppponent, move) => {
    let damage;
    let stab = 1;
    if (pokemon.type === move.type) {
        stab = 1.5;
    }
    let type = determineTypeEffectiveness(move, oppponent);
    let random = Math.floor(Math.random());
    damage = ((2 * oppponent.level * critical / 5 + 2 ) * move.power * pokemon.attack / oppponent.defense / 50 + 2) * stab * type * random;
    return damage;
}

const updateHealthBar = () => {
    let hpPercentage = Math.floor((100 * currentOpponentPokemon.hp) / currentOpponentPokemon.totalHP);
    if (hpPercentage === 100) {
        hpPercentage = 96;
        opponentHPBar.style.backgroundColor = "#00F800;";
    } else if (hpPercentage < 50 && hpPercentage > 20) {
        opponentHPBar.style.backgroundColor = "#F89000";
    } else if (hpPercentage < 20 && hpPercentage > 0) {
        opponentHPBar.style.backgroundColor = "#F80000"
    } else if (hpPercentage <= 0) {
        hpPercentage = 0;
        opponentPokemon.style.opacity = "0";
    }
    opponentHPBar.style.width = hpPercentage + "%"
    console.log(hpPercentage);
}


const attack = move => {
    if (move.pp > 0) {
        currentOpponentPokemon.changeHP = currentOpponentPokemon.hp - move.power / currentOpponentPokemon.defense;
        move.changePP = move.pp - 1;
        currentPP.innerHTML = move.pp;
        opponentHPBar.style.width = (100 * currentOpponentPokemon.hp) / currentOpponentPokemon.totalHP + "%";
        updateHealthBar();
    }
}

const playSound = sound => {
    sound.volume = 0.1;
	sound.play();
}

const toggleDisplay = e => {
    e.forEach(element => {
        element.classList.toggle("hidden");
    });
}

const setSelectorPosition = num => {
    selector.classList = "position-" + num;
    selectorPosition = num;
}

const moveSelector = e => {
    if (selectorPosition === 1) {
        if (e.key === "s") {
            setSelectorPosition(2);
        } else if (e.key === "d") {
            setSelectorPosition(3);
        } else if (e.key === "Enter") {
            playSound(aBSound);
            toggleDisplay([menu, attackMenu, moveInfo, moveList]);
            setSelectorPosition(11);
            setMoveText(1);
        }
    } else if (selectorPosition === 2) {
        if (e.key === "w") {
            setSelectorPosition(1);
        } else if (e.key === "d") {
            setSelectorPosition(4);
        }
    } else if (selectorPosition === 3) {
        if (e.key === "a") {
            setSelectorPosition(1);
        } else if (e.key === "s") {
            setSelectorPosition(4);
        }
    } else if (selectorPosition === 4) {
        if (e.key === "a") {
            setSelectorPosition(2);
        } else if (e.key === "w") {
            setSelectorPosition(3);
        }
    } else if (selectorPosition === 11) {
        if (e.key === "Backspace") {
            playSound(aBSound);
            toggleDisplay([menu, attackMenu, moveInfo, moveList]);
            setSelectorPosition(1);
        } else if (e.key === "s") {
            setSelectorPosition(12);
            setMoveText(2);
        } else if (e.key === "Enter") {
            attack(currentPokemon.moveset[0]);
        }
    }  else if (selectorPosition === 12) {
        if (e.key === "w") {
            setSelectorPosition(11);
            setMoveText(1);
        } else if (e.key === "Backspace") {
            playSound(aBSound);
            toggleDisplay([menu, attackMenu, moveInfo, moveList]);
            setSelectorPosition(1);
        } else if (e.key === "Enter") {
            attack(currentPokemon.moveset[1]);
        }
    }
}


const setMoveText = (num) => {
    moveType.innerHTML = currentPokemon.moveset[num-1].type;
    currentPP.innerHTML = currentPokemon.moveset[num-1].pp;
    totalPP.innerHTML = currentPokemon.moveset[num-1].totalpp;
}


upButton.addEventListener("click", () => {
    let keyEvent = new KeyboardEvent("keydown", {key: "w"});
    window.dispatchEvent(keyEvent);
});
downButton.addEventListener("click", () => {
    let keyEvent = new KeyboardEvent("keydown", {key: "s"});
    window.dispatchEvent(keyEvent);
});
leftButton.addEventListener("click", () => {
    let keyEvent = new KeyboardEvent("keydown", {key: "a"});
    window.dispatchEvent(keyEvent);
});
rightButton.addEventListener("click", () => {
    let keyEvent = new KeyboardEvent("keydown", {key: "d"});
    window.dispatchEvent(keyEvent);
});
aButton.addEventListener("click", () => {
    let keyEvent = new KeyboardEvent("keydown", {key: "Enter"});
    window.dispatchEvent(keyEvent);
});
bButton.addEventListener("click", () => {
    let keyEvent = new KeyboardEvent("keydown", {key: "Backspace"});
    window.dispatchEvent(keyEvent);
});




window.addEventListener("keydown", moveSelector);