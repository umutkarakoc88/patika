document.addEventListener("DOMContentLoaded", () => {
    // Get references to the necessary DOM elements
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("list");
    const successToast = document.getElementById("liveToast");
    const errorToast = document.getElementById("liveToastError");
  
    // Function to show a toast message
    function showToast(toast) {
      toast.classList.remove("hide");
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
        toast.classList.add("hide");
      }, 4000); // Hide the toast after 4 seconds
    }
  
    // Function to add a new task to the list
    function newElement() {
      const inputValue = taskInput.value.trim(); // Get and trim the input value
      if (inputValue === "") {
        showToast(errorToast); // Show error toast if input is empty
      } else {
        const li = document.createElement("li"); // Create a new list item
        li.textContent = inputValue; // Set the text of the list item
  
        const span = document.createElement("span"); // Create a span element
        span.className = "close"; // Assign the close class to the span
        span.textContent = "\u00D7"; // Set the text of the span to "×"
        li.appendChild(span); // Append the span to the list item
  
        taskList.appendChild(li); // Append the list item to the task list
  
        taskInput.value = ""; // Clear the input field
  
        // Add event listener to the span to remove the task when clicked
        span.addEventListener("click", () => {
          li.style.display = "none";
        });
  
        // Add event listener to the list item to toggle the checked class
        li.addEventListener("click", () => {
          li.classList.toggle("checked");
        });
  
        showToast(successToast); // Show success toast
      }
    }
  
    // Function to initialize the existing list items with event listeners
    function initializeList() {
      const items = document.querySelectorAll("li"); // Get all existing list items
      items.forEach(item => {
        const span = document.createElement("span"); // Create a span element
        span.className = "close"; // Assign the close class to the span
        span.textContent = "\u00D7"; // Set the text of the span to "×"
        item.appendChild(span); // Append the span to the list item
  
        // Add event listener to the span to remove the task when clicked
        span.addEventListener("click", () => {
          item.style.display = "none";
        });
  
        // Add event listener to the list item to toggle the checked class
        item.addEventListener("click", () => {
          item.classList.toggle("checked");
        });
      }); 
    }
  
    // Add event listener to the button to create a new task when clicked
    document.getElementById("liveToastBtn").addEventListener("click", newElement);
    
    // Initialize the list with existing items
    initializeList();
  });
  