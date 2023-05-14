const progressBars = document.querySelectorAll(".progress-bar");
progressBars.forEach(progressBar => {
  let number = progressBar.querySelector(".number");
  let counter = 0;
  setInterval(() => {
    if (counter == progressBar.dataset.percent){
      clearInterval();
    } else {
      counter += 1;
      number.innerHTML = counter + "%";
    }
  }, 30);
});


// function animateCircle(circleId, gradientId, numberId, targetValue, intervalTime) {
//     let circle = document.getElementById(circleId);
//     let number = document.getElementById(numberId);
//     let counter = 0;
//     let increment = targetValue / (1000 / intervalTime);
//     let interval = setInterval(() => {
//       if (counter >= targetValue) {
//         clearInterval(interval);
//         counter = targetValue;
//       }
//       number.innerHTML = counter.toFixed() + "%";
//       let dashOffset = 472 - (472 * counter) / 100;
//       circle.style.strokeDashoffset = dashOffset;
//       counter += increment;
//     }, intervalTime);
//     circle.style.stroke = "url(#" + gradientId + ")";
//   }

//   animateCircle("javaCircle", "javaGradientColor", "java", 65, 30);
//   animateCircle("cplusCircle", "cplusGradientColor", "cplus", 80, 30);
//   animateCircle("pythonCircle", "pythonGradientColor", "python", 45, 30);