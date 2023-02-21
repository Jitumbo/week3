$(document).ready(()=>{
    $("#toggleDesign").click(()=>{
        $(".showPictureDes").toggle();
        $("#showTextDesign").toggle();
        

    });

    $("#toggleDev").click(()=>{
        $(".showPictureDev").toggle();
        $("#showTextDev").toggle();
    });

    $("#togglePM").click(()=>{
        $(".showPicturePM").toggle();
        $("#showTextPM").toggle();

    })

    $('#portfolioImageContainer1').hover(function(){
		$('#hoverTextContainer1',this).slideToggle('slow');
	}, function(){
		$('#hoverTextContainer1',this).slideToggle('slow');
    });
    $('#portfolioImageContainer2').hover(function(){
		$('#hoverTextContainer2',this).slideToggle('slow');
	}, function(){
		$('#hoverTextContainer2',this).slideToggle('slow');
    });
    $('#portfolioImageContainer3').hover(function(){
		$('#hoverTextContainer3',this).slideToggle('slow');
	}, function(){
		$('#hoverTextContainer3',this).slideToggle('slow');
    });
    $('#portfolioImageContainer4').hover(function(){
		$('#hoverTextContainer4',this).slideToggle('slow');
	}, function(){
		$('#hoverTextContainer4',this).slideToggle('slow');
    });
    $('#portfolioImageContainer5').hover(function(){
		$('#hoverTextContainer5',this).slideToggle('slow');
	}, function(){
		$('#hoverTextContainer5',this).slideToggle('slow');
    });
    $('#portfolioImageContainer6').hover(function(){
		$('#hoverTextContainer6',this).slideToggle('slow');
	}, function(){
		$('#hoverTextContainer6',this).slideToggle('slow');
    });
    $('#portfolioImageContainer7').hover(function(){
		$('#hoverTextContainer7',this).slideToggle('slow');
	}, function(){
		$('#hoverTextContainer7',this).slideToggle('slow');
    });
    $('#portfolioImageContainer8').hover(function(){
		$('#hoverTextContainer8',this).slideToggle('slow');
	}, function(){
		$('#hoverTextContainer8',this).slideToggle('slow');
    });
    
    
    $("form#frmContactUs").submit(function(event){
        
        var name = $("input#frmName").val();
        var email = $("input#frmEmail").val();
        var message = $("textarea#message").val();
        if ($("input#frmName").val() && $("input#frmEmail").val()){
          alert (name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
          alert("Please enter your name and email!");
        }
        
      });
   
   
   
});