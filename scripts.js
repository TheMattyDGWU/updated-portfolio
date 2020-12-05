$("document").ready(function () {

     //CLICK Functions
     $("#homeButton").on("click", function () {
          console.log("homeButton button has been clicked");

          $("#indexContainer").removeClass("hidden");
          $("#portfolioContainer").addClass("hidden");
          $("#interestsContainer").addClass("hidden");

     });

     $("#portfolioButton").on("click", function () {
          console.log("Recipe search button has been clicked");

          $("#indexContainer").addClass("hidden");
          $("#portfolioContainer").removeClass("hidden");
          $("#interestsContainer").addClass("hidden");

     });

     $("#interestsButton").on("click", function () {
          console.log("wine pairing button has been clicked");

          $("#indexContainer").addClass("hidden");
          $("#portfolioContainer").addClass("hidden");
          $("#interestsContainer").removeClass("hidden");

     });

});