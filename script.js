$( document ).ready(function() {
//Settings
  var clear = false;
  var result = "";
  var calc = "";
  var username = "";
  var formula = "";
  var d = new Date();
  var newDate = d.toDateString();
  var time = new Date().toLocaleTimeString();


  $("button").click(function() {
    //Get value from the clicked button.
    var text = $(this).attr("value");

    //Check the value from the clicked button and move it to the textbox.
    if (parseInt(text, 10) == text ||
                      text === "%" ||
                      text === "/" ||
                      text === "*" ||
                      text === "-" ||
                      text === "+" ||
                      text === ".") {
      if (clear === false) {
        calc += text;
        $(".textBox").val(calc);
      } else {
        calc = text;
        $(".textBox").val(calc);
        clear = false;
      }
    }

    switch (text) {
      //Clear all textbox.

      case "C":
        calc = "";
        $(".textBox").val("");
        break;

        //Clear the last character digited.
      case "CE":
        calc = calc.slice(0, -1);
        $(".textBox").val(calc);
        break;

        //Calculate and show the result.
      case "=":
        result = eval(calc);
        formula = $(".textBox").val();
        $(".textBox").val(result);
        clear = true;
        break;	

        //save
      case "S":
        $('.modal').addClass("visible")  
        $('.modal').css("display", "block")       
      break;
    }

  });

  $("#cancel").click(function() {
    $('.modal').fadeOut('slow');
    $('.modal').removeClass("visible")  
  });

  $("#ok").click(function() {

      //Set Username
      username = $(".name").val();

      $('.display').append("<div>"+"<h3>"+username+"</h3>"+"<a href='#'>"+formula+"</a>"+" = "+result+ " "+"<span>"+newDate+" "+time+"</span><button>x</button></div>")

      $('.modal').fadeOut("slow", function() {
        $('.modal').removeClass("visible")  
        remove();
      })
  });

  function remove(){

    $(".display a").on( "click", function() {
      var Fvalue = $(this).text();
      $('.textBox').val(Fvalue)
    });

    $(".display button").click(function() {
      $(this).parent('div').delay(300).fadeOut( 'slow', function(){ 
              this.remove()
     });
    });
  }

}); //end

