document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll(".unit-input");

    inputs.forEach((input) => {
        input.addEventListener("input", (event) => {
            const value = event.target.value;
            const unit = input.closest(".unit-card").dataset.unit;
            console.log(`Input changed: ${value} for unit: ${unit}`);
        });

    })
});


function convert(value, fromUnit, toUnit) {
    const valueInMeter = value * conversionTable[fromUnit];
}
