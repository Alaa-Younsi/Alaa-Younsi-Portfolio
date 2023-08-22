
$(document).ready(function(){
    $("#Alaayounsi").fadeOut(2000);
});

$(document).ready(function(){
    $("#Portfolio").fadeOut(2350);
});

setTimeout(() => {
    document.getElementById("Front-page").style.display = "none";
  }, "2500");



function HomeButton() {
    document.getElementById("Home-button").innerHTML = "&#x25cf;";
    document.getElementById("Projects-button").innerHTML = "Projects";
    document.getElementById("Info-button").innerHTML = "Info";
    document.getElementById("Contact-button").innerHTML = "Contact";
} 

const ProjectsButton = () => {
    document.getElementById("Home-button").innerHTML = "Home";
    document.getElementById("Projects-button").innerHTML = "&#x25cf;";
    document.getElementById("Info-button").innerHTML = "Info";
    document.getElementById("Contact-button").innerHTML = "Contact";
}

const InfoButton = () => {
    document.getElementById("Home-button").innerHTML = "Home";
    document.getElementById("Projects-button").innerHTML = "Projects";
    document.getElementById("Info-button").innerHTML = "&#x25cf;";
    document.getElementById("Contact-button").innerHTML = "Contact";
}

const ContactButton = () => {
    document.getElementById("Home-button").innerHTML = "Home";
    document.getElementById("Projects-button").innerHTML = "Projects";
    document.getElementById("Info-button").innerHTML = "Info";
    document.getElementById("Contact-button").innerHTML = "&#x25cf;";
}


$(document).ready(function(){

    $("#Home-button").click(function(){
        $("#Home").fadeIn(250);
      });
  });

$(document).ready(function(){

    $("#Projects-button").click(function(){
        $("#Home").fadeOut(250);
      });
  });

  $(document).ready(function(){

    $("#Info-button").click(function(){
        $("#Home").fadeOut(250);
      });
  });

  $(document).ready(function(){

    $("#Contact-button").click(function(){
        $("#Home").fadeOut(250);
      });
  });



  $(document).ready(function(){

    $("#Projects-button").click(function(){
        $("#Projects").fadeIn(250);
      });
  });

  $(document).ready(function(){

    $("#Home-button").click(function(){
        $("#Projects").fadeOut(250);
      });
  });

  $(document).ready(function(){

    $("#Info-button").click(function(){
        $("#Projects").fadeOut(250);
      });
  });

  $(document).ready(function(){

    $("#Contact-button").click(function(){
        $("#Projects").fadeOut(250);
      });
  });



  $(document).ready(function(){

    $("#Info-button").click(function(){
        $("#Info").fadeIn(250);
      });
  });

  $(document).ready(function(){

    $("#Home-button").click(function(){
        $("#Info").fadeOut(250);
      });
  });

  $(document).ready(function(){

    $("#Projects-button").click(function(){
        $("#Info").fadeOut(250);
      });
  });

  $(document).ready(function(){

    $("#Contact-button").click(function(){
        $("#Info").fadeOut(250);
      });
  });



  $(document).ready(function(){

    $("#Contact-button").click(function(){
        $("#Contact").fadeIn(250);
      });
  });

  $(document).ready(function(){

    $("#Home-button").click(function(){
        $("#Contact").fadeOut(250);
      });
  });

  $(document).ready(function(){

    $("#Projects-button").click(function(){
        $("#Contact").fadeOut(250);
      });
  });

  $(document).ready(function(){

    $("#Info-button").click(function(){
        $("#Contact").fadeOut(250);
      });
  });
