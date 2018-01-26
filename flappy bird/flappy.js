// $(document).keydown(function(e)
//  {
//     switch (e.keyCode) 
//     	{
//     		case 37: //gauche 

//     			$('#bird').animate({"marginRight" : "+=100px"},150);

//     			break;

//     		case 38: //haut

//     			$('#bird').animate({"marginBottom" : "+=100px"},150);

//     			break;

//     		case 39: //bas

//     			$('#bird').animate({"marginLeft" : "+=100px"},150);

//     			break;		

//     		case 40: //droite 

//     			$('#bird').animate({"marginTop" : "+=100px"},150);

//     			break;	

//     	}
// }); 	


$(document).keydown(function(e){
	if (e.keyCode == 90) {
		$("#bird").animate({marginBottom: '+=100px'}, 150)
	}
	if (e.keyCode == 83) {
		$("#bird").animate({marginTop: '+=100px'}, 150)
	}
	if (e.keyCode == 81) {
		$("#bird").animate({marginRight: '+=100px'}, 150)
	}
	if (e.keyCode == 68) {
		$("#bird").animate({marginLeft: '+=100px'}, 150)
	}
});





