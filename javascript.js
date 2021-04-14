function myFunction() {                  
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } 
}

/*jquery allows folders to be opened when clicked on*/
$(document).ready(function(){
        $("#trailtitle1").click(function(){
            $("#trailtext1").fadeToggle();
        });
    });
    $(document).ready(function(){
        $("#trailtitle2").click(function(){
            $("#trailtext2").fadeToggle();
        });
    });
