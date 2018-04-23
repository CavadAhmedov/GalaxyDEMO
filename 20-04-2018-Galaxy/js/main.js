


$(function(){


$(window).scroll(function () { 						//	THIS				
    if ($(this).scrollTop() > 10) {					//	IS
      $(".head").hide();							//	HEADER
      $(".navbars").addClass("tgl");				//	AND
    } else {										//	NAVBAR
      $(".head").show();							//  SETTINGS
    }
  });

$(window).scroll(function () { 						//  THIS
    if ($(this).scrollTop() < 10) {					//	IS
      $(".navbars").removeClass("tgl");             //	TOO
    } 
  });




//SETTING
			//BAR 	
					//SETTINGS

$(".setting").click(function(){
	$(".setting-menu").toggleClass("classLeft");
	$(".setting").toggleClass("classRight");
});





// CHANGE 
			//COLOR 	
						//SETTINGS

$("#green").click(function(){
	$(".color").css("background-color" ,"#59AB02");				//GREEN
	$("#btn").css("color", "#59AB02");								//COLOR
	$("#my-image").attr("src", "img/green.png");
	$(".txtcolor").css("color" , "#59AB02");
});





$("#purple").click(function(){								
	$(".color").css("background-color" ,"#800080");            //PURPLE
	$("#btn").css("color", "#800080");								//COLOR			
	$("#my-image").attr("src", "img/purple.png");
	$(".txtcolor").css("color" , "#800080");
});





$("#orange").click(function(){
	$(".color").css("background-color" ,"#FA6900");            //ORANGE
	$("#btn").css("color", "#FA6900");								//COLOR
	$("#my-image").attr("src", "img/orange.png");
	$(".txtcolor").css("color" , "#FA6900");
});





$("#blue").click(function(){
	$(".color").css("background-color" ,"#2EAEF0");				//BLUE
	$("#btn").css("color", "#2EAEF0");								//COLOR
	$("#my-image").attr("src", "img/blue.png");
	$(".txtcolor").css("color" , "#2EAEF0");
});





$("#gray").click(function(){
	$(".color").css("background-color" ,"#555555");				//GRAY
	$("#btn").css("color", "#555555");								//COLOR
	$("#my-image").attr("src", "img/gray.png");
	$(".txtcolor").css("color" , "#555555");
});





$("#magenta").click(function(){
	$(".color").css("background-color" ,"#EB038D");				//MAGENTA
	$("#btn").css("color", "#EB038D");								//COLOR
	$("#my-image").attr("src", "img/magenta.png");
	$(".txtcolor").css("color" , "#EB038D");
});





$("#red").click(function(){
	$(".color").css("background-color" ,"#9E0B0F");				//RED
	$("#btn").css("color", "#9E0B0F");								//COLOR
	$("#my-image").attr("src", "img/red.png");
	$(".txtcolor").css("color" , "#9E0B0F");
});





$("#brown").click(function(){
	$(".color").css("background-color" ,"#C69C6D");				//BROWN
	$("#btn").css("color", "#C69C6D");								//COLOR
	$("#my-image").attr("src", "img/brown.png");
	$(".txtcolor").css("color" , "#C69C6D");
});





$("#teal").click(function(){
	$(".color").css("background-color" ,"#008080");				//TEAL
	$("#btn").css("color", "#008080");								//COLOR
	$("#my-image").attr("src", "img/teal.png");
	$(".txtcolor").css("color" , "#008080");
});




$("#golden").click(function(){
	$(".color").css("background-color" ,"#DAA520");				//GOLDEN
	$("#btn").css("color", "#DAA520");								//COLOR
	$("#my-image").attr("src", "img/golden.png");
	$(".txtcolor").css("color" , "#DAA520");
});



// WIDE
		//AND	
				//BOXED 	
						//SETTINGS

$("#btnwide").click(function(){										
	$(".change").toggleClass("container-fluid");			//WIDE
	$(".change").toggleClass("container");
});


$("#btnbox").click(function(){	
	$(".change").toggleClass("container");					//BOXED
	$(".change").toggleClass("container-fluid");
});


});