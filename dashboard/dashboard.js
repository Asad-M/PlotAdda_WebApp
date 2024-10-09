var isadmin = true;
userCheck();


function userCheck(){
    if(isadmin == true){
        document.getElementsByClassName('blog-posting').style.display='none';
        console.log('login check')
    }
}
function addVideo()
{
    console.log("1st")
    var element = document.createElement("div");
    console.log("2st")
    // element.appendChild(document.createTextNode('<div class="d-flex"><img class="youtube-icon m-2" src="../assets/youtube-logo-removebg-preview.png" alt=""><input type="text" class="p-2 w-100" placeholder="Add your video link here"></div>'));
    console.log("3st",document.getElementbyId('add_video').appendChild(element))
    debugger
    document.getElementbyId('add_video').appendChild(element);
    console.log("4st")

    
    //document.body.appendChild(element);
}
