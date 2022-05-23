document.addEventListener('deviceready', function() {

    var intervalID = window.setInterval(miFuncion, 8000);

    function miFuncion() {
        document.getElementById("videocont").style.display="none";
    }



    class escena_personaje extends Phaser.Scene{
        constructor(){
            super({key:"escena_personaje", active:true});
            this.temporalScenePoint= "Lobby";
        }
        preload()
        {
            this.new_load = false
    
        }
        create()
        {
            //Me quede acá
            //Recordar referenciar con el promise de la camisa
            //Va orden body, head, camisa, pantalon, zapatos, accesorio
            this.promise_body = get_msbot_api(
                {
                    "collection": "faj",
                    "part": "camisa",
                    "variation": 1
                },
                'img_url'
            )
    
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
            )
            
            
            
        }
    
        update(time,delta)
        {
            if(this.new_load)
            {
                this.reload_images();
                this.new_load= false;
            }
        }
    
        reload_images()
        {
            this.scene.start('draw_character', {img_camisa: this.final_camisa});
               
        }
    
    }
    
    //add new code here 

    
        const api_url = "http://0.0.0.0:8000/api"

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
    
    class imageconst {
        constructor(width,height){
            this.width = width;
            this.height = height;
            this.centerw = width/2;
            this.centerh = height/2;
        }
    
    }

    class escena_personaje extends Phaser.Scene{
        constructor(){
            super({key:"escena_personaje", active:true});
            this.temporalScenePoint= "Lobby";
        }
        preload()
        {
            this.new_load = false
    
        }
        create()
        {
            //Me quede acá
            //Recordar referenciar con el promise de la camisa
            //Va orden body, head, camisa, pantalon, zapatos, accesorio
            this.promise_body = get_msbot_api(
                {
                    "collection": "faj",
                    "part": "camisa",
                    "variation": 1
                },
                'img_url'
            )
    
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
            )
            
            
            
        }
    
        update(time,delta)
        {
            if(this.new_load)
            {
                this.reload_images();
                this.new_load= false;
            }
        }
    
        reload_images()
        {
            this.scene.start('draw_character', {img_camisa: this.final_camisa});
               
        }
    
    }
    
    class draw_personaje extends Phaser.Scene{
    
        constructor(){
            super({key:"draw_character", active:false});
            this.temporalScenePoint= "Lobby";
        }
    
        init(data)
        {
            this.camisa_url = data.img_camisa;
        }
    
        preload()
        {
            console.log('camisa url = '+this.camisa_url);
            this.load.image('camisa', this.camisa_url);
            
    
        }
    
        create()
        {
            //Estas constantes son para la escala 0.25
            const width_imgs = 800
            const height_imgs = 900
            
            
            console.log('create draw');
            this.camisa = this.add.sprite(fwidth-(width_imgs/2),200,'camisa');
            this.camisa.setScale(0.25,0.25);
        }
    
    }

    const fwidth = 1280;
    const fheight = 720;
    const centerw = fwidth/2;
    const centerh = fheight/2;
    const centerhroad = centerh - 100;

    
    var config = {
        type: Phaser.AUTO,
        width: fwidth,
        height: fheight,
        parent: 'gameDiv',
        physics: {
            default: 'arcade',
            arcade: { debug: false }
        },
        scene:[escena_personaje, draw_personaje]
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

    function preload () {
        this.load.image('background', './assets/intro/background.jpg');
        this.load.image('decorador-1', './assets/intro/decorador1.png');
        this.load.image('logo', './assets/intro/logo1.png');
    }

    function create () {
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

    function update () {
        this.background.tilePositionY += 0.5;

        //Animación del logo inicio
        if(this.logoAlpha<1)
        {
            this.logoAlpha+=0.005;
            this.logo.setAlpha(this.logoAlpha);
        }



    }

    const gameDiv = document.getElementById("gameDiv").children[0];
    real_width = window.screen.width;

    
    gameDiv.style.width=real_width+"px";

    
});