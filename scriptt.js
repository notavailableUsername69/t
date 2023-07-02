function startSurvey() {
    window.location.href = "survey.html";
  }
  function submitSurvey(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve user answers
    const hearAbout = document.getElementById("hear-about").value;
    const productUse = document.getElementById("product-use").value;
    const recommendation = document.getElementById("recommendation").value;
    const issues = document.getElementById("issues").value;
  
    // Store user answers in local storage (or you can send them to a server)
    localStorage.setItem("hearAbout", hearAbout);
    localStorage.setItem("productUse", productUse);
    localStorage.setItem("recommendation", recommendation);
    localStorage.setItem("issues", issues);
  
    // Redirect to the thank you page
    window.location.href = "thankyou.html";
  }