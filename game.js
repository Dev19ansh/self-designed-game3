class Game{
    constructor(){
        this.storyButton = createSprite(displayWidth/2,50,20,10);
        this.startButton = createSprite(displayWidth/2,displayHeight/2,20,10); 
    }
start(){
    
    
    if(mousePressedOver(this.startButton)){
        gameState=1;
        this.coins();
    }
    if(mousePressedOver(this.storyButton)){
        text("gamestory",displayWidth/2,displayHeight/2);
    }
    
    
       
    

}
play(){
    this.storyButton.visible=false;
    this.startButton.visible=false;
    king.player.visible=true;
    
    if(keyDown("left")){
        king.moveLeft();
    }
    if(keyDown("right")){
        king.moveRight();
    }
    if(keyDown("space")){
        king.Jump();
    }
    king.gravity();
    king.player.collide(ground);
    camera.position.x=king.player.x;

    if(king.player.isTouching(coinsGrp,removeCoin)){
        score+=20;
        
    }
    
}



coins(){
    for(var a=1;a<=7;a++){
        var coins = createSprite(random(displayWidth),ground.y-random(50,displayHeight-200),15,15);
        coinsGrp.add(coins);
    }
}

weapon(){
    var weapons = createSprite(random(displayWidth,ground.y-100,50,50));
    
}

}