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
      scrollHorizontally: true,
      controlArrows: false,
      sectionSelector: '.section'
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
      blurb: 'A hostel',
      mealOptionOne: 'Soup',
      mealOptionTwo: 'Breakfast Bar',
      mealOptionThree: 'None',
    },
    motel: {
      pricePerNight: 90,
      minNight: 3,
      maxNight: 10,
      minCapacity: 2,
      maxCapacity: 4,
      blurb: 'A motel',
      mealOptionOne: 'Breakfast',
      mealOptionTwo: 'Breakfast & Dinner',
      mealOptionThree: 'None',
    },
    hotel: {
      pricePerNight: 157,
      minNight: 1,
      maxNight: 5,
      minCapacity: 1,
      maxCapacity: 2,
      blurb: 'A hotel',
      mealOptionOne: 'Breakfast',
      mealOptionTwo: 'Lunch',
      mealOptionThree: 'Dinner',
    },
    house: {
      pricePerNight: 240,
      minNight: 2,
      maxNight: 15,
      minCapacity: 1,
      maxCapacity: 4,
      blurb: 'A house',
      mealOptionOne: 'Cereals & Toast',
      mealOptionTwo: '2 Nights Dinner Supplies',
      mealOptionThree: 'Both Options',
    }
  };

  // --------------------- FULLPAGE JS -----------------------------
  var getButton = document.querySelector('#searchBtn');
  var hotelButton = document.querySelector('#hotelSelect');
  var hostelButton = document.querySelector('#hostelSelect');
  var motelButton = document.querySelector('#motelSelect');
  var houseButton = document.querySelector('#houseSelect');
  var goBack = document.querySelector('#cancelBtn');

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

	//methods
	$.fn.fullpage.setAllowScrolling(false);

    // --------------------- FULLPAGE JS END -----------------------------

    // ---------------------- Slide THREE Selection Logic ----------------
var hotelButtonClick = document.querySelector('#hotelSelect');

hotelButtonClick.addEventListener("click", function (){
  var getTitle = document.querySelector('.hotel-title').innerText;
  var getImage = document.querySelector('.card-hotel img');
  var getBlurb = document.querySelector('.hotel-text');
});



  // var selectObj = {
  //   getHeader = document.querySelector('#selectedHeader'),
  //   getImage = document.querySelector('#selectedImage'),
  //   getButton = document.querySelector('#searchBtn'),
  //
  //
  //   init: updateSelection () {
  //     selectObj.getButton.onclick = function () {
  //     selectObj.updateImage();
  //     selectObj.updateHdr();
  //     },
  //     // Init Outer Bracket
  //
  //     updateImg: function (){
  //       selectObj.getImageSelect = document.getElementById('').value;
  //       selectObj.updateChoiceOne = document.querySelector('#selectedImage');
  //
  //       if ( selectObj.getImageSelect === 'hotel') {
  //         selectObj.updateChoiceOne.src = '/images/hotel.jpg';
  //       } else if ( selectObj.getImageSelect === 'hostel') {
  //         selectObj.updateChoiceOne.src = '/images/hostel.jpg';
  //       } else if ( selectObj.getImageSelect === 'motel') {
  //         selectObj.updateChoiceOne.src = '/images/motel.jpg';
  //       } else if ( selectObj.getImageSelect === 'house') {
  //         selectObj.updateChoiceOne.src = '/images/house.png';
  //       }
  //       // Logic Outer Bracket
  //     },
  //     // UpdateImg function Outer Bracket
  //
  //     updateHdr: function (){
  //       selectObj.getHeaderSelect = document.getElementById('').value;
  //       selectObj.updateChoiceTwo = document.querySelector('#selectedHeader');
  //
  //       if ( selectObj.getHeaderSelect === 'hotel') {
  //         selectObj.updateChoiceTwo.innerHTML = 'Hotel';
  //       } else if ( selectObj.getHeaderSelect === 'hostel') {
  //         selectObj.updateChoiceTwo.innerHTML = 'Hostel';
  //       } else if ( selectObj.getHeaderSelect === 'motel') {
  //         selectObj.updateChoiceTwo.innerHTML = 'Motel';
  //       } else if ( selectObj.getHeaderSelect === 'house') {
  //         selectObj.updateChoiceTwo.innerHTML = 'House';
  //       }
  //       // Logic Outer Bracket
  //     }
  //     // UpdateHDR Func Outer bracket
  //
  //
  //   }
  //   // init outer bracket
  // }
  // // variable selectObj outer bracket



});
// Document Ready ENDS
