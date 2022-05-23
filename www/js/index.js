


document.addEventListener('deviceready', function() {
    const fwidth = 1280;
    const fheight = 720;
    const centerw = fwidth/2;
    const centerh = fheight/2;
    const centerhroad = centerh - 100;

class escena_personaje extends Phaser.Scene{
    constructor(){
        super({key:"escena_personaje", active:true});
        
    }

    preload () {
        this.load.image('background', './assets/intro/background.jpg');
        this.load.image('decorador-1', './assets/intro/decorador1.png');
        this.load.image('logo', './assets/intro/logo1.png');
    }

    create () {
        // window.addEventListener('resize', resize);
        // resize();
        this.background = this.add.tileSprite(centerw,centerh,game.config.width,game.config.height,'background');
        this.decorador1 = this.add.tileSprite(1000,600,194,194,'decorador-1');
        this.logo = this.add.tileSprite(0,0,640,200,'logo');

        this.logoAlpha = 0.25;
        this.logo.setAlpha(this.logoAlpha);

        Phaser.Display.Align.In.Center(this.logo, this.add.zone(game.config.width/2, game.config.height/2,game.config.width,game.config.height));

        this.info = this.add.text(10, 10, 'Haga clic para continuar', { font: '18px Karmatic Arcade', fill: '#074aaa' });

        this.info.setText('width: '+ window.screen.width );
    }

    update () {
        this.background.tilePositionY += 0.5;

        //Animación del logo inicio
        if(this.logoAlpha<1)
        {
            this.logoAlpha+=0.005;
            this.logo.setAlpha(this.logoAlpha);
        }

        //Set 

    }



}


    var config = {
        type: Phaser.AUTO,
        width: fwidth,
        height: fheight,
        parent: 'gameDiv',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        input :{
            activePointers:2,
        },
        scene: [escena_personaje]
    };

    // var player;
    // var stars;
    // var bombs;
    // var platforms;
    // var cursors;
    // var score = 0;
    // var gameOver = false;
    // var scoreText;
    // var isMobile = false;
    // var up;
    // var leftbtn;
    // var rightbtn;


    var game = new Phaser.Game(config);

   
    


    const gameDiv = document.getElementById("gameDiv").children[0];
    real_width = window.screen.width;

    
    gameDiv.style.width=real_width+"px";

    
});