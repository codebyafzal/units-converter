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

  const units = {
    time: [
      {value: "second", text: "Second"},
      {value: "millisecond", text: "Millisecond"},
      {value: "minute", text: "Minute"},
      {value: "hour", text: "Hour"},
      {value: "day", text: "Day"},
      {value: "week", text: "Week"},
      {value: "month", text: "Month"},
      {value: "year", text: "Year"},
    ],
    length: [
      {value: "millimeter", text: "Millimeter"},
      {value: "centimeter", text: "Centimeter"},
      {value: "meter", text: "Meter"},
      {value: "kilometer", text: "Kilometer"},
      {value: "inch", text: "Inch"},
      {value: "foot", text: "Foot"},
      {value: "mile", text: "Mile"},
      {value: "yard", text: "Yard"},
    ],
    temperature: [
      {value: "celsius", text: "Celsius"},
      {value: "kelvin", text: "Kelvin"},
      {value: "fahrenheit", text: "Fahrenheit"},
    ],
    weight: [
      {value: "milligram", text: "Milligram"},
      {value: "gram", text: "Gram"},
      {value: "kilogram", text: "Kilogram"},
      {value: "pound", text: "Pound"},
      {value: "ounce", text: "Ounce"},
      {value: "carrat", text: "Carrat"},
    ],
  }

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

  // Dynamically injecting options in select tag
  function updateUnits(selectId, unitType, selectedValue = null) {
    const select = document.getElementById(selectId);
    select.innerHTML = "";
    units[unitType].forEach((unit) => {
      const option = document.createElement('option');
      option.value = unit.value;
      option.text = unit.text;

      if(unit.value === selectedValue) {
        option.selected = true;
      }

      select.appendChild(option);
    } )
  }

  // Time button event
  timeBtn.addEventListener('click', function() {
    updateUnits("from-units-select", "time", "second");
    updateUnits("to-units-select", "time", "minute");
    convertTime();
  })

  // Length button event
  lengthBtn.addEventListener('click', function() {
    updateUnits("from-units-select", "length", "centimeter");
    updateUnits("to-units-select", "length", "meter");
    convertLength();
  })

  // Temperature button event
  temperatureBtn.addEventListener('click', function() {
    updateUnits("from-units-select", "temperature", "celsius");
    updateUnits("to-units-select", "temperature", "kelvin");
    convertTemperature();
  })

  // Weight button event
  weightBtn.addEventListener('click', function() {
    updateUnits("from-units-select", "weight", "gram");
    updateUnits("to-units-select", "weight", "kilogram");
    convertWeight();
  })

  // Time function
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

    // Minute to All Units
    if(fromSelect.value === "minute" && toSelect.value === "millisecond") {
      result = toValue * 60000;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "minute" && toSelect.value === "second") {
      result = toValue * 60;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "minute" && toSelect.value === "minute") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "minute" && toSelect.value === "hour") {
      result = toValue / 60;
      toInput.value = parseFloat(result.toFixed(10));
    } else if(fromSelect.value === "minute" && toSelect.value === "day") {
      result = toValue / 1440;
      toInput.value = parseFloat(result.toFixed(10));
    } else if(fromSelect.value === "minute" && toSelect.value === "week") {
      result = toValue / 10080;
      toInput.value = parseFloat(result.toFixed(10));
    } else if(fromSelect.value === "minute" && toSelect.value === "month") {
      result = toValue / 43800;
      toInput.value = parseFloat(result.toFixed(9));
    } else if(fromSelect.value === "minute" && toSelect.value === "year") {
      result = toValue / 525600;
      toInput.value = parseFloat(result.toFixed(9));
    }

    // Hour to All Units
    if(fromSelect.value === "hour" && toSelect.value === "millisecond") {
      result = toValue * 3600000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "hour" && toSelect.value === "second") {
      result = toValue * 3600;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "hour" && toSelect.value === "minute") {
      result = toValue * 60;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "hour" && toSelect.value === "hour") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "hour" && toSelect.value === "day") {
      result = toValue / 24;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "hour" && toSelect.value === "week") {
      result = toValue / 168;
      toInput.value = parseFloat(result.toFixed(6));
    } else if(fromSelect.value === "hour" && toSelect.value === "month") {
      result = toValue / 730;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "hour" && toSelect.value === "year") {
      result = toValue / 8760;
      toInput.value = parseFloat(result.toFixed(8));
    }

    // Day to All Units
    if(fromSelect.value === "day" && toSelect.value === "millisecond") {
      result = toValue * 86400000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "day" && toSelect.value === "second") {
      result = toValue * 86400;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "day" && toSelect.value === "minute") {
      result = toValue * 1440;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "day" && toSelect.value === "hour") {
      result = toValue * 24;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "day" && toSelect.value === "day") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "day" && toSelect.value === "week") {
      result = toValue / 7;
      toInput.value = parseFloat(result.toFixed(6));
    } else if(fromSelect.value === "day" && toSelect.value === "month") {
      result = toValue / 30.417;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "day" && toSelect.value === "year") {
      result = toValue / 365;
      toInput.value = parseFloat(result.toFixed(8));
    }

    // Week to All Units
    if(fromSelect.value === "week" && toSelect.value === "millisecond") {
      result = toValue * 604800000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "week" && toSelect.value === "second") {
      result = toValue * 604800;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "week" && toSelect.value === "minute") {
      result = toValue * 10080;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "week" && toSelect.value === "hour") {
      result = toValue * 168;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "week" && toSelect.value === "day") {
      result = toValue * 7;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "week" && toSelect.value === "week") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(6));
    } else if(fromSelect.value === "week" && toSelect.value === "month") {
      result = toValue / 4.345;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "week" && toSelect.value === "year") {
      result = toValue / 52.143;
      toInput.value = parseFloat(result.toFixed(8));
    }

    // Month to All Units
    if(fromSelect.value === "month" && toSelect.value === "millisecond") {
      result = toValue * 2628000000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "month" && toSelect.value === "second") {
      result = toValue * 2628000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "month" && toSelect.value === "minute") {
      result = toValue * 43800;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "month" && toSelect.value === "hour") {
      result = toValue * 730;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "month" && toSelect.value === "day") {
      result = toValue * 30.417;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "month" && toSelect.value === "week") {
      result = toValue * 4.345;
      toInput.value = parseFloat(result.toFixed(6));
    } else if(fromSelect.value === "month" && toSelect.value === "month") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "month" && toSelect.value === "year") {
      result = toValue / 12;
      toInput.value = parseFloat(result.toFixed(8));
    }

    // Year to All Units
    if(fromSelect.value === "year" && toSelect.value === "millisecond") {
      result = toValue * 31540000000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "year" && toSelect.value === "second") {
      result = toValue * 31540000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "year" && toSelect.value === "minute") {
      result = toValue * 525600;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "year" && toSelect.value === "hour") {
      result = toValue * 8760;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "year" && toSelect.value === "day") {
      result = toValue * 365;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "year" && toSelect.value === "week") {
      result = toValue * 52.143;
      toInput.value = parseFloat(result.toFixed(6));
    } else if(fromSelect.value === "year" && toSelect.value === "month") {
      result = toValue * 12;
      toInput.value = parseFloat(result.toFixed(7));
    } else if(fromSelect.value === "year" && toSelect.value === "year") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(8));
    }


  }

  // Length Function;
  function convertLength() {

    let toValue = parseFloat(input.value);

    if(isNaN(toValue)) {
      result = "Error";
      toInput.classList.add("error");
      toInput.textContent = result;
    } else {
      toInput.classList.remove("error");
    }

    // Millimeter to all Units
    if(fromSelect.value === "millimeter" && toSelect.value === "millimeter") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "millimeter" && toSelect.value === "centimeter") {
      result = toValue / 10;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "millimeter" && toSelect.value === "meter") {
      result = toValue / 1000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "millimeter" && toSelect.value === "kilometer") {
      result = toValue / 1000000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "millimeter" && toSelect.value === "inch") {
      result = toValue / 25.4;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "millimeter" && toSelect.value === "foot") {
      result = toValue / 304.8;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "millimeter" && toSelect.value === "mile") {
      result = toValue / 1609344;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "millimeter" && toSelect.value === "yard") {
      result = toValue / 914.4;
      toInput.value = parseFloat(result.toFixed(5));
    }

    // Centimeter to all Units
    if(fromSelect.value === "centimeter" && toSelect.value === "millimeter") {
      result = toValue * 10;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "centimeter" && toSelect.value === "centimeter") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "centimeter" && toSelect.value === "meter") {
      result = toValue / 100;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "centimeter" && toSelect.value === "kilometer") {
      result = toValue / 100000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "centimeter" && toSelect.value === "inch") {
      result = toValue / 2.54;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "centimeter" && toSelect.value === "foot") {
      result = toValue / 30.48;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "centimeter" && toSelect.value === "mile") {
      result = toValue / 160934;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "centimeter" && toSelect.value === "yard") {
      result = toValue / 91.44;
      toInput.value = parseFloat(result.toFixed(5));
    }

    // Meter to all Units
    if(fromSelect.value === "meter" && toSelect.value === "millimeter") {
      result = toValue * 1000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "meter" && toSelect.value === "centimeter") {
      result = toValue * 100;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "meter" && toSelect.value === "meter") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "meter" && toSelect.value === "kilometer") {
      result = toValue / 1000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "meter" && toSelect.value === "inch") {
      result = toValue * 39.37;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "meter" && toSelect.value === "foot") {
      result = toValue * 3.281;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "meter" && toSelect.value === "mile") {
      result = toValue / 1609.344;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "meter" && toSelect.value === "yard") {
      result = toValue * 1.0936;
      toInput.value = parseFloat(result.toFixed(5));
    }

    // Kilometer to all Units
    if(fromSelect.value === "kilometer" && toSelect.value === "millimeter") {
      result = toValue * 1000000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "kilometer" && toSelect.value === "centimeter") {
      result = toValue * 100000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "kilometer" && toSelect.value === "meter") {
      result = toValue * 1000;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "kilometer" && toSelect.value === "kilometer") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "kilometer" && toSelect.value === "inch") {
      result = toValue * 39370;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "kilometer" && toSelect.value === "foot") {
      result = toValue * 3280.83;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "kilometer" && toSelect.value === "mile") {
      result = toValue / 1.609344;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "kilometer" && toSelect.value === "yard") {
      result = toValue * 1093.61;
      toInput.value = parseFloat(result.toFixed(5));
    }

    // Inch to all Units
    if(fromSelect.value === "inch" && toSelect.value === "millimeter") {
      result = toValue * 25.4;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "inch" && toSelect.value === "centimeter") {
      result = toValue * 2.54;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "inch" && toSelect.value === "meter") {
      result = toValue / 39.37;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "inch" && toSelect.value === "kilometer") {
      result = toValue / 39370.07;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "inch" && toSelect.value === "inch") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "inch" && toSelect.value === "foot") {
      result = toValue / 12;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "inch" && toSelect.value === "mile") {
      result = toValue / 63360;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "inch" && toSelect.value === "yard") {
      result = toValue / 36;
      toInput.value = parseFloat(result.toFixed(5));
    }

    // Foot to all Units
    if(fromSelect.value === "foot" && toSelect.value === "millimeter") {
      result = toValue * 304.8;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "foot" && toSelect.value === "centimeter") {
      result = toValue * 30.48;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "foot" && toSelect.value === "meter") {
      result = toValue / 3.281;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "foot" && toSelect.value === "kilometer") {
      result = toValue / 3280.83;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "foot" && toSelect.value === "inch") {
      result = toValue * 12;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "foot" && toSelect.value === "foot") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "foot" && toSelect.value === "mile") {
      result = toValue / 5280;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "foot" && toSelect.value === "yard") {
      result = toValue / 3;
      toInput.value = parseFloat(result.toFixed(5));
    }

    // Mile to all Units
    if(fromSelect.value === "mile" && toSelect.value === "millimeter") {
      result = toValue * 1609344;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "mile" && toSelect.value === "centimeter") {
      result = toValue * 160934;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "mile" && toSelect.value === "meter") {
      result = toValue * 1609.344;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "mile" && toSelect.value === "kilometer") {
      result = toValue * 1609.344;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "mile" && toSelect.value === "inch") {
      result = toValue * 63360;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "mile" && toSelect.value === "foot") {
      result = toValue * 5280;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "mile" && toSelect.value === "mile") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "mile" && toSelect.value === "yard") {
      result = toValue * 1760;
      toInput.value = parseFloat(result.toFixed(5));
    }

    // Yard to all Units
    if(fromSelect.value === "yard" && toSelect.value === "millimeter") {
      result = toValue * 914.4;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "yard" && toSelect.value === "centimeter") {
      result = toValue * 91.44;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "yard" && toSelect.value === "meter") {
      result = toValue / 1.0936;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "yard" && toSelect.value === "kilometer") {
      result = toValue / 1093.61;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "yard" && toSelect.value === "inch") {
      result = toValue * 36;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "yard" && toSelect.value === "foot") {
      result = toValue * 3;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "yard" && toSelect.value === "mile") {
      result = toValue / 1760;
      toInput.value = parseFloat(result.toFixed(5));
    } else if(fromSelect.value === "yard" && toSelect.value === "yard") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(5));
    }

  }

  function convertTemperature() {

    let toValue = parseFloat(input.value);

    if(isNaN(toValue)) {
      result = "Error";
      toInput.classList.add("error");
      toInput.textContent = result;
    } else {
      toInput.classList.remove("error");
    }

    // Celsius to all Units
    if(fromSelect.value === "celsius" && toSelect.value === "celsius") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(3));
    } else if(fromSelect.value === "celsius" && toSelect.value === "kelvin") {
      result = toValue + 273.15;
      toInput.value = parseFloat(result.toFixed(3));
    } else if(fromSelect.value === "celsius" && toSelect.value === "fahrenheit") {
      result = toValue * (9/5) + 32;
      toInput.value = parseFloat(result.toFixed(3));
    }

    // Kelvin to all Units
    if(fromSelect.value === "kelvin" && toSelect.value === "celsius") {
      result = toValue - 273.15;
      toInput.value = parseFloat(result.toFixed(3));
    } else if(fromSelect.value === "kelvin" && toSelect.value === "kelvin") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(3));
    } else if(fromSelect.value === "kelvin" && toSelect.value === "fahrenheit") {
      result = (toValue - 273.15) * (9/5) + 32;
      toInput.value = parseFloat(result.toFixed(3));
    }

    // Fahrenheit to all Units
    if(fromSelect.value === "fahrenheit" && toSelect.value === "celsius") {
      result = (toValue - 32) * (5/9);
      toInput.value = parseFloat(result.toFixed(3));
    } else if(fromSelect.value === "fahrenheit" && toSelect.value === "kelvin") {
      result = (toValue - 32) * (5/9) + 273.15;
      toInput.value = parseFloat(result.toFixed(3));
    } else if(fromSelect.value === "fahrenheit" && toSelect.value === "fahrenheit") {
      result = toValue;
      toInput.value = parseFloat(result.toFixed(3));
    }

  }

  // Prevent to type Alphabets and Operator in Input...
  input.addEventListener("keypress", function(e) {

    // Allow Numbers
    if(/[0-9]/.test(e.key)) return;

    // Allow 1 period if none available
    if(e.key === "." && !this.value.includes(".")) return;

    // Prevent everything else
    e.preventDefault();

  })

  setInterval(() => {
    convertTime();
  }, 100);

  setInterval(() => {
    convertLength();
  }, 100);

  setInterval(() => {
    convertTemperature();
  }, 100);

    
})