$("document").ready(function () {

     //CLICK Functions
     $("#homeButton").on("click", function () {

          $("#indexContainer").removeClass("hidden");
          $("#portfolioContainer").addClass("hidden");
          $("#interestsContainer").addClass("hidden");

     });

     $("#portfolioButton").on("click", function () {

          $("#indexContainer").addClass("hidden");
          $("#portfolioContainer").removeClass("hidden");
          $("#interestsContainer").addClass("hidden");

     });

     $("#interestsButton").on("click", function () {

          $("#indexContainer").addClass("hidden");
          $("#portfolioContainer").addClass("hidden");
          $("#interestsContainer").removeClass("hidden");

     });

});