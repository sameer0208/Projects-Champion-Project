// Function to restrict textarea 
function restrictTextarea(event) {
    var textarea = document.getElementById("project_description");
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
    var textarea = document.getElementById("project_description");
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
