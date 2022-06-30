var shirtChange;


document.addEventListener('deviceready', function() {
    
    // const body = document.getElementById("body");
    // const pants = document.getElementById("pants");
    // const shoes = document.getElementById("shoes");
    // const head = document.getElementById("head");

    
var body_choice = 1;
var shirt_choice = 1;
var pants_choice = 1;
var shoes_choice = 1;
var head_choice = 1;




shirtChange = function(OPERATION){
    console.log(OPERATION);
    
    if(OPERATION=="+")
    {   if(shirt_choice<3)
        shirt_choice+=1;
    }else{
        shirt_choice-=1;
    }
    
    if(shirt_choice<=0)
    {
        shirt_choice=3;
    }

   
    
    document.getElementById("shirt").style.backgroundImage="url('./assets/character/faj_camisa"+shirt_choice+".png')";
}
    
    


    
});