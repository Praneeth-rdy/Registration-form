
//Initializing
var wmbgcolor = 'rgba(0,0,0,0.1)';
var dmbgcolor = 'rgba(0,0,0,0.9)';
var txtbxbgcolor = 'rgba(243, 231, 212,1)';
var modebtn = document.getElementById('mode');
var submitbtn = document.getElementById('submit');
var body = document.getElementsByTagName('body')[0];
var s2 = document.getElementById('onhover');
var txt = document.getElementsByClassName('txt');


function changemode(){
    var tochange = document.getElementById('mode').innerHTML;

    if(tochange == 'Dark mode'){
        
        todarkmode();
    }
    else{
        
        towhitemode();
    }
}


function todarkmode(){

    body.style.backgroundColor = dmbgcolor;
    modebtn.innerHTML = 'Light mode';
    modebtn.style.backgroundColor = 'white';
    modebtn.style.color = dmbgcolor;
    submitbtn.style.backgroundColor = 'rgba(175,238,238,0.6)';
    txt[0].style.color = 'white';
    txt[1].style.color = 'white';
    //hover properties
    s2.innerHTML = '#submit:hover{box-shadow: 0 0 8px 1px rgba(175,238,238,1);}#mode:hover{box-shadow: 0 0 8px 1px rgb(255, 255, 255);}';

}

function towhitemode(){

    body.style.backgroundColor= wmbgcolor;
    modebtn.innerHTML= 'Dark mode';
    modebtn.style.backgroundColor = dmbgcolor;
    modebtn.style.color = 'white';
    submitbtn.style.backgroundColor = 'rgba(235, 202, 131,0.5)';
    txt[0].style.color = 'black';
    txt[1].style.color = 'black';
    //hover properties
    s2.innerHTML = '#submit:hover{box-shadow: 0 0 8px 1px #fa7f1b;}#mode:hover{box-shadow: 0 0 8px 1px rgb(0, 0, 0);}';

}

//Main starts here

towhitemode();
submitbtn.style.color = dmbgcolor;

