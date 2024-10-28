// var login = true;
// if(login == true){
//      document.getElementById('login_box').style.display="none";
// }else if(login == false){
//      document.getElementById('profile_box').style.display="none";
// }
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
var agentCheck=false;
function show_agent_option(){
     agentCheck = !agentCheck
     if(agentCheck==true){
          document.getElementById('agent_opt').style.display='block';
     }else{
          document.getElementById('agent_opt').style.display='none';
     }
}
function personType(){
     document.getElementById('p-type').style.display='block';
}
function home_opt(){
     document.getElementById('home_opt').style.display='block';
}
function checkModel(data){
     var check = data
     if(check == 'login'){
          document.getElementById('loginForm').style.display='block';
          document.getElementById('registerForm').style.display='none';
          document.getElementById('login-link').style.background='#57b76f';
          document.getElementById('register-link').style.background='#fafafa';
          
     }else if(check == 'register'){
          document.getElementById('loginForm').style.display='none';
          document.getElementById('registerForm').style.display='block';
          document.getElementById('login-link').style.background='#fafafa';
          document.getElementById('register-link').style.background='#57b76f';
     }else if(check == 'agent'){
          document.getElementById('loginForm').style.display='none';
          document.getElementById('agent_form').style.display='block';
          document.getElementById('login-link').style.background='#fafafa';
          document.getElementById('agent-register-link').style.background='#57b76f';
     }else if(check == 'agent-login'){
          document.getElementById('loginForm').style.display='block';
          document.getElementById('agent_form').style.display='none';
          document.getElementById('login-link').style.background='#57b76f';
          document.getElementById('agent-register-link').style.background='#fafafa';
     }

}
function sign_out(){
     document.getElementById('profile_box').style.display="none";
     document.getElementById('profile_box1').style.display="none";
     document.getElementById('login_box').style.display="block";
     document.getElementById('login_box1').style.display="block";
}





