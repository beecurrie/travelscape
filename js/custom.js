// custom js file
$(document).ready(function(){

// --------------------- DATE RANGE -----------------------------
  $('#datePicker').daterangepicker({
    opens: 'center',
    minDate: 1,
    maxDate: 14,
    autoApply: true,
    linkedCalenders: true,
  }, function(start, end, label) {

  });

  $('#fullpage').fullpage({
      //options here
      css3: true,
      slidesNavigation: true,
      normalScrollElements: '.slide',
      autoScrolling: true,
      controlArrows: false,
      sectionSelector: '.section',
      setKeyboardScrolling: false,
      setAllowScrolling: false,
  });



  // --------------------- VARIABLES -----------------------------
  // Variables for Data

  var accomData = {
    hostel: {
      pricePerNight: 30,
      minNight: 1,
      maxNight: 10,
      minCapacity: 1,
      maxCapacity: 1,
      mealOptionOne: ['Soup of the Day', 7.50],
      mealOptionTwo: ['Breakfast Bar', 10.00],
      mealOptionThree: ['None', 0.00]
    },
    motel: {
      pricePerNight: 90,
      minNight: 3,
      maxNight: 10,
      minCapacity: 2,
      maxCapacity: 4,
      mealOptionOne: ['Breakfast', 13.50],
      mealOptionTwo: ['Breakfast & Dinner', 27.50],
      mealOptionThree: ['None', 0.00]
    },
    hotel: {
      pricePerNight: 157,
      minNight: 1,
      maxNight: 5,
      minCapacity: 1,
      maxCapacity: 2,
      mealOptionOne: ['Breakfast', 20.00],
      mealOptionTwo: ['Lunch', 20.00],
      mealOptionThree: ['Dinner', 30.00],
    },
    house: {
      pricePerNight: 240,
      minNight: 2,
      maxNight: 15,
      minCapacity: 1,
      maxCapacity: 4,
      mealOptionOne: ['Cereals & Toast', 17.50],
      mealOptionTwo: ['2 Nights Dinner Supplies', 30.00],
      mealOptionThree: ['Both Options', 45.00],
    }
  };

  // --------------------- FULLPAGE JS -----------------------------
  var getButton = document.querySelector('#searchBtn');
  var hotelButton = document.querySelector('#hotelSelect');
  var hostelButton = document.querySelector('#hostelSelect');
  var motelButton = document.querySelector('#motelSelect');
  var houseButton = document.querySelector('#houseSelect');
  var goBack = document.querySelector('#cancelBtn');
  var continueBook = document.querySelector('#bookBtn');
  var goBackFinal = document.querySelector('#cancelBtnFinal');

  getButton.addEventListener("click", function (){
    $.fn.fullpage.moveSlideRight();
  });

  hotelButton.addEventListener("click", function (){
    $.fn.fullpage.moveSlideRight();
  });

  hostelButton.addEventListener("click", function (){
    $.fn.fullpage.moveSlideRight();
  });

  motelButton.addEventListener("click", function (){
    $.fn.fullpage.moveSlideRight();
  });

  houseButton.addEventListener("click", function (){
    $.fn.fullpage.moveSlideRight();
  });

  goBack.addEventListener("click", function (){
    $.fn.fullpage.moveSlideLeft();
  });

  continueBook.addEventListener("click", function (){
    $.fn.fullpage.moveSlideRight();
  });

  goBackFinal.addEventListener("click", function (){
    $.fn.fullpage.moveSlideLeft();
  });

	//methods
	$.fn.fullpage.setAllowScrolling(false);

    // --------------------- FULLPAGE JS END -----------------------------

    // ---------------------- Slide THREE Selection Logic ----------------
// View Button Vars
var hotelButtonClick = document.querySelector('#hotelSelect');
var hostelButtonClick = document.querySelector('#hostelSelect');
var motelButtonClick = document.querySelector('#motelSelect');
var houseButtonClick = document.querySelector('#houseSelect');
// Dom Queries (TEXT & IMAGES)
var getHeaderSpace = document.querySelector('#selectedHeader');
var getImageSpace = document.querySelector('#selectedImage');
var getBlurbSpace = document.querySelector('#selectedBlurb');
var getMealOne = document.querySelector('#mealOne');
var getMealTwo = document.querySelector('#mealTwo');
var getMealThree = document.querySelector('#mealThree');
// Dom Queries (BUTTONS)
var letsBook = document.querySelector('#bookBtn');
// Dom Queries (CHOICES FOR FINAL)
var choiceHeader = document.querySelector('#finalHeader');
var choiceImage = document.querySelector('#finalImage');
var mealOneDrop = document.querySelector('#mealOneSelect');
var mealTwoDrop = document.querySelector('#mealTwoSelect');
var mealThreeDrop = document.querySelector('#mealThreeSelect');

hotelButtonClick.addEventListener("click", function (){
  // Pulling the Information for Hotel
  var getHotelTitle = document.querySelector('.hotel-title').innerText;
  var getHotelImage = document.querySelector('.card-hotel img').src;
  var getHotelBlurb = document.querySelector('.hotel-text').innerText;
  // Updating the pulled information into slide 3
  var updateImage = getImageSpace.src = getHotelImage;
  var updateHeader = getHeaderSpace.innerText = getHotelTitle;
  var updateBlurb = getBlurbSpace.innerText = getHotelBlurb;
  // Updating the meal options for the selection
  var updateMealOne = getMealOne.innerText = accomData.hotel.mealOptionOne[0] + ' - $' + accomData.hotel.mealOptionOne[1];
  var updateMealTwo = getMealTwo.innerText = accomData.hotel.mealOptionTwo[0] + ' - $' + accomData.hotel.mealOptionTwo[1];
  var updateMealThree = getMealThree.innerText = accomData.hotel.mealOptionThree[0] + ' - $' + accomData.hotel.mealOptionThree[1];
});

hostelButtonClick.addEventListener("click", function (){
  // Pulling the Information for Hostel
  var getHostelTitle = document.querySelector('.hostel-title').innerText;
  var getHostelImage = document.querySelector('.card-hostel img').src;
  var getHostelBlurb = document.querySelector('.hostel-text').innerText;
  // Updating the pulled information into slide 3
  var updateImage = getImageSpace.src = getHostelImage;
  var updateHeader = getHeaderSpace.innerText = getHostelTitle;
  var updateBlurb = getBlurbSpace.innerText = getHostelBlurb;
  // Updating the meal options for the selection
  var updateMealOne = getMealOne.innerText = accomData.hostel.mealOptionOne[0] + ' - $' + accomData.hostel.mealOptionOne[1];
  var updateMealTwo = getMealTwo.innerText = accomData.hostel.mealOptionTwo[0] + ' - $' + accomData.hostel.mealOptionTwo[1];
  var updateMealThree = getMealThree.innerText = accomData.hostel.mealOptionThree[0] + ' - $' + accomData.hostel.mealOptionThree[1];

});

motelButtonClick.addEventListener("click", function (){
  // Pulling the Information for Motel
  var getMotelTitle = document.querySelector('.motel-title').innerText;
  var getMotelImage = document.querySelector('.card-motel img').src;
  var getMotelBlurb = document.querySelector('.motel-text').innerText;
  // Updating the pulled information into slide 3
  var updateImage = getImageSpace.src = getMotelImage;
  var updateHeader = getHeaderSpace.innerText = getMotelTitle;
  var updateBlurb = getBlurbSpace.innerText = getMotelBlurb;
  // Updating the meal options for the selection
  var updateMealOne = getMealOne.innerText = accomData.motel.mealOptionOne[0] + ' - $' + accomData.motel.mealOptionOne[1];
  var updateMealTwo = getMealTwo.innerText = accomData.motel.mealOptionTwo[0] + ' - $' + accomData.motel.mealOptionTwo[1];
  var updateMealThree = getMealThree.innerText = accomData.motel.mealOptionThree[0] + ' - $' + accomData.motel.mealOptionThree[1];

});

houseButtonClick.addEventListener("click", function (){
  // Pulling the Information for House
  var getHouseTitle = document.querySelector('.house-title').innerText;
  var getHouseImage = document.querySelector('.card-house img').src;
  var getHouseBlurb = document.querySelector('.house-text').innerText;
  // Updating the pulled information into slide 3
  var updateImage = getImageSpace.src = getHouseImage;
  var updateHeader = getHeaderSpace.innerText = getHouseTitle;
  var updateBlurb = getBlurbSpace.innerText = getHouseBlurb;
  // Updating the meal options for the selection
  var updateMealOne = getMealOne.innerText = accomData.house.mealOptionOne[0] + ' - $' + accomData.house.mealOptionOne[1];
  var updateMealTwo = getMealTwo.innerText = accomData.house.mealOptionTwo[0] + ' - $' + accomData.house.mealOptionTwo[1];
  var updateMealThree = getMealThree.innerText = accomData.house.mealOptionThree[0] + ' - $' + accomData.house.mealOptionThree[1];

});

goBack.addEventListener("click", function (){
  var clearHeaderChoice = getHeaderSpace.innerText = 'Choice Of Stay';
  var clearImageChoice = getImageSpace.src = "images/placeholder.jpg";
  var clearBlurbChoice = getBlurbSpace.innerText = 'Blurb of accomodation';
});

letsBook.addEventListener("click", function (){
  // Updating Final Slide Info For viewChoice
  var updateChoiceHeader = choiceHeader.innerText = getHeaderSpace.innerText;
  var updateChoiceImage = choiceImage.src = getImageSpace.src;
  var updateMealChoiceOne = mealOneDrop.innerText = getMealOne.innerText;
  var updateMealChoiceTwo = mealTwoDrop.innerText = getMealTwo.innerText;
  var updateMealChoiceThree = mealThreeDrop.innerText = getMealThree.innerText;
});


});
// Document Ready ENDS
