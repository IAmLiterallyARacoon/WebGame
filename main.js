let username;
let consoleInput1;

const logBtn = document.getElementById("logBtn");
const logCountLabel = document.getElementById("logCountLabel");
const logsPerSecondLabel = document.getElementById("logsPerSecondLabel");
let baseLogsFromClick = 1;
let logsFromClick;


const buyLJBtn = document.getElementById("buyLJBtn");
const LJCountLabel = document.getElementById("LJCountLabel");

const buyLoggerBtn = document.getElementById("buyLoggerBtn");
const LoggerCountLabel = document.getElementById("LoggerCountLabel");

const buyChainsawBtn = document.getElementById("buyChainsawBtn");
const ChainsawCountLabel = document.getElementById("ChainsawCountLabel");

const buywoodchuckBtn = document.getElementById("buyWoodchuckBtn");
const woodchuckCountLabel = document.getElementById("WoodchuckCountLabel");

const Upgrade0Button = document.getElementById("Upgrade0Button");
const Upgrade0Label = document.getElementById("Upgrade0Label");
let Upgrade0Amount = 0;
let Upgrade0BaseCost = 50.0;
let Upgrade0Cost;

const Upgrade1Button = document.getElementById("Upgrade1Button");
const Upgrade1Label = document.getElementById("Upgrade1Label");
let Upgrade1Amount = 0;
let Upgrade1BaseCost = 100.0;
let Upgrade1Cost;

const Upgrade2Button = document.getElementById("Upgrade2Button");
const Upgrade2Label = document.getElementById("Upgrade2Label");
let Upgrade2Amount = 0;
let Upgrade2BaseCost = 500;
let Upgrade2Cost;

const Upgrade3Button = document.getElementById("Upgrade3Button");
const Upgrade3Label = document.getElementById("Upgrade3Label");
let Upgrade3Amount = 0;
let Upgrade3BaseCost = 2500;
let Upgrade3Cost;

const Upgrade4Button = document.getElementById("Upgrade4Button");
const Upgrade4Label = document.getElementById("Upgrade4Label");
let Upgrade4Amount = 0;
let Upgrade4BaseCost = 10000;
let Upgrade4Cost;


let logsPerSecond = 0;
let logCount = 0;

const CoinsAmountLabel = document.getElementById("CoinsAmount")
const CoinsBuyLabel = document.getElementById("CoinsBuyLabel")
const CoinsBuyBtn = document.getElementById("CoinsBuyBtn")
let coins = 0;
let logsToCoins = 100;
let increaseNT = false;

let LJBaseCost = 12;
let LJCost;
let LJ = 0;
let baseLJProduce = 1;
let LJProduce;

let LoggerBaseCost = 80
let LoggerCost;
let Loggers = 0;
let baseLoggerProduce = 1;
let LoggerProduce;

let ChainsawBaseCost = 500
let ChainsawCost;
let Chainsaws = 0;
let baseChainsawProduce = 5;
let ChainsawProduce;

let woodchuckBaseCost = 3000
let woodchuckCost;
let woodchucks = 0;
let baseWoodchuckProduce = 16;
let woodchuckProduce;

// pets

const DogPetButton = document.getElementById("DogPetButton");
let DogPetCost = 10;
let DogPetMultiplier = 1;
let DogPetOwned = false;

var hitLog = new Audio("assets/hitLog.wav");
var clickFail = new Audio("assets/clickFail.wav");
var buyItem = new Audio("assets/buyItem.wav");


// enter name

document.getElementById("usernameSubmit").onclick = function(){
    username = document.getElementById("usernameInput").value;
    document.getElementById("h1").textContent = `Welcome ${username}`;
    document.getElementById("usernameSelection").style.display = "none";
    document.getElementById("importSave").style.display = "none";
    document.getElementById("mainProgram").style.display = "block";
    document.getElementById("saveExport").style.display = "block";
    document.getElementById("Console").style.display = "block";
}
// import save

