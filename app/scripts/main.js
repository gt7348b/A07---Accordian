console.log('The Iron Yard Rocks');

var header1 = document.getElementById('Header1');



$( document.body ).click(function() {
  $( "div" ).each(function( i ) {
    if ( this.height !== "350px" ) {
      this.height = "350px";
    } else {
      this.height = "";
    }
  });
});
