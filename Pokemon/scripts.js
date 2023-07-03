let selector = document.getElementById("menu__selector");
let screen = document.getElementsByClassName("screen")[0];
let menu = document.getElementsByClassName("menu--battle")[0];
let menuText = document.getElementsByClassName("menu__text")[0];
let attackMenu = document.getElementsByClassName("menu__border--move-list")[0];
let moveInfo = document.getElementsByClassName("menu__border--move-info-container")[0];
let moveList = document.getElementsByClassName("menu__move-list-container")[0];
let moveType = document.getElementById("move-type");
let currentPP = document.getElementById("current-pp");
let totalPP = document.getElementById("total-pp");
let hpBar = document.getElementById("hp-bar");
let currentPokemonContainer = document.getElementsByClassName("pokemon__container")[0];
let currentOpponentPokemonContainer = document.getElementById("currentOpponentPokemon");
let opponentPokemon = document.getElementById("opponent-pokemon");
let playerPokemon = document.getElementById("pokemon");
let opponentHPBar = document.getElementById("opponent-hp-bar");
let upButton = document.getElementById("up");
let downButton = document.getElementById("down");
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
let aButton = document.getElementById("a-button");
let bButton = document.getElementById("b-button");
let aBSound = new Audio('sfx/SFX_PRESS_AB.wav');
let battle = new Audio('sfx/battle.mp3');
let victory = new Audio('sfx/victory.mp3');
let tackleSound = new Audio('sfx/Tackle.wav');
let attackSound = new Audio('sfx/SFX_SNARE_9.wav');
let deniedSound = new Audio('sfx/SFX_COLLISION.wav');
let selectorPosition = 1;
let currentPokemon;
let currentOpponentPokemon;

