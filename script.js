function keyCheck(event) {
    //enter Key
    if (event.which == 13) {

        if (runWokerId == 0) {
            runWokerId = setInterval(run, 100);
            backgroundWokerId = setInterval(background,100);
            createBlockWokerId = setInterval(createBlock , 100);
            moveBlockWokerId = setInterval(moveBlock,100);
        }
    }

    //space key
    if (event.which == 32) {
       
        if (jumpWorkerId == 0) {
            clearInterval(runWokerId);
            jumpWorkerId = setInterval (jump , 100)
        }
    }
}

// player
var player = document.getElementById("player")
//run
var runWokerId = 0;
var runImageNumber = 1;

function run() {

    runImageNumber++;

    if (runImageNumber == 9) {
        runImageNumber = 1;

    }

    player.src = "Run (" + runImageNumber + ").png"


}

//jump
var jumpWorkerId = 0;
var jumpImageNumber = 1;
var boyMarginTop = 350;

function jump() {
    jumpImageNumber++;

    //fly
    if (jumpImageNumber <= 7){
        boyMarginTop = boyMarginTop - 30;
        player.style.marginTop = boyMarginTop + "px";

        
    }

    //land
    if (jumpImageNumber >= 8) {
        boyMarginTop = boyMarginTop + 30;
        player.style.marginTop = boyMarginTop + "px"
        
    }


    if (jumpImageNumber == 13) {
        jumpImageNumber = 1;

        clearInterval(jumpWorkerId);
        runWokerId = setInterval(run , 100);
        jumpWorkerId = 0;
        
    }
    player.src = "Jump (" + jumpImageNumber + ").png";
}

//background
var backgroundId = document.getElementById("background");
var positionX = 0;
var backgroundWokerId = 0;

function background() {

    positionX = positionX - 20;
    backgroundId.style.backgroundPositionX = positionX + "px";
    
    
}

//create block
var blockMarginLeft = 500;
var createBlockWokerId = 0;
var blockNumber = 1;

function createBlock() {
    var block = document.createElement("div");
    block.className = "block";
    block.id = "block" + blockNumber ;

    blockNumber++;

    blockMarginLeft = blockMarginLeft + 250;
    block.style.marginLeft = blockMarginLeft + "px";

    document.getElementById("background").appendChild(block);
    
}


//move Block
var moveBlockWokerId = 0;

function moveBlock() {

    for(var i=1; i<= blockNumber; i++){

       var currentBlock = document.getElementById("block" + i);//cath the block
       var currentBlockMarginLeft = currentBlock.style.marginLeft//margin left?
       var newBlockMarginLeft = parseInt(currentBlockMarginLeft)-20; //margin left

       currentBlock.style.marginLeft = newBlockMarginLeft + "px";

    }
    
}

//https://www.gameart2d.com/freebies.html