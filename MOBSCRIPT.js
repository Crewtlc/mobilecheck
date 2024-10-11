function toggleRemarks() {
  const mobilePosition = document.getElementById("mobilePosition").value;
  const remarksContainer = document.getElementById("remarksContainer");
  remarksContainer.style.display = mobilePosition === "Switch On" ? "block" : "none";
}

function validateForm() {
  const cliName = document.getElementById("cliName").value;
  const dateTime = document.getElementById("dateTime").value;
  const name = document.getElementById("name").value;
  const cmsId = document.getElementById("cmsId").value;
  const cugNumber = document.getElementById("cugNumber").value;
  const personalNumber = document.getElementById("personalNumber").value;
  const mobilePosition = document.getElementById("mobilePosition").value;
  const remarks = document.getElementById("remarks").value;

  if (!cliName || !dateTime || !name || !cmsId || !cugNumber || !personalNumber || !mobilePosition) {
    alert("Please fill out all fields.");
    return false;
  }

  if (mobilePosition === "Switch On" && !remarks) {
    alert("Please provide remarks for mobile position 'Switch On'.");
    return false;
  }
  alert("Form submitted successfully!");
  
  return true;
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyU86Ya4C8w5x3Oc3Tg_Xz2OBbX8wyUzn5ZB4ihNl8cwe68cRJtZgqpt1Kmo29blPu2/exec';
const form = document.forms['mobileCheckForm'];
const submitButton = form.querySelector('button[type="submit"]');  // Select the submit button

form.addEventListener('submit', async e => {
  e.preventDefault();  // Prevent the default form submission

  // Disable the submit button to prevent multiple submissions
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  try {
    alert("Wait! Your form is submitting");
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    });

    if (response.ok) {
      alert("Your details have been recorded, and you will be relieved soon.");
      window.location.reload();  // Reload the page after form submission
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error!', error.message);
    alert("An error occurred during form submission. Please try again.");
  } finally {
    // Re-enable the submit button after submission is complete
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
  }
});
