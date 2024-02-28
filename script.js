document.getElementById("login-btn").addEventListener("click", function() {
  
    // Change button background to color blast GIF for 3 seconds
    document.getElementById("login-btn").classList.add("button-bg-change");
    setTimeout(function(){
      document.getElementById("login-btn").classList.remove("button-bg-change");
    }, 3000);
  });