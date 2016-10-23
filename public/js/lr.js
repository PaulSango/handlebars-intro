/* Sign-In Function */
var counter;
$(document).ready(function(){
      $("#btn1").click(function(e){
        e.preventDefault();
        $.ajax({
          url: 'acc.json',
          dataType: 'json',
          type: 'get',
          cache: false,

          success: function(data){
              $(data).each(function(index, value){ 

                  var a = document.getElementById('toemail').value;
                  var b = document.getElementById('topass').value;
                  counter = data.length-1;

                  if(a == value.email && b == value.pass){
                    document.location = "http://localhost:8080/dash";
                    alert("Success");
                    return false;
                  }
                  else{
                    counter--;
                  }
              });
                if(counter == 0){
                    $("#warninglog").html("Missing Credentials, Email or Password Error.").fadeIn().delay(2000).fadeOut(2000);
                }
          }
        });
    });
});




$(document).ready(function(){
  $("#signout").click(function(e){
          document.location = "http://localhost:8080/"
      });
});




var modal = document.getElementById('forlog');
var modal2 = document.getElementById('forreg');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal ) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

