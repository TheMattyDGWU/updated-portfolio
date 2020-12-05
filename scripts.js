$("document").ready(function () {

//CLICK Functions
$("#homeButton").on("click", function () {
     console.log("homeButton button has been clicked");

     $("#homeButton").addClass("hidden");
     $("#recipe-display").addClass("hidden");
     $("#wine-display").addClass("hidden");
     $("#search-options").removeClass("hidden");

 });

 $("#portfolioButton").on("click", function () {
     console.log("Recipe search button has been clicked");

     $("#homeButton").removeClass("hidden");
     $("#recipe-display").removeClass("hidden");
     $("#search-options").addClass("hidden");

 });

 $("#interestsButton").on("click", function () {
     console.log("wine pairing button has been clicked");

     $("#homeButton").removeClass("hidden");
     $("#wine-display").removeClass("hidden");
     $("#search-options").addClass("hidden");

 });






});