const formContainer = document.getElementsByClassName("form-container");
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const steps = document.getElementsByClassName("steps");
const error = document.getElementById("error-message");

let currentStep = 0;

window.onload = () => {
  currentStep = 0;
  steps[currentStep].classList.add("highlight");
  updateStepVisibility(currentStep);
  toggleButtonVisibility();
};

// 버튼
const toggleButtonVisibility = () => {
  if (currentStep === 0) {
    previousBtn.classList.add("hide");
  } else {
    previousBtn.classList.remove("hide");
  }

  if (currentStep === formContainer.length - 1) {
    nextBtn.classList.add("hide");
    submitBtn.classList.remove("hide");
  } else {
    nextBtn.classList.remove("hide");
    submitBtn.classList.add("hide");
  }
};

// form options based on stepIdx
const updateStepVisibility = (stepIndex) => {
  for (let i = 0; i < formContainer.length; i++) {
    const element = formContainer[i];
    if (i === stepIndex) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  }
  toggleButtonVisibility();
};

// set highlight to next/prev step number
const updateStepHighlight = (stepIndex) => {
  for (let i = 0; i < steps.length; i++) {
    steps[i].classList.remove("highlight");
  }
  steps[stepIndex].classList.add("highlight");
};

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (areFieldsFilled()) {
    if (currentStep < formContainer.length - 1) {
      currentStep++;
      updateStepVisibility(currentStep);
      updateStepHighlight(currentStep);
    }
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (areFieldsFilled()) {
    // submitBtn.disabled = true;
    // previousBtn.disabled = true;
    alert("Success");

    const signUpModal = document.getElementById("SignUp");
    const modalInstance = bootstrap.Modal.getInstance(signUpModal);
    modalInstance.hide();
  }
});

previousBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentStep > 0) {
    currentStep--;
    updateStepHighlight(currentStep);
    updateStepVisibility(currentStep);
  }
});

// password verification
const passwordVerify = (password) => {
  const regEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return regEx.test(password) && password.length >= 8;
};

// phone verification
const phoneVerify = (number) => {
  const regEx = /^[0-9]{11}$/;
  return regEx.test(number);
};

// email verification
const emailVerify = (input) => {
  const regEx =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regEx.test(input);
};

const areFieldsFilled = () => {
  const currentStepContainer = formContainer[currentStep];
  console.log(formContainer);
  const inputs = currentStepContainer.querySelectorAll("input");

  for (let input of inputs) {
    const inputValue = input.value.trim();
    switch (input.type) {
      case "email":
        if (!emailVerify(inputValue)) {
          error.innerText = "Please enter correct e-mail";
          return false;
        }
        break;
      case "number":
        if (!parseInt(inputValue)) {
          error.innerText = "Please enter correct number";
          return false;
        }
        if (input.id == "phone-input" && !phoneVerify(inputValue)) {
          error.innerText = "Phone number should have 11 digits";
          return false;
        }
        break;
      case "password":
        if (!passwordVerify(inputValue)) {
          error.innerText = "Password should have 영어, 숫자 and length >= 8";
          return false;
        }
        break;
      default:
        if (inputValue === "") {
          error.innerHTML = "Please enter both the values first";
          return false;
        }
        break;
    }
  }
  error.innerHTML = "";
  return true;
};

const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      console.log(item.joke);
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};

btn.addEventListener("click", getJoke);
getJoke();
