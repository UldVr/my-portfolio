function addRecommendation() {
    // Get the message of new comment
    let recommendation = document.getElementById("new_recommendation"); // Fixed typo
    // If the client has left a comment, display pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New comment added");
      // Call showPopup here
      showPopup(true);
      // Create a new 'comment' element and set its value to the client's message
      var element = document.createElement("div");
      element.setAttribute("class", "recommendation");
      element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span>`;
      // Add this element to the end of the list of comments
      document.getElementById("all_recommendations").appendChild(element);
  
      // Reset the value of textarea
      recommendation.value = "";
    }
  }
  
  function showPopup(bool) {
    document.getElementById('popup').style.visibility = bool ? 'visible' : 'hidden';
  }  