export const bookingCalendar = () => {
    // parse the bookings stored as objects in localstorage array, otherwise make the array 
    let bookingsArray = JSON.parse(localStorage.getItem("bookings")) || [];
  
    const calendarDays = document.getElementById("calendar-days");
    const dayTemplate = document.getElementById("day-template");
  
    // Create calendar with DocumentFragment and cloneNode
    const makeCalendar = () => {
      const calFragment = document.createDocumentFragment();
      for (let day = 1; day <= 31; day++) {
        const dayElement = dayTemplate.cloneNode(true);
        dayElement.textContent = day;
        dayElement.className = "day";
        calFragment.appendChild(dayElement);
      }
      calendarDays.appendChild(calFragment);
    };
      // Style the calendar cells
      document.querySelectorAll(".day, th").forEach((day) => {
        day.style.width = `${dayWidth}px`;
        day.style.height = `${dayHeight}px`;
        day.style.fontSize = `${dayWidth * 0.1}px`;
      });
    };
  
    const removeItem = (array, itemToRemove) => {
      const index = array.indexOf(itemToRemove);
      // Checks if item exists. If it doesnt exist, it will have index of -1
      if (index !== -1) {
        array.splice(index, 1);
      }
      return array;
    };
  
    // Calendar day click handler
    let selectedDays = [];
    const handleDayClick = (event) => {
      if (
        event.target.classList.contains("day") &&
        !event.target.classList.contains("booked")
      ) {
        event.target.classList.add("booked");
        selectedDays.push(event.target.textContent);
        console.log(selectedDays);
      } else if (
        event.target.classList.contains("day") &&
        event.target.classList.contains("booked")
      ) {
        event.target.classList.remove("booked");
        removeItem(selectedDays, event.target.textContent);
        // console.log(selectedDays)
      }
    };
  
    // Populate dates field with selected dates
    const handleDateFieldFocus = () => {
      dateField.value = `${selectedDays.join(", ")}`;
    };
  
  
    // Register event listeners
    const registerEventListeners = () => {
      bookingForm.addEventListener("submit", handleFormSubmit);
      calendarDays.addEventListener("click", handleDayClick);
      dateField.addEventListener("focus", handleDateFieldFocus);
    };
  
    // Initialize the calendar and event listeners on DOM load
   document.addEventListener("DOMContentLoaded", () => {
    makeCalendar();
    registerEventListeners();
    resizeCalendar(); // Initial resize
  });
    
  