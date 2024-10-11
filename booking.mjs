export const bookingCalendar = () => {
    // parse the bookings stored as objects in localstorage array, otherwise make the array 
    const bookingsArray = JSON.parse(localStorage.getItem("bookings")) || [];
    const bookingForm = document.getElementById("booking-form");
    const calendarDays = document.getElementById("calendar-days");
    const dayTemplate = document.getElementById("day-template");
    const dateField = document.getElementById("dates");

    
    // Create calendar with DocumentFragment and cloneNode
    const makeCalendar = () => {
      const calFragment = document.createDocumentFragment();
      for (let day = 1; day <= 31; day++) {
        const dayElement = dayTemplate.cloneNode(true);
        dayElement.textContent = day;
        dayElement.className = "day";
        calFragment.appendChild(dayElement);
      }
      calendarDays.append(calFragment);
    };
  
    const removeItem = (array, itemToRemove) =>
      array.filter((item) => item !== itemToRemove);
  
    // Calendar day click handler
    let selectedDays = [];
    const handleDayClick = (event) => {
      const dayElement = event.target;
      if (dayElement.classList.contains("day") && !dayElement.classList.contains("booked")) {
        dayElement.classList.add("booked");
        selectedDays.push(dayElement.textContent);
        dayElement.parentNode.style.border = "2px solid #7a12e2";
      } else if (dayElement.classList.contains("day") && dayElement.classList.contains("booked")) {
        dayElement.classList.remove("booked");
        selectedDays = removeItem(selectedDays, dayElement.textContent);
      }
      if (selectedDays.length === 0) {
        dayElement.parentNode.style.border = "";
      }
    };
  
    // Populate date field with selected dates
    const handleDateFieldFocus = () => {
      dateField.value = selectedDays.join(", ");
    };
  

  
    // Event handler for form submission
    const handleFormSubmit = (event) => {
      event.preventDefault();
      try {
        const formData = new FormData(bookingForm);
        const name = formData.get("name");
        const startTime = formData.get("start-time");
        const endTime = formData.get("end-time");

        const errors = [];

        if (startTime >= endTime) {
          errors.push("End time must be after start time.");
        }

        if (!name) {
          errors.push("The name field cannot be blank.");
        } else if (/[<>&"'\/\\]/.test(name)) {
          errors.push("The name field cannot contain <, >, &, \", ', /, or \\.");
        }
  
        if (errors.length > 0) {
          window.alert(errors.join("\n"));
        } else {
          window.alert(`Thank you for booking with us, ${name}!`);
          const bookingData = {
            bookingId: Date.now().toString(),
            name: name.toLowerCase(),
            bookingDates: selectedDays,
            bookingTime: `${startTime} to ${endTime}`,
            windowsize: `${window.innerWidth}px x ${window.innerHeight}px`,
          };
          bookingsArray.push(bookingData);
          localStorage.setItem("bookings", JSON.stringify(bookingsArray));
          bookingForm.reset();
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
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
      });
    }      
