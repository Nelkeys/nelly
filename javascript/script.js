document.addEventListener("DOMContentLoaded", function () {
    const lightModeToggle = document.getElementById("lightModeToggle");
    const body = document.body;

    // Check if a user preference exists in local storage
    const userPreference = localStorage.getItem("modePreference");

    // If userPreference is found in local storage, apply it
    if (userPreference) {
        body.classList.toggle("light-mode", userPreference === "light");
        lightModeToggle.checked = userPreference === "light";
    }

    // Function to handle mode toggle
    function handleModeToggle() {
        if (lightModeToggle.checked) {
            // Apply light mode
            body.classList.add("light-mode");
            // Save user preference to local storage
            localStorage.setItem("modePreference", "light");
        } else {
            // Apply dark mode
            body.classList.remove("light-mode");
            // Save user preference to local storage
            localStorage.setItem("modePreference", "dark");
        }
    }

    // Event listener for mode toggle
    lightModeToggle.addEventListener("change", handleModeToggle);
});







  function openNav() {
   document.getElementById("mySidenav").style.width="250px";
  }
  
  function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
  }
  
  
  function removeSideNav() {
    document.getElementById("mySidenav").style.width = "";
  }
  
  
  
  
  
  
    // Education and Work actions
  function displayEducation() {
    document.getElementById("education").style.display = "block";
    document.getElementById("work").style.display = "none";
    
    //dark mode settings
    document.getElementById("workButton").style.background = "transparent";
    document.getElementById("workButton").style.color = "var(--primary)";
    document.getElementById("educationButton").style.background = "var(--primary)";
    document.getElementById("educationButton").style.color = "var(--background)";
  }
  
  
  
  
  function displayWork() {
    document.getElementById("work").style.display = "block";
    document.getElementById("education").style.display = "none";
    
    //dark mode settings
    document.getElementById("workButton").style.background = "var(--primary)";
    document.getElementById("workButton").style.color = "var(--background)";
    document.getElementById("educationButton").style.background = "var(--transparent)";
    document.getElementById("educationButton").style.color = "var(--primary)";
  }
  
  
  
  

const slideInLeftElements = document.querySelectorAll(".slide-in-left");

const options = {
    threshold: 0.19, // Adjust this threshold as needed
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-active");
            observer.unobserve(entry.target);
        }
    });
}, options);

slideInLeftElements.forEach(element => {
    observer.observe(element);
});