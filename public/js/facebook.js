function checkLoginState(){
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  if (response.status ==='connected') {
    console.log('Successfully logged in with Facebook');
    FB.api('/me?fields=name, first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response){
$('p.facebookLogin').hide();

// $("#name").text($("h1").text());
$("name").text($("h1").text(response.name));

//$(img."#photo").attr("scr",response.picture.data.url);
$(img.photo).attr("scr",response.picture.data.url);
}
