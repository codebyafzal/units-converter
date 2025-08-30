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
    
})