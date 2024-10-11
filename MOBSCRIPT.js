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
