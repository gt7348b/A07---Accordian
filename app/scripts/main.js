console.log('The Iron Yard Rocks');

var header1 = document.getElementById('Header1')

$( "#Header1" ).click(function() {
        $("#Header1").toggleClass("click1");

  /*if ($(this).css("height") === "50px") {
        $(this).css ("height" 350px);
          } else {
            $(this).css("height" "50px")
    };)
  };*/

});

$( "#Header2" ).click(function() {
  $("#Header2").toggleClass("click2");
});

$( "#Header3" ).click(function() {
  $("#Header3").toggleClass("click3");
});
