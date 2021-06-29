// custom js file
$(document).ready(function(){

// Date Range Picker
  $('#datePicker').daterangepicker({
    opens: 'center',
    minDate: 1,
    maxDate: 14,
    autoApply: true,
    linkedCalenders: true,
  }, function(start, end, label) {

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
      blurb: 'A'
    },
    motel: {
      pricePerNight: 90,
      minNight: 3,
      maxNight: 10,
      minCapacity: 2,
      maxCapacity: 4,
    },
    hotel: {
      pricePerNight: 157,
      minNight: 1,
      maxNight: 5,
      minCapacity: 1,
      maxCapacity: 2,
    },
    house: {
      pricePerNight: 240,
      minNight: 2,
      maxNight: 15,
      minCapacity: 1,
      maxCapacity: 4,
    }
  };

  // --------------------- FULLPAGE JS -----------------------------


    $('#fullpage').fullpage({
      css3: true,
      verticalCentered: true,
      resize: true,
      sectionSelector: '.section',
      slideSelector: '.slide'
    });

    $.fn.fullpage.setAllowScrolling(false);

    // --------------------- FULLPAGE JS END -----------------------------

    // ---------------------- Slide THREE Selection Logic ----------------

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
