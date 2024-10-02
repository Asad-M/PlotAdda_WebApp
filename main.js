function open_menu(){
     document.getElementById('menu-box').style.display='block';
     document.getElementById('header1').style.display='none';
}
function close_menu(){
     document.getElementById('menu-box').style.display='none';
     document.getElementById('header1').style.display='flex';
}
var landloadCheck=false;
function show_signup_option(){
     landloadCheck = !landloadCheck
     if(landloadCheck==true){
          document.getElementById('landload_opt').style.display='block';
     }else{
          document.getElementById('landload_opt').style.display='none';
     }
}
function personType(){
     document.getElementById('p-type').style.display='block';
}
function home_opt(){
     document.getElementById('home_opt').style.display='block';
}




