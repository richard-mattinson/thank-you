const titleText = document.querySelector("#title_text");
const headerBarName = document.querySelector("#header_bar_name_text");

const yourNameInput = document.querySelector("#your_name_text");
const yourDonationInput = document.querySelector("#your_donation_text");

const birthdayElements = document.querySelector("#birthday_elements");
const birthdayTitle = document.querySelector("#birthday_title");
const thankYouName = document.querySelector("#thank_you_name");
const thankYouEfficiency = document.querySelector("#thank_you_efficiency");

const state = {
  name: "your_name",
  donation: "your_donation",
  finishMinutes: 120,
  formComplete: false,
};

///////////////////// user inputs form /////////////////////

yourNameInput.addEventListener("change", (event) => {
  if (yourNameInput.value !== "") {
    state.name = yourNameInput.value;
    headerBarName.textContent = `${state.name.toUpperCase()}! \u{1F389}`;
    checkFormComplete();
  }
});

// yourNameInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter"&& state.donation !== "your_donation") {
//     setTimeout(() => {
//       yourFavoriteInput.blur();
//     }, 10);
//   }
// });

yourDonationInput.addEventListener("change", () => {
  console.log("donation___", yourDonationInput.value);
  
  if (yourDonationInput.value !== "") {
    state.donation = Number(yourDonationInput.value);
    state.pencePerMinute = state.donation / state.finishMinutes;
    const pencePerMinuteTwoDecimals = state.pencePerMinute.toLocaleString("en", { maximumFractionDigits: 2 });
    thankYouEfficiency.textContent = `\u{23F1}\u{FE0F} I finished the Oxford Half in ${state.finishMinutes} minutes. That's an efficiency of £${pencePerMinuteTwoDecimals} per minute. Not great, but not too bad! \u{1F3C3}`;
    if (state.name !== "your_name") {
      headerBarName.textContent = `${state.name.toUpperCase()}! \u{1F499}`;
      thankYouName.textContent = `Thank you so much for your donation ${state.name.toUpperCase()}`;
    }
    checkFormComplete();
  }
});

// yourDonationInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter" && state.name !== "your_name") {
//     setTimeout(() => {
//       yourFavoriteInput.blur();
//     }, 10);
//   }
// });

function checkFormComplete() {
  console.log("hello???", state.name, state.donation);
  if (state.name !== "your_name" && state.donation !== "your_donation") {
    
    state.formComplete = true;
    birthdayElements.style.display = "block";
  }
}
