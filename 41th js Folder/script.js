setTimeout(() => {
    document.getElementById("box").style.borderRadius = "50%"
}, 5000);

setInterval(() => {
  const currenctDate = new Date().toLocaleTimeString("en-US")
    document.getElementById("time").innerText = currenctDate
}, 1000);

  