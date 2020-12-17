$("#1").click(()=>{$("body").append("<button>ACTIVATED</button>");
});
$("#2").click(()=>{$("#1").text("MISSION ACCOMPLISHED");
});
$("#3").click(()=>{$(".but").css("background-color", "red");
});