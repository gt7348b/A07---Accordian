console.log('The Iron Yard Rocks');

var header1 = document.getElementById('Header1')


$( "#Header1" ).click(function() {
        $('#Header1').toggleClass("click1");
        $("#Header2").removeClass("click2");
        $("#Header3").removeClass("click3");
});

$( "#Header2" ).click(function() {
  $("#Header2").toggleClass("click2");
  $("#Header1").removeClass("click1");
  $("#Header3").removeClass("click3");
});

$( "#Header3" ).click(function() {
  $("#Header3").toggleClass("click3");

  $("#Header1").removeClass("click1");
  $("#Header2").removeClass("click2");
});
