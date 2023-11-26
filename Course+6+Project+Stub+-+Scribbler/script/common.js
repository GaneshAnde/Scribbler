var modal =document.getElementById('modal')



function onClickSignUp(){
    console.log("Clicked reached in js");
    //document.body.style.backgroundColor = 'lightgrey';
    document.getElementById('keyWsSignIn').style.display = 'none';
    document.getElementById("postsVisiblity").style.display = 'none'
    document.getElementById('keyWs').style.display = 'flex';
  //  document.getElementsByClassName('modal1').style.display = 'flex'
   
}

function openSignUpPopUp(){
  console.log("Clicked reached in js");
  //document.body.style.backgroundColor = 'lightgrey';
  document.getElementById('keyWs').style.display = 'flex';
  document.getElementById('keyWsSignIn').style.display = 'none';
  document.getElementById("postsVisiblity").style.display = 'none'
//  document.getElementsByClassName('modal1').style.display = 'flex'
}

function onClickSignIn(){
  document.getElementById("postsVisiblity").style.display = 'none'
  console.log("Clicked reached in js");
  //document.body.style.backgroundColor = 'lightgrey';
  document.getElementById('keyWs').style.display = 'none';
  document.getElementById('keyWsSignIn').style.display = 'flex';

  document.getElementById('keyWsSignIn').style.zIndex = 1;

  
//  document.getElementsByClassName('modal1').style.display = 'flex'
}


function closeSignInPopUp(){
  document.getElementById('keyWsSignIn').style.display = 'none';
  document.getElementById("postsVisiblity").style.display = 'block'
}


function closePopUp(){
  document.getElementById("postsVisiblity").style.display = 'block'
  document.getElementById('keyWs').style.display = 'none';
}

function moveToCreatePost() {
  window.location.href = '../Course+6+Project+Stub+-+Scribbler/html/bloglist.html';
}

function openAllPosts(){
  window.location.href = '../Course+6+Project+Stub+-+Scribbler/html/postslist.html';

}

function moveToHome(){
  window.location.href = '../index.html';
 
}