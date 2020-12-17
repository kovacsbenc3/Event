$("#1").click(()=>{$("body").append("<button>ACTIVATED</button>");
});
$("#2").click(()=>{$("#1").text("MISSION ACCOMPLISHED");
});
$("#3").click(()=>{
    var str = $("#textbox").val();
    $(".but").css("background",str);
    
});