// username, logs, LJ, Loggers, Upgrade 1 amount, Upgrade 2 amount, blank, blank, LJ produce, Loggers produce, blank, blank, Chainsaws, chainsaw produce, blank, upgrade 3 amount, woodchucks, woodchuck produce, blank, upgrade 4 amount, coins, coins cost, dog pet owned

let saveData;

document.getElementById("saveSubmit").onclick = function(){
    saveData = document.getElementById("saveInput").value;
    saveData = saveData.split(",");
    console.log(saveData);
    username = saveData[0];
    logCount = Number(saveData[1]);
    LJ = Number(saveData[2]);
    Loggers = Number(saveData[3]);
    Upgrade1Amount = Number(saveData[4]);
    Upgrade2Amount = Number(saveData[5]);
    LJProduce = Number(saveData[8]);
    LoggerProduce = Number(saveData[9]);
    Chainsaws = Number(saveData[12]);
    ChainsawProduce = Number(saveData[13]);
    Upgrade3Amount = Number(saveData[15])
    woodchucks = Number(saveData[16]);
    woodchuckProduce = Number(saveData[17]);
    Upgrade4Amount = Number(saveData[19])
    coins = Number(saveData[16]);
    logsToCoins = Number(saveData[17]);
    DogPetOwned = Boolean(saveData[19])
    document.getElementById("h1").textContent = `Welcome ${username}`;
    updateGame();
    document.getElementById("usernameSelection").style.display = "none";
    document.getElementById("importSave").style.display = "none";
    document.getElementById("mainProgram").style.display = "block";
    document.getElementById("saveExport").style.display = "block";
    document.getElementById("Console").style.display = "block";
}

// console

document.getElementById("consoleSubmit").onclick = function(){
    consoleInput1 = document.getElementById("consoleInput").value;
    consoleInput1 = consoleInput1.toLowerCase();
    give = false
    remove = false
    lumberjack = false
    logger = false
    chainsaw = false
    woodchuck = false
    give = consoleInput1.includes("give");
    remove = consoleInput1.includes("remove");
    lumberjack = consoleInput1.includes("lumberjack");
    logger = consoleInput1.includes("logger");
    chainsaw = consoleInput1.includes("chainsaw");
    woodchuck = consoleInput1.includes("woodchuck");
    if (give){
        consoleInput1 = consoleInput1.slice(5,400);
        consoleInput1 = consoleInput1.trim();
        console.log(consoleInput1)
        consoleInput1 = Number(consoleInput1);
        logCount = logCount + consoleInput1;
    }
    else if(remove){
        consoleInput1 = consoleInput1.slice(7,400);
        consoleInput1 = consoleInput1.trim();
        console.log(consoleInput1)
        consoleInput1 = Number(consoleInput1);
        logCount = logCount - consoleInput1;
    }
    else if(lumberjack){
        consoleInput1 = consoleInput1.slice(11,400);
        consoleInput1 = consoleInput1.trim();
        console.log(consoleInput1)
        consoleInput1 = Number(consoleInput1);
        LJ = LJ + consoleInput1;
    }
    else if(logger){
        consoleInput1 = consoleInput1.slice(7,400);
        consoleInput1 = consoleInput1.trim();
        console.log(consoleInput1)
        consoleInput1 = Number(consoleInput1);
        Loggers = Loggers + consoleInput1;
    }
    else if(chainsaw){
        consoleInput1 = consoleInput1.slice(9,400);
        consoleInput1 = consoleInput1.trim();
        console.log(consoleInput1)
        consoleInput1 = Number(consoleInput1);
        Chainsaws = Chainsaws + consoleInput1;
    }
    else if(woodchuck){
        consoleInput1 = consoleInput1.slice(10,400);
        consoleInput1 = consoleInput1.trim();
        console.log(consoleInput1)
        consoleInput1 = Number(consoleInput1);
        woodchucks = woodchucks + consoleInput1;
    }
    updateGame()
}

updateGame();

// game loop (every second)

function gameLoop(){
    logCount = logCount + Math.round((DogPetMultiplier) * ((Loggers*LoggerProduce) + (Chainsaws*ChainsawProduce) + (woodchucks*woodchuckProduce)));
}

function updateGame(){
    if (DogPetOwned){
        DogPetMultiplier = 1.1;
        document.getElementById("DogPetContainer").style.display = "none";
    }

    logCountLabel.textContent = logCount;

    LoggerCountLabel.textContent = Loggers;
    Loggerprice.textContent = LoggerCost;
    LoggerProduce = baseLoggerProduce * (Upgrade2Amount + 1);

    LJCountLabel.textContent = LJ;
    LJprice.textContent = LJCost;
    LJProduce = baseLJProduce * (Upgrade1Amount + 1);

    ChainsawCountLabel.textContent = Chainsaws;
    Chainsawprice.textContent = ChainsawCost;
    ChainsawProduce = baseChainsawProduce * (Upgrade3Amount + 1);

    woodchuckCountLabel.textContent = woodchucks;
    Woodchuckprice.textContent = woodchuckCost;
    woodchuckProduce = baseWoodchuckProduce * (Upgrade4Amount + 1);

    logsFromClick = baseLogsFromClick * (Upgrade0Amount + 1);
    Upgrade0Cost = Math.round(Upgrade0BaseCost * Math.pow(2,Upgrade0Amount));
    Upgrade1Cost = Math.round(Upgrade1BaseCost * Math.pow(2,Upgrade1Amount));
    Upgrade2Cost = Math.round(Upgrade2BaseCost * Math.pow(2,Upgrade2Amount));
    Upgrade3Cost = Math.round(Upgrade3BaseCost * Math.pow(2,Upgrade3Amount));
    Upgrade4Cost = Math.round(Upgrade4BaseCost * Math.pow(2,Upgrade4Amount));

    LJCost = Math.round(LJBaseCost * Math.pow(1.15,LJ));
    LoggerCost = Math.round(LoggerBaseCost * Math.pow(1.15,Loggers));
    ChainsawCost = Math.round(ChainsawBaseCost * Math.pow(1.15,Chainsaws));
    woodchuckCost = Math.round(woodchuckBaseCost * Math.pow(1.15,woodchucks));

    LJprice.textContent = LJCost;
    Loggerprice.textContent = LoggerCost;
    Chainsawprice.textContent = ChainsawCost;
    Woodchuckprice.textContent = woodchuckCost;

    document.getElementById("Upgrade0Button").textContent = Upgrade0Cost;
    document.getElementById("Upgrade1Button").textContent = Upgrade1Cost;
    document.getElementById("Upgrade2Button").textContent = Upgrade2Cost;
    document.getElementById("Upgrade3Button").textContent = Upgrade3Cost;
    document.getElementById("Upgrade4Button").textContent = Upgrade4Cost;

    CoinsAmountLabel.textContent = coins;
    CoinsBuyBtn.textContent = logsToCoins + " logs";
    updateLogsPerSecond()
}

function tenSecondLoop(){
    logCount = logCount + (LJ*LJProduce)
    if (increaseNT){
        logsToCoins = logsToCoins + Math.floor((Math.random() * 60))
    }
    else{
        logsToCoins = logsToCoins + Math.floor((Math.random() * 40) - 20)
    }
    if (logsToCoins < 10){
        logsToCoins = 10;
        increaseNT = true
    }
    else if (logsToCoins < 40){
        increaseNT = true
    }
    updateSave()
}
function updateLogsPerSecond(){    
    logsPerSecond = Math.round((DogPetMultiplier) * 10 * ((LJ * LJProduce * 0.1) + (Loggers * LoggerProduce) + (Chainsaws * ChainsawProduce) + (woodchucks * woodchuckProduce))) / 10;
    logsPerSecond = (Math.round(logsPerSecond * 10)) / 10
    logsPerSecondLabel.textContent = logsPerSecond;
}

let saveExportData;

// username, logs, LJ, Loggers, Upgrade 1 amount, Upgrade 2 amount, blank, blank, LJ produce, Loggers produce, blank, blank, Chainsaws, chainsaw produce, blank, upgrade 3 amount, woodchucks, woodchuck produce, blank, upgrade 4 amount, coins, coins cost, dog pet owned

function updateSave(){
    saveExportData = `${username},${logCount},${LJ},${Loggers},${Upgrade1Amount},${Upgrade2Amount},00,00,${LJProduce},${LoggerProduce},00,00,${Chainsaws},${ChainsawProduce},00,${Upgrade3Amount},${woodchucks},${woodchuckProduce},00,${Upgrade4Amount},${coins},${logsToCoins},${DogPetOwned}`;
    document.getElementById("saveExportParagraph").textContent = saveExportData;
}


logBtn.onclick = function(){
    logCount = logCount + (logsFromClick);
    hitLog.currentTime=0;
    hitLog.play();
    logCountLabel.textContent = logCount;
}

CoinsBuyBtn.onclick = function(){
    if (logCount >= logsToCoins){
        logCount = logCount - logsToCoins
        coins++
        buyItem.currentTime=0;
        updateGame()
        buyItem.play();
    }
    else{
        clickFail.currentTime=0;
        clickFail.play();
    }
}

buyLJBtn.onclick = function(){
    if (logCount >= LJCost){
        logCount = logCount - LJCost
        LJ++
        buyItem.currentTime=0;
        updateGame()
        buyItem.play();
    }
    else{
        clickFail.currentTime=0;
        clickFail.play();
    }
}
buyLoggerBtn.onclick = function(){
    if (logCount >= LoggerCost){
        logCount = logCount - LoggerCost
        Loggers++
        buyItem.currentTime=0;
        buyItem.play();
        updateGame()
    }
    else{
        clickFail.currentTime=0;
        clickFail.play();
    }
}

buyChainsawBtn.onclick = function(){
    if (logCount >= ChainsawCost){
        logCount = logCount - ChainsawCost
        Chainsaws++
        buyItem.currentTime=0;
        buyItem.play();
        updateGame();
    }
    else{
        clickFail.currentTime=0;
        clickFail.play();
    }
}

buywoodchuckBtn.onclick = function(){
    if (logCount >= woodchuckCost){
        logCount = logCount - woodchuckCost
        woodchucks++
        buyItem.currentTime=0;
        buyItem.play();
        updateGame();
    }
    else{
        clickFail.currentTime=0;
        clickFail.play();
    }
}

Upgrade0Button.onclick = function(){
    if (logCount >= Upgrade0Cost){
        logCount = logCount - Upgrade0Cost
        Upgrade0Amount++;
        buyItem.currentTime=0;
        buyItem.play();
        updateGame();
    }
    else{
        clickFail.play();
    }
}

Upgrade1Button.onclick = function(){
    if (logCount >= Upgrade1Cost){
        logCount = logCount - Upgrade1Cost;
        LJProduce = Math.round(LJProduce * 1.6);
        Upgrade1Amount++
        buyItem.currentTime=0;
        buyItem.play();
        updateGame();
    }
    else{
        clickFail.play();
    }
}

Upgrade2Button.onclick = function(){
    if (logCount >= Upgrade2Cost){
        logCount = logCount - Upgrade2Cost;
        Upgrade2Amount++;
        buyItem.currentTime=0;
        buyItem.play();
        updateGame();
    }
    else{
        clickFail.play();
    }
}

Upgrade3Button.onclick = function(){
    if (logCount >= Upgrade3Cost){
        logCount = logCount - Upgrade3Cost;
        Upgrade3Amount++;
        buyItem.currentTime=0;
        buyItem.play();
        updateGame();
    }
    else{
        clickFail.play();
    }
}

Upgrade4Button.onclick = function(){
    if (logCount >= Upgrade4Cost){
        logCount = logCount - Upgrade4Cost;
        Upgrade4Amount++;
        buyItem.currentTime=0;
        buyItem.play();
        updateGame();
    }
    else{
        clickFail.play();
    }
}

// pets

DogPetButton.onclick = function(){
    if (coins >= DogPetCost){
        coins = coins - DogPetCost;
        DogPetOwned = true;
        buyItem.currentTime=0;
        buyItem.play();
        updateGame();
    }
    else{
        clickFail.play();
    }
}

setInterval(updateGame, 1000);
setInterval(gameLoop, 1000);
setInterval(tenSecondLoop, 10000);
