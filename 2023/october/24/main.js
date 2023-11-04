// Add JavaScript code here
const message = {};

message.init = () => {
  const control = document.querySelector(".submit");
  control.addEventListener("click", (event) => message.submit(event));
};

message.submit = (event) => {
  event.target.setAttribute("data-animate", "start");
  event.target.setAttribute("data-animate", "bounce");
  setTimeout(() => {
    event.target.setAttribute("data-animate", "complete");
  }, 150);
};

message.init();
