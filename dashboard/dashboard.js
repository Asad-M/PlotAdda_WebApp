var isadmin = true;
// userCheck();


// function userCheck(){
//     if(isadmin == true){
//         document.getElementsByClassName('blog-posting').style.display='none';
//         console.log('login check')
//     }
// }
function addVideo(){
    document.getElementById('add_video').style.display='block';
    // document.getElementById('add-video-btn').style.display='none'
}
var install_check_var = false;
function install_check(){
    install_check_var = !install_check_var;
    if(install_check_var==true){
       return document.getElementById("installment_box").style.display="block";
    }else if(install_check_var == false){
       return  document.getElementById("installment_box").style.display="none";
    }

}
