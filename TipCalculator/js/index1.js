// function tipCalculator() {
//     var billAmount = document.getElementById("bill").value;
//     var serviceQuality = document.getElementById("service").value;
//     var numberOfPeople = document.getElementById("numOfPeople").value;
//
//     if (billAmount === "" || serviceQuality == 0) {
//         alert("Please enter required values!")
//         return;
//     }
//
//     if ( numberOfPeople === "" || numberOfPeople <=1) {
//         numberOfPeople = 1;
//         document.getElementById("each").style.display = "none";
//     } else {
//         document.getElementById("each").style.display = "block";
//     }
//
//     var totalAmount = (billAmount * serviceQuality) / numberOfPeople;
//     totalAmount = Math.round(totalAmount * 100) / 100;
//     totalAmount = totalAmount.toFixed(2);
//     document.getElementById("tip-container").style.display = "block";
//     document.getElementById("tip").innerHTML = totalAmount;
// }
//
// document.getElementById("tip-container").style.display = "none";
// document.getElementById("each").style.display = "none";


function tipcalcy() {
  // var billAmount = document.getElementById("bill").value;
  // var serviceQuality = document.getElementById("service").value;
  var numberOfPeople = document.getElementById("numOfPeople").value;


  var amount = document.getElementById('bill_amt').value;
  //var perc = document.getElementById('tip_perc').value;
  var perc = document.getElementById("service").value;
  if (amount === "" || perc == 0) {
          alert("Please enter required values!")
          return;
      }


  var tip =amount * (perc);
  var total = Number(amount) + tip;

  document.getElementById('tip_amt').value =tip;
  document.getElementById('bill').value = total;

      if ( numberOfPeople === "" || numberOfPeople <=1) {
          numberOfPeople = 1;
          document.getElementById("each").style.display = "none";
      } else {
          document.getElementById("each").style.display = "block";
      }

      var tipForEach = tip / numberOfPeople;
      tipForEach = Math.round(tipForEach * 100) / 100;
       tipForEach = tipForEach.toFixed(2);
      // document.getElementById("tip-container").style.display = "block";
       document.getElementById("tip").innerHTML = tipForEach;


  // document.getElementById("tip-container").style.display = "none";
   document.getElementById("each").style.display = "block";
}

document.getElementById('calculate-btn').onclick = function() {
    tipcalcy();
};
