$(document).ready(function(){
    $("#iconoMenu").click(function(){
        headerHeight = $("header").css("height");
        if(headerHeight == '800px'){
            $("header").css("height", "50px");
            $("header").css("background-color", "transparent");
            $("#logo").css("display", "none");
            $("#opcionesMenu").css("display", "none");
            //$("#iconoMenu").removeClass("far fa-times-circle");
            $('#iconoMenu').prop('class','fas fa-bars');
        }
        else{
            $("header").css("height", "800px");
            $("header").css("background-color", "black");
            $("#logo").css("display", "flex");
            $("#opcionesMenu").css("display", "flex");
            //$("#iconoMenu").removeClass("fas fa-bars");
            $('#iconoMenu').prop('class','far fa-times-circle');
        }
    });
  });
