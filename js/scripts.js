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
});