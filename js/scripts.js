var triangleChecker = function(side1, side2, side3){
  if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)) {
    return "Not a Triangle"
  }

  else if ((side1 === side2) && (side1 == side3)) {
    return "Equilateral"
  }
  else if ((side1 !== side2) && (side2 !== side3) && (side1 !== side3)) {
    return "Scalene"
  }

  else if ((side1 === side2) || (side1 === side3) || (side2 === side3)) {
    return "Isosceles"
  }
};

$(document).ready(function(){

  $("form.triangle-form").submit(function(event){
    side1 = parseInt($(".side1").val())
    side2 = parseInt($(".side2").val())
    side3 = parseInt($(".side3").val())

    result = triangleChecker(side1, side2, side3)

    if (result === "Not a Triangle"){
      $(".answer").text("Not a Triangle")
    }

    else if (result === "Equilateral"){
    $(".answer").text("Equilateral");
  }

    else if (result === "Scalene"){
    $(".answer").text("Scalene");
  }

    else if (result === "Isosceles"){
      $(".answer").text("Isosceles");
    }



    event.preventDefault();
  });

});
