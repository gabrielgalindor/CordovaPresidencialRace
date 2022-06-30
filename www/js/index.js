


document.addEventListener('deviceready', function() {
    const fwidth = 1280;
    const fheight = 720;
    const centerw = fwidth/2;
    const centerh = fheight/2;
    const centerhroad = centerh - 100;

    const api_url = "http://157.245.142.69:8000/api"

    const  get_msbot_api = async (BODY, KEY)=>{
    

        var response_data = await fetch(api_url+'/get_image',
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-type':'application/json'
                        },
                        CORS: 'no-cors',
                        body: JSON.stringify(BODY)
                    }
                ).then((response)=>{
                    return response.json();
                }).then((data)=>{
                    console.log(data[KEY]);
                    response_data = data[KEY];
                    return response_data
                });
        console.log('response into function'+response_data)    
        return response_data;
    
    }

class escena_personaje extends Phaser.Scene{
    constructor(){
        super({key:"escena_personaje", active:true});
        
    }

    preload () {
        this.load.image('background', './assets/intro/background.jpg');
        this.new_load = false;
        
    }

    create () {
        // window.addEventListener('resize', resize);
        // resize();
        this.background = this.add.tileSprite(centerw,centerh,game.config.width,game.config.height,'background');
        

        this.promise_camisa = get_msbot_api(
            {
                "collection": "faj",
                "part": "camisa",
                "variation": 1
            },
            'img_url'
        );

        this.promise_camisa.then(
            (data)=>{
             this.final_camisa = data;
             
             this.new_load = true;
            }
         );


    }

    update () {
        this.background.tilePositionY += 0.5;

       
        


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


    // var game = new Phaser.Game(config);

   
    


    const gameDiv = document.getElementById("gameDiv").children[0];
    real_width = window.screen.width;

    
    gameDiv.style.width=real_width+"px";

    
});