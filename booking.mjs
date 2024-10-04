export const bookingCalendar = () => {
    // parse the bookings stored as objects in localstorage array, otherwise make the array 
    let bookingsArray = JSON.parse(localStorage.getItem("bookings")) || [];
    const bookingForm = document.querySelector("#booking-form");
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
      calendarDays.appendChild(calFragment);
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
        // console.log(selectedDays);
      } else if (
        event.target.classList.contains("day") &&
        event.target.classList.contains("booked")
      ) {
        event.target.classList.remove("booked");
        removeItem(selectedDays, event.target.textContent);
        // console.log(selectedDays)
      }
    };
  
    // Populate date field with selected dates
    const handleDateFieldFocus = () => {
      dateField.value = `${selectedDays.join(", ")}`;
    };
  

    // Event handler for form submission
    const handleFormSubmit = (event) => {
      event.preventDefault();
      try {
        const bookingForm = document.getElementById("booking-form");
        const startTimeField = document.getElementById("start-time");
        const endTimeField = document.getElementById("end-time");
        const formData = new FormData(bookingForm);
        let name = formData.get("name");
  
        let errors = [];

        //Validate time
        let startTime = startTimeField.value;
        let endTime = endTimeField.value;
        if (startTime >= endTime) {
          window.alert("End time must be after start time.");
          return;
        }
  
        const nameValidation = [
          {
            test: () => !name,
            message: "The name field cannot be blank.",
          },
          {
            test: () => /[<>&"'\/\\]/.test(name),
            message: "The name field cannot contain <, >, &, \", ', /, or \\.",
          },
        ];
        nameValidation.forEach((validation) => {
          if (validation.test()) {
            errors.push(validation.message);
          }
        });
        // Display error items in window alert
        if (errors.length > 0) {
          window.alert(errors.join("\n"));
        } else {
          window.alert(`Thank you for booking with us, ${name}!`);
          //save booking data as object
          let bookingData = {
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
        resizeCalendar();
      });
    }      