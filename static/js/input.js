// Code to restrict contact number field with exact 10 digits
var contactNumberInput = document.getElementById("contact_no");
    var errorText = document.getElementById("errorText");

    contactNumberInput.addEventListener("input", function() {
      var contactNumber = this.value;
      var regex = /^\d{10}$/;

      if (!regex.test(contactNumber)) {
        errorText.textContent = "Please enter a valid 10-digit contact number.";
        this.classList.add("error");
      } else {
        errorText.textContent = "";
        this.classList.remove("error");
      }
      var contactNumber = document.getElementById("contact_no").value;
      var cleanContactNumber = contactNumber.replace(/\D/g, ""); // Remove non-digit characters

      if (cleanContactNumber.length > 10) {
        cleanContactNumber = cleanContactNumber.slice(0, 10); // Limit to first 10 digits
      }

      document.getElementById("contact_no").value = cleanContactNumber;
    });
// Code to restrict characters in contact input field
    function restrictCharacters(event) {
        var keyCode = event.which ? event.which : event.keyCode;
        var isValid = (keyCode >= 48 && keyCode <= 57) || keyCode === 8; // Allow digits (0-9) and backspace (8)
        return isValid;
      }

// Function to restrict textarea 
function restrictTextarea(event) {
    var textarea = document.getElementById("skill_description");
    var words = textarea.value.trim().split(/\s+/); // Split input value into words

    if (words.length >= 200 && event.key !== "Backspace") {
      event.preventDefault(); // Prevent further input when word limit is reached
    }

    var remainingWords = 200 - words.length;
    if (remainingWords <= 0 && event.key !== "Backspace") {
      event.preventDefault(); // Prevent entering additional characters or numbers
    }
  }

  function countWords() {
    var textarea = document.getElementById("skill_description");
    var words = textarea.value.trim().split(/\s+/);
    var wordCount = words.length;
    var remainingWords = 200 - wordCount;
    var warningMessage = document.getElementById("warningMessage");

    if (wordCount > 200) {
      warningMessage.textContent = "Maximum word limit (200 words) exceeded!";
      warningMessage.style.color = "red";
    } else {
      warningMessage.textContent = "Remaining words: " + remainingWords;
      warningMessage.style.color = "black";
    }
  }

  // Code to restrict whatsapp number field with exact 10 digits
var whatsappNumberInput = document.getElementById("whatsapp_no");
var errorText = document.getElementById("errorText");

whatsappNumberInput.addEventListener("input", function() {
  var contactNumber = this.value;
  var regex = /^\d{10}$/;

  if (!regex.test(contactNumber)) {
    errorText.textContent = "Please enter a valid 10-digit contact number.";
    this.classList.add("error");
  } else {
    errorText.textContent = "";
    this.classList.remove("error");
  }
  var contactNumber = document.getElementById("whatsapp_no").value;
  var cleanContactNumber = contactNumber.replace(/\D/g, ""); // Remove non-digit characters

  if (cleanContactNumber.length > 10) {
    cleanContactNumber = cleanContactNumber.slice(0, 10); // Limit to first 10 digits
  }

  document.getElementById("whatsapp_no").value = cleanContactNumber;
});


 // Get the elements
 var contactNumberInput = document.getElementById('contact_no');
 var whatsappNumberInput = document.getElementById('whatsapp_no');
 var copyCheckbox = document.getElementById('copyCheckbox');

 // Add event listener to the checkbox
 copyCheckbox.addEventListener('change', function() {
     // Copy the contact number to the WhatsApp number field if checkbox is checked
     if (this.checked) {
         whatsappNumberInput.value = contactNumberInput.value;
         whatsappNumberInput.disabled = true; // Disable editing of WhatsApp number field
     } else {
         whatsappNumberInput.value = ''; // Clear WhatsApp number field
         whatsappNumberInput.disabled = false; // Enable editing of WhatsApp number field
     }
 });