$(document).ready(function () {
  //Portfolio label on hover effect
  $('#portfolio span').addClass("hide");
  $('#portfolio .doings').hover(function () {
    /*fade in code*/
    $(this).find('span').removeClass('hide');
    $(this).find('.doings').addClass('imageEffect');
  }, function () {
    /*fade out code*/
    $(this).find('span').addClass('hide');
    $(this).find('.doings').removeClass('imageEffect');
  });
  // What we do toggle styling

  $(".first").click(function () {
    $("#design-icon").toggle(100);
    $("#design").toggle(100);
  });
  $(".second").click(function () {
    $("#dev-icon").toggle(100);
    $("#developement").toggle(100);
  });
  $(".third").click(function () {
    $("#product-icon").toggle(100);
    $("#product-management").toggle(100);
  });
  //Submission Form
  $(document).ready(function () {
    $("#submit").click(function (event) {
      console.log("working")
      event.preventDefault();
      var name = document.getElementById("name").value;
      var email = document.getElementById("inputEmail").value;
      var message = document.getElementById("message").value;
      // form validation
      if (name == "") {
        alert("please enter your name");
        return false;
      } else if (email == "") {
        alert("please enter your email")
        return false;
      } else if (message == "") {
        alert("please tell us something")
        return false;
      } else {
        alert(name + " your message is received. Thank you");
      }
      document.getElementById("contactform").reset();
    });
  });

});

