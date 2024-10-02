var isadmin = true;
userCheck();


function userCheck(){
    if(isadmin == true){
        document.getElementsByClassName('blog-posting').style.display='none';
        console.log('login check')
    }
}
