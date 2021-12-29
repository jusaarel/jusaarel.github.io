var timerinSeconds = 0;
var interval;

function Reset() {
  clearInterval(interval);
  
  timerinSeconds = 0;
  
  var hourInput = document.getElementById("inputHours")
  var minuteInput = document.getElementById("inputMinutes");
   var secondsInput = document.getElementById("inputSeconds");
   
    document.getElementById("hours").innerHTML = "0"
  document.getElementById("minutes").innerHTML = "0"
    document.getElementById("seconds").innerHTML = "0"
    
     hourInput.style.display = "block";
  minuteInput.style.display = "block";
  secondsInput.style.display = "block";
}


function StartTimer() {

	var hourInput = document.getElementById("inputHours")
  var minuteInput = document.getElementById("inputMinutes");
   var secondsInput = document.getElementById("inputSeconds");
  
	timerinSeconds += hourInput.value * 1000 * 60 * 60;
  timerinSeconds += minuteInput.value * 1000 * 60;
	timerinSeconds += secondsInput.value * 1000;
  
  hourInput.style.display = "none";
  minuteInput.style.display = "none";
  secondsInput.style.display = "none";

  
  interval = setInterval(function() {
  
    
  // Find the distance between now and the count down date
  //var distance = countDownDate - now;
    var distance = timerinSeconds;
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  //document.getElementById("demo").innerHTML = hours + " "
  //+ minutes + " " + seconds + " ";
  
   document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds


    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("minutes").innerHTML = "";
       document.getElementById("hours").innerHTML = "";
              document.getElementById("seconds").innerHTML = "";

	var audio = new Audio('audio_file.mp3');
	audio.play();

   }
   
   timerinSeconds = timerinSeconds - 1000;
}, 1000);
}
// Update the count down every 1 second
