document.addEventListener('DOMContentLoaded', function() {

  const fromSelect = document.getElementById('from-units-select');
  const toSelect = document.getElementById('to-units-select');
  const input = document.getElementById('from-input');
  const toInput = document.getElementById('to-input');
  const reverseBtn = document.getElementById('reverse-icon');
  const btns = document.querySelectorAll('.button');
  const timeBtn = document.getElementById('time');
  const lengthBtn = document.getElementById('length');
  const temperatureBtn = document.getElementById('temperature');
  const weightBtn = document.getElementById('weight');

  let result;

  reverseBtn.addEventListener('click', function() {
      reverseBtn.classList.toggle('rotate');

      // Reverse the Select Value
      let tempValue = fromSelect.value;
        
      fromSelect.value = toSelect.value;
      toSelect.value = tempValue;

      // Reverse the Input Value
      let tempInputValue = input.value;

      input.value = toInput.value;
      toInput.value = tempInputValue;

  })

  // Button styling on click
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("button-selected"));
      btn.classList.add("button-selected");
    });
  });


  function convertTime() {

    let toValue = parseFloat(input.value);

    // Show Error
    if(isNaN(toValue)) {
      result = "Error";
      toInput.classList.add('error');
      toInput.value = result;
    } else {
      toInput.classList.remove('error');
    }

    // Second to all units
    if(fromSelect.value === "second" && toSelect.value === "second") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "second" && toSelect.value === "millisecond") {
      result = toValue * 1000;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "second" && toSelect.value === "minute") {
      result = toValue / 60;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "second" && toSelect.value === "hour") {
      result = toValue / 3600;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "second" && toSelect.value === "day") {
      result = toValue / 86400;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "second" && toSelect.value === "week") {
      result = toValue / 604800;
      toInput.value = parseFloat(result.toFixed(8));
    } else if(fromSelect.value === "second" && toSelect.value === "month") {
      result = toValue / 2628000;
      toInput.value = parseFloat(result.toFixed(9));
    } else if(fromSelect.value === "second" && toSelect.value === "year") {
      result = toValue / 31540000;
      toInput.value = parseFloat(result.toFixed(10));
    }

    // Millisecond to All Units

    if(fromSelect.value === "millisecond" && toSelect.value === "millisecond") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "millisecond" && toSelect.value === "second") {
      result = toValue / 1000;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "millisecond" && toSelect.value === "minute") {
      result = toValue / 60000;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "millisecond" && toSelect.value === "hour") {
      result = toValue / 3600000;
      toInput.value = parseFloat(result.toFixed(10));
    } else if(fromSelect.value === "millisecond" && toSelect.value === "day") {
      result = toValue / 86400000;
      toInput.value = parseFloat(result.toFixed(10));
    } else if(fromSelect.value === "millisecond" && toSelect.value === "week") {
      result = toValue / 604800000;
      toInput.value = parseFloat(result.toFixed(10));
    } else if(fromSelect.value === "millisecond" && toSelect.value === "month") {
      result = toValue / 2628000000;
      toInput.value = parseFloat(result.toFixed(10));
    } else if(fromSelect.value === "millisecond" && toSelect.value === "year") {
      result = toValue / 31540000000;
      toInput.value = parseFloat(result.toFixed(10));
    }

    

  }

  setInterval(() => {
    convertTime();
  }, 100);

    
})