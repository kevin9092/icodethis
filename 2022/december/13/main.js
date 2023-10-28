// Add JavaScript code here
const connect = {};

connect.init = () => {
  const controls = document.querySelectorAll(".login__input button");
  controls.forEach((control) => {
    control.addEventListener("click", (event) => connect.submit(event));
  });
};

connect.submit = (event) => {
  event.target.setAttribute("data-animate", "start");
  event.target.setAttribute("data-animate", "bounce");

  document.querySelector(".login__input input").value = "";

  setTimeout(() => {
    event.target.setAttribute("data-animate", "complete");
  }, 200);
};

connect.init();
