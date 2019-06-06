$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $(".justin, .brad, .katy").hide();
    var inputFlavor = $("input:radio[name=flavor]:checked").val();
    var inputHair = $("input:radio[name=hair]:checked").val();
    var inputAnimal = $("input:radio[name=animal]:checked").val();

    // alert("age=" + age + "color=" + inputColor);
    if (inputAnimal === "owl") {
      $(".justin").show();
    } else if (inputAnimal === "rat" && inputHair === "red") {
      $(".brad").show();
    } else {
      $(".katy").show();
    }
  });
});
