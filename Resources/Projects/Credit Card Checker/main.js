// Original credit card validation code

const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
// Other arrays omitted for brevity (same as your original code)

const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Functions to validate, find invalid cards, and identify companies
const validateCred = (num) => {
  let sum = 0;
  let double = false;

  for (let i = num.length - 1; i >= 0; i--) {
    let digit = num[i];
    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    double = !double;
  }

  return sum % 10 === 0;
};

const findInvalidCards = (cards) => {
  const invalidCards = [];
  for (let i = 0; i < cards.length; i++) {
    if (!validateCred(cards[i])) {
      invalidCards.push(cards[i]);
    }
  }
  return invalidCards;
};

const idInvalidCardCompanies = (invalidNumbers) => {
  const companies = [];
  for (let i = 0; i < invalidNumbers.length; i++) {
    const firstDigit = invalidNumbers[i][0];
    switch (firstDigit) {
      case 3:
        if (!companies.includes("Amex")) companies.push("Amex");
        break;
      case 4:
        if (!companies.includes("Visa")) companies.push("Visa");
        break;
      case 5:
        if (!companies.includes("Mastercard")) companies.push("Mastercard");
        break;
      case 6:
        if (!companies.includes("Discover")) companies.push("Discover");
        break;
      default:
        if (!companies.includes("Company Not Found")) companies.push("Company Not Found");
        break;
    }
  }
  return companies;
};

// Display invalid card companies on button click
document.getElementById("check-invalid-cards").addEventListener("click", () => {
  // Show loading spinner
  document.getElementById("loading").style.display = "block";
  document.querySelector(".result").style.display = "none"; // Hide result section

  setTimeout(() => {
    const invalidCards = findInvalidCards(batch);
    const companies = idInvalidCardCompanies(invalidCards);

    // Hide loading spinner
    document.getElementById("loading").style.display = "none";
    const companyList = document.getElementById("company-list");
    companyList.innerHTML = ""; // Clear previous results

    companies.forEach(company => {
      const li = document.createElement("li");
      li.textContent = company;

      // Add class based on company type
      if (company === "Amex") li.classList.add("amex");
      if (company === "Visa") li.classList.add("visa");
      if (company === "Mastercard") li.classList.add("mastercard");
      if (company === "Discover") li.classList.add("discover");
      if (company === "Company Not Found") li.classList.add("not-found");

      companyList.appendChild(li);
    });

    document.querySelector(".result").style.display = "block"; // Show result section
  }, 1000); // Simulate processing delay
});
