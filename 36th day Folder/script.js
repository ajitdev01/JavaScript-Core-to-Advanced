function convert() {
    const value = parseFloat(document.getElementById("values").value);
    const fromInput = document.getElementById("fromUnit").value;
    const toInput = document.getElementById("toUnit").value;
    const resultEl = document.getElementById("result");

    if (isNaN(value)) {
        resultEl.innerText = "⚠️ Please enter a valid number.";
        return;
    }

    const factors = {
        Gram: 1,
        Kilogram: 1000,
        Centimeter: 0.01,
        Meter: 1,
        Kilometer: 1000,
        Mililitre: 1,
        Litre: 1000
    };

    // normalize “Killogram” / “Killometer” spelling from HTML
    const normalize = (unit) => {
        return unit
            .replace("Killogram", "Kilogram")
            .replace("Killometer", "Kilometer");
    };

    const from = normalize(fromInput);
    const to = normalize(toInput);

    let result;

    // Check valid conversions
    if (
        (["Gram", "Kilogram"].includes(from) && ["Gram", "Kilogram"].includes(to)) ||
        (["Centimeter", "Meter", "Kilometer"].includes(from) && ["Centimeter", "Meter", "Kilometer"].includes(to)) ||
        (["Litre", "Mililitre"].includes(from) && ["Litre", "Mililitre"].includes(to))
    ) {
        result = (value * factors[from]) / factors[to];
        resultEl.innerText = `${value} ${from} = ${result} ${to}`;
    } else {
        resultEl.innerText = "❌ Invalid conversion! Please select compatible units.";
    }
}
