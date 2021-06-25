const form = document.querySelector("form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validation
  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if (usernamePattern.test(username)) {
    feedback.textContent = `Your Username ${username} passes all requirements.`;
  } else {
    feedback.textContent = `Your Username ${username} does not pass all requirements.`;
  }
});

//Live Feedback
form.username.addEventListener("keyup", (e) => {
  //   console.log(e.target.value);
  if (usernamePattern.test(e.target.value)) {
    console.log(`Passed.`);
    username.style.backgroundColor = "#9AE19D";
  } else {
    username.style.backgroundColor = "#F38375";
    console.log(`Failed`);
  }
});
