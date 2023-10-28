// Add JavaScript code here
const feedback = {};

feedback.init = () => {
  const moodList = document.querySelectorAll(".mood__button");
  moodList.forEach((mood) => {
    mood.addEventListener("click", (event) => feedback.setMood(event));
  });

  const consentFeedback = document.querySelector("[data-consent=feedback]");
  consentFeedback.addEventListener("change", (event) => {
    feedback.contact = event.currentTarget.checked;
  });

  const consentResearch = document.querySelector("[data-consent=research]");
  consentResearch.addEventListener("change", (event) => {
    feedback.research = event.currentTarget.checked;
  });

  const controls = document.querySelectorAll(".controls button");
  controls.forEach((control) => {
    control.addEventListener("click", (event) => feedback.submit(event));
  });
};

feedback.setMood = (event) => {
  feedback.mood = event.target.getAttribute("data-mood");
  document.querySelectorAll("[data-selected]").forEach((mood) => {
    mood.removeAttribute("data-selected");
    mood.removeAttribute("data-animate");
  });
  event.target.setAttribute("data-selected", true);
  event.target.setAttribute("data-animate", "bounce");

  setTimeout(() => {
    event.target.removeAttribute("data-animate");
  }, 200);
};

feedback.submit = (event) => {
  event.target.setAttribute("data-animate", "start");
  event.target.setAttribute("data-animate", "bounce");

  setTimeout(() => {
    event.target.setAttribute("data-animate", "complete");
  }, 200);
};

feedback.init();