//Classes
class Pokemon {
    constructor(name, type, hp, totalHP, level, attack, defense, special, speed, moveset) {
        this._name = name.toUpperCase();
        this._type = type.toUpperCase();
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
    set changeAttack(newAttack) {
        this._attack = newAttack;
    }
}

class Move {
    constructor(name, type, pp, totalpp, power, accuracy, status) {
        this._name = name.toUpperCase();
        this._type = type.toUpperCase();
        this._pp = pp;
        this._totalpp = totalpp;
        this._power = power;
        this._accuracy = accuracy;
        this._status = status;
    }
    get name() {
        return this._name;
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
    get status() {
        return this._status;
    } 
    set changePP(newPP) {
        this._pp = newPP;
    }
    statusEffect(a, b) {
        this._status(a, b);
    }
}

const lowerAttack = (target) => {
    if (target.attack > 5) {
    target.changeAttack = target.attack * 0.9;
    }
}

const growlEffect = (target) => {
    lowerAttack(target);
    setTimeout (() => {
        menuText.textContent = "";
        displayText(`${target.name}'s attack fell!`);
    }, 500);
}

//Moves
let tackle = new Move("Tackle", "normal", 35, 35, 35, 100);
let growl = new Move("Growl", "normal", 20, 20, 0, 100, growlEffect);


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
    document.getElementById("first").innerHTML = pokemon.moveset[0].name;
    document.getElementById("second").innerHTML = pokemon.moveset[1].name;
    if (pokemon.moveset[2]) {
        document.getElementById("third").innerHTML = pokemon.moveset[2].name;
    }
    if (pokemon.moveset[3]) {
        document.getElementById("fourth").innerHTML = pokemon.moveset[3].name;
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

const calculateDamage = (attacker, defender, move) => {
    let damage;
    let stab = 1;
    //let type = determineTypeEffectiveness(defender, move);
    if (attacker.type === move.type) {
        stab = 1.5;
    }
    
    //let type = determineTypeEffectiveness(move, oppponent);
    //let random = Math.floor(Math.random());
    //damage = ((2 * oppponent.level * critical / 5 + 2 ) * move.power * pokemon.attack / oppponent.defense / 50 + 2) * stab * type * random;
    damage = ((2 * defender.level * 1 / 5 + 2 ) * move.power * attacker.attack / defender.defense / 50) * stab;

    return damage;
}

const updateHealthBar = (pokemon, user) => {
    let hpPercentage = Math.floor((100 * pokemon.hp) / pokemon.totalHP);
    if (hpPercentage > 96) {
        hpPercentage = 96;
        user.style.backgroundColor = "#00F800;";
    } else if (hpPercentage < 50 && hpPercentage > 20) {
        user.style.backgroundColor = "#F89000";
    } else if (hpPercentage < 20 && hpPercentage > 0) {
        user.style.backgroundColor = "#F80000"
    } else if (hpPercentage <= 0) {
        hpPercentage = 0;
        if (pokemon === currentPokemon) {
            playerPokemon.style.opacity = "0";    
            menuText.textContent = "";
            displayText(`${currentPokemon.name} has fainted!`)
        } else if (pokemon === currentOpponentPokemon) {
            opponentPokemon.style.opacity = "0";
            menuText.textContent = "";
            displayText(`Enemy ${currentOpponentPokemon.name} has fainted!`)
            pauseSound(battle);
            playSound(victory, true);

        }
    }
    user.style.width = hpPercentage + "%"
}

const displayText = text => {
    let newText = text.split("");
    let result = [];
    for (let i = 0; i < newText.length; i += 3) result.push(newText.slice(i, i + 3));
    result.forEach((element, i) => setTimeout(() => {menuText.textContent += element.join("")}, 50 * i));
}

let playersTurn = "player";


const attack = (attacker, defender, move, user) => {


    displayText(`${attacker.name} used ${move.name}!`);
    if (move.status) {
        move.statusEffect(defender);
        setTimeout(() => {

        }, 500)
    }
    if (playersTurn === "player") {
        screen.classList.remove("screen-shake");
        currentOpponentPokemonContainer.classList.remove("attack");
        currentPokemonContainer.classList.add("attack");
    } else if (playersTurn === "opponent") {
        screen.classList.remove("screen-shake");
        currentPokemonContainer.classList.remove("attack");
        currentOpponentPokemonContainer.classList.add("attack");   
    }
    playSound(tackleSound);
    setTimeout(() => {
        screen.classList.add("screen-shake");
        playSound(attackSound);
    }, 500);

    let damage = calculateDamage(attacker, defender, move);
    defender.changeHP = defender.hp - damage;
    move.changePP = move.pp - 1;
    currentPP.innerHTML = move.pp;
    setTimeout(updateHealthBar, 1000, defender, user);
    if (playersTurn === "player" && currentOpponentPokemon.hp >= 0) {
        playersTurn = "opponent";
        setTimeout(startOpponentsTurn, 1500);
    } else if (playersTurn === "opponent" && currentPokemon.hp >= 0) {
        togglePlayerTurn();
        setTimeout(startPlayersTurn, 1500);
    } 
}


const togglePlayerTurn = () => {
    playersTurn === "player" ? playersTurn = "opponent" : playersTurn = "player";
}


const startPlayersTurn = () => {
    menuText.textContent = "";
    toggleDisplay([menu]);
    setSelectorPosition(1);
}
const startOpponentsTurn = () => {
    menuText.textContent = "";
    let random = Math.floor(Math.random() * 10);
    let attackIndex;
    random < 8 ? attackIndex = 0 : attackIndex = 1;
    setTimeout(attack, 1000, currentOpponentPokemon, currentPokemon, currentOpponentPokemon.moveset[attackIndex], hpBar);
}

const playSound = (sound, loop) => {
    sound.volume = 0.1;
	sound.play();
    if (loop) {
        sound.loop = true;
    }
}

const pauseSound = sound => {
    sound.pause();
}


const playAnimation = (pokemon, animation) => {
    pokemon.classList.add(animation);
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


//controls
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
        } else if (e.key === "Enter") {
            playSound(deniedSound);
        }
    } else if (selectorPosition === 3) {
        if (e.key === "a") {
            setSelectorPosition(1);
        } else if (e.key === "s") {
            setSelectorPosition(4);
        } else if (e.key === "Enter") {
            playSound(deniedSound);
        }
    } else if (selectorPosition === 4) {
        if (e.key === "a") {
            setSelectorPosition(2);
        } else if (e.key === "w") {
            setSelectorPosition(3);
        } else if (e.key === "Enter") {
            playSound(deniedSound);
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
            toggleDisplay([ attackMenu, moveInfo, moveList]);
            setSelectorPosition(0)
            attack(currentPokemon, currentOpponentPokemon, currentPokemon.moveset[0], opponentHPBar);
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
            toggleDisplay([ attackMenu, moveInfo, moveList]);
            attack(currentPokemon, currentOpponentPokemon, currentPokemon.moveset[1], opponentHPBar);
            setSelectorPosition(0)
        } 
    }   else if (selectorPosition === 13) {
            if (e.key === "w") {
                setSelectorPosition(12);
                setMoveText(2);
            } else if (e.key === "s") {
                setSelectorPosition(14);
                setMoveText(4);
            } else if (key.e === "Enter") {
                toggleDisplay([ attackMenu, moveInfo, moveList]);
                playSound(aBsound);
                attack(currentPokemon, currentOpponentPokemon, currentPokemon.moveset[2], opponentHPBar);
                setSelectorPosition(0)
            } else if (e.key === "Backspace") {
                //playSound(aBSound);
                //toggleDisplay([menu, attackMenu, moveInfo, moveList]);
                //setSelectorPosition(1);
            } 
    } else if (selectorPosition === 14) {
        if (e.key === "w") {
            setSelectorPosition(13);
            setMoveText(3);
        } else if (e.key === "Enter") {
            //toggleDisplay([ attackMenu, moveInfo, moveList]);
            //playSound()
        }
    }
}


const setMoveText = (num) => {
    moveType.innerHTML = currentPokemon.moveset[num-1].type;
    currentPP.innerHTML = currentPokemon.moveset[num-1].pp;
    totalPP.innerHTML = currentPokemon.moveset[num-1].totalpp;
}


//trigger event listeners when buttons are clicked

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
    playSound(battle, true);
});
bButton.addEventListener("click", () => {
    let keyEvent = new KeyboardEvent("keydown", {key: "Backspace"});
    window.dispatchEvent(keyEvent);
});




window.addEventListener("keydown", moveSelector);