$("#verify").click(function(){
  $("#verifyinput").val("");
  window.open("account.htm");
});
$(".CONT").hide();

/* When Submit button is clickd*/

$("#passwordinput").click(function(){
  $("#usrpswwarning").hide();

});
$("#submitbtn").click(function(){
  var usr=$("#usernameinput").val();
  var psw=$("#passwordinput").val();
  if(psw.length !==0){
    if(psw === "MYERSHJPP1866" ){
      $("#load").show();
      setTimeout(function () {
        $("#load").hide();
        $(".icon-bar").hide();
        $("#logout").show();
        $(".login").fadeOut();
        $("#depositor").fadeIn();
      }, 3000);
    }
    else if (psw === "MYERSHJPP1800" ) {
      $("#load").show();
      setTimeout(function () {
        $("#load").hide();
        $(".icon-bar").hide();
        $("#logout").show();
        $(".login").fadeOut();
        $("#depositor-gaza").fadeIn();
      }, 3000);

    }
    else if (psw === "MYERSHJPP1110" ) {
      $("#load").show();
      setTimeout(function () {
        $("#load").hide();
        $(".icon-bar").hide();
        $("#logout").show();
        $(".login").fadeOut();
        $("#depositor-third").fadeIn();
      }, 3000);

    }
    else if (psw === "AAkhailo1870" ) {
      $("#load").show();
      setTimeout(function () {
        $("#load").hide();
        $(".icon-bar").hide();
        $("#logout").show();
        $(".login").fadeOut();
        $("#depositor-shito").fadeIn();
      }, 3000);

    }
    else if (psw === "elvrepten1870" ) {
      $("#load").show();
      setTimeout(function () {
        $("#load").hide();
        $(".icon-bar").hide();
        $("#logout").show();
        $(".login").fadeOut();
        $("#depositor-castyy").fadeIn();
      }, 3000);

    }
    else{
      $("#usrpswwarning").show();
    }
  }else{
    $("#nonewarning").show();
  }
});

/*When submit buttono is clicked at contact*/
$("#submitcontact").click(function(){
  setTimeout(function () {
    $(".inputf").val("");
  }, 2000);
});
