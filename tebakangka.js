// Menampilkan instruksi permainan
alert("🎯 Tebak angka dari 1-10!\nKamu memiliki 3 kesempatan.");

// Komputer memilih angka secara acak dari 1 hingga 10
var comp = Math.floor(Math.random() * 10) + 1;
var kesempatan = 3; // Jumlah kesempatan pemain

// Loop untuk memberi kesempatan sebanyak 3 kali
while (kesempatan > 0) {
    // Meminta pemain memasukkan angka tebakan
    var player = parseInt(prompt(`Masukkan angka tebakanmu (1-10)\nKesempatan tersisa: ${kesempatan}`));

    // Cek apakah input valid (harus angka 1-10)
    if (isNaN(player) || player < 1 || player > 10) {
        alert("⚠️ Masukkan angka antara 1-10!");
        continue; // Ulangi loop jika input tidak valid
    }

    // Periksa apakah tebakan benar
    if (player === comp) {
        alert("🎉 Selamat! Kamu menang!");
        break; // Keluar dari loop karena tebakan benar
    } else if (player > comp) {
        alert("📉 Angka terlalu besar!");
    } else {
        alert("📈 Angka terlalu kecil!");
    }

    kesempatan--; // Kurangi jumlah kesempatan

    // Jika kesempatan habis, tampilkan angka yang benar
    if (kesempatan === 0) {
        alert(`😢 Kamu kalah! Angka yang benar adalah ${comp}.`);
    }
}

alert("Terima kasih telah bermain!");