console.log('The Iron Yard Rocks');

var header1 = document.getElementById('Header1')

$( '#Body1' ).hide();
$( '#Body2' ).hide();
$( '#Body3' ).hide();

$( "#Header1" ).click(function() {
        $('#Header1').toggleClass("click1");
        $( '#Body1' ).toggle( 5000 );
        $( '#Body2' ).hide();
        $( '#Body3' ).hide();
});

$( "#Header2" ).click(function() {
  $("#Header2").toggleClass("click2");
  $( '#Body2' ).toggle( 5000 );
  $( '#Body3' ).hide();
  $( '#Body1' ).hide();
});

$( "#Header3" ).click(function() {
  $("#Header3").toggleClass("click3");
  $( '#Body3' ).toggle( 5000 );
  $( '#Body1' ).hide();
  $( '#Body2' ).hide();
});
