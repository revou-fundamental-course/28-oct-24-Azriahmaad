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
    let penjelasanStatus = "";

    // Tentukan status berdasarkan nilai BMI
    if (bmi < 18.5) {
        status = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal (ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Kelebihan berat badan";
    } else {
        status = "Kegemukan (Obesitas)";
        penjelasanStatus = " Hasil BMI diantara 23 dan 25
Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka 
    Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    }

    // Tampilkan hasil
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h4>Hasil BMI</h4>
        <p>BMI Anda: ${bmi.toFixed(1)}</p>
        <p>Status Berat Badan: ${status}</p>
    `;
    resultDiv.style.display = 'block';

    const penjelasanDiv = document.getElementById('penjelasan');
    penjelasanDiv.innerHTML = `
        <h4>Hasil BMI</h4>
        <p>BMI Anda: ${penjelasanStatus}</p>
    `;
    penjelasanDiv.style.display = 'block';
}
