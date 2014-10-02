console.log('The Iron Yard Rocks');

var header1 = document.getElementById('Header1')

$( "#Header1" ).click(function() {
        $("#Header1").addClass("click1");

  /*if ($(this).css("height") === "50px") {
        $(this).css ("height" 350px);
          } else {
            $(this).css("height" "50px")
    };)
  };*/

});

$( "#Header2" ).click(function() {
  alert( "Handler for .click()2 called." );
});

$( "#Header3" ).click(function() {
  alert( "Handler for .click()3 called." );
});
