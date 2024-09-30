console.log('hello');
var price_range_value=10;
var x = "800000";
//  document.getElementById("Prange").setValue = x;

// let defaultVal = x.defaultValue;
price_range_value = x;
console.log('price', price_range_value);


function openLoginModal(){
     console.log('in modal func');
     const loginModal = document.createElement('div');
     loginModal.innerHTML =`<div class=" modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class=" modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content login-modal">
      <div class=" text-center ">
        <h4 class="modal-title text-center" id="exampleModalLongTitle">Welcome to PlotsAdda</h4>
          <div class="menu">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active text-dark" href="#">Sign in</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">New account</a>
            </li>
          </ul>
          <hr>
        </div>
      </div>
      <div class="modal-body p-4">
        <form action="">
          <div class="py-2">
            <div class="label">
              <label for=""><b> Email </b> </label>
            </div>
            <input type="email" class="w-100 p-1" placeholder="Enter Email">
          </div>
          <div class="py-2">
            <div class="label">
              <label for=""><b> Password </b></label>
            </div>
            <input type="password" class="w-100 p-1" placeholder="Enter Password" >
          </div>
          <div class="submit text-center">
            <button class="btn btn-success w-100 my-2">Sign in</button>
            <a class="text-primary" href=""> <h6 class="forget" > <b>Forget your Password?</b></h6>  </a>
          </div>
        </form>
      </div>
      <hr>
      <div class="social_link text-center p-4">
        <h6 class="d-block">Or Connect With:</h6>
        <button class="btn btn-outline-primary w-100 my-2">Continue with Google</button>
        <button class="btn btn-outline-primary w-100 my-2">Continue with Facebook</button>
        <button class="btn btn-outline-primary w-100 my-2">Continue with Apple</button>
      </div>
    </div>
  </div>
</div>`;
document.body.appendChild(loginModal);
}

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
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

