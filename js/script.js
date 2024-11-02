function calculateBMI() {
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    // Validasi input
    if (!gender || isNaN(weight) || isNaN(age) || isNaN(height)) {
        alert("Mohon isi semua data dengan benar.");
        return;
    }

    // Hitung BMI
    const bmi = weight / (height * height);
    let status = "";

    // Tentukan status berdasarkan nilai BMI
    if (bmi < 18.5) {
        status = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal (ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Kelebihan berat badan";
    } else {
        status = "Kegemukan (Obesitas)";
    }

    // Tampilkan hasil
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h4>Hasil BMI</h4>
        <p>BMI Anda: ${bmi.toFixed(1)}</p>
        <p>Status Berat Badan: ${status}</p>
    `;
    resultDiv.style.display = 'block';
}
