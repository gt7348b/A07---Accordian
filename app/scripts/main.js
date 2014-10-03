console.log('The Iron Yard Rocks');


$( "#Header1" ).click(function() {
        $('#Header1').toggleClass("click");
        $("#Header2").removeClass("click");
        $("#Header3").removeClass("click");
});

$( "#Header2" ).click(function() {
        $("#Header2").toggleClass("click");
        $("#Header1").removeClass("click");
        $("#Header3").removeClass("click");
});

$( "#Header3" ).click(function() {
        $("#Header3").toggleClass("click");
        $("#Header1").removeClass("click");
        $("#Header2").removeClass("click");
});
