console.log('The Iron Yard Rocks');

var header1 = document.getElementById('Header1')


$( "#Header1" ).click(function() {
        $('#Header1').toggleClass("click1");
        $( '#Body1' ).toggle();
        $( '#Body2' ).hide();
        $( '#Body3' ).hide();
        $("#Header2").removeClass("click2");
        $("#Header3").removeClass("click3");
});

$( "#Header2" ).click(function() {
  $("#Header2").toggleClass("click2");
  $( '#Body2' ).toggle();
  $( '#Body3' ).hide();
  $( '#Body1' ).hide();
  $("#Header1").removeClass("click1");
  $("#Header3").removeClass("click3");
});

$( "#Header3" ).click(function() {
  $("#Header3").toggleClass("click3");
  $( '#Body3' ).toggle();
  $( '#Body2' ).hide();
  $( '#Body1' ).hide();
  $("#Header1").removeClass("click1");
  $("#Header2").removeClass("click2");
});
