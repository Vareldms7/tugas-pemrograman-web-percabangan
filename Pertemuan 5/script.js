function cekGrade() {
  const input = document.getElementById("nilai").value;
  const hasil = document.getElementById("hasilGrade");
  const nilai = parseFloat(input);

  let pesan;
  let kelas;

  if (input === "" || isNaN(nilai)) {
    pesan = "Nilai belum diisi atau bukan angka.";
    kelas = "gagal";
  } else if (nilai < 0 || nilai > 100) {
    pesan = "Nilai harus berada di antara 0 sampai 100.";
    kelas = "gagal";
  } else if (nilai >= 85) {
    pesan = "Grade A - Sangat Baik";
    kelas = "sukses";
  } else if (nilai >= 70) {
    pesan = "Grade B - Baik";
    kelas = "bagus";
  } else if (nilai >= 60) {
    pesan = "Grade C - Cukup";
    kelas = "cukup";
  } else if (nilai >= 50) {
    pesan = "Grade D - Kurang";
    kelas = "cukup";
  } else {
    pesan = "Grade E - Tidak Lulus";
    kelas = "gagal";
  }

  hasil.className = "hasil " + kelas;
  hasil.textContent = pesan;
}

function tampilkanTabel() {
  const input = document.getElementById("angka").value;
  const hasil = document.getElementById("hasilTabel");
  const angka = parseInt(input, 10);

  hasil.className = "hasil";
  hasil.textContent = "";

  if (isNaN(angka) || angka < 1 || angka > 100) {
    hasil.classList.add("gagal");
    hasil.textContent = "Masukkan angka bulat antara 1 sampai 100.";
    return;
  }

  const daftar = document.createElement("ul");

  for (let i = 1; i <= 10; i++) {
    const baris = document.createElement("li");
    baris.textContent = angka + " x " + i + " = " + (angka * i);
    daftar.appendChild(baris);
  }

  hasil.appendChild(daftar);
}

function hitungDeret() {
  const input = document.getElementById("batas").value;
  const hasil = document.getElementById("hasilDeret");
  const batas = parseInt(input, 10);

  hasil.className = "hasil";
  hasil.textContent = "";

  if (isNaN(batas) || batas < 1 || batas > 1000) {
    hasil.classList.add("gagal");
    hasil.textContent = "Masukkan angka bulat antara 1 sampai 1000.";
    return;
  }

  let i = 1;
  let total = 0;
  let jumlahGenap = 0;
  let jumlahGanjil = 0;

  while (i <= batas) {
    total += i;

    if (i % 2 === 0) {
      jumlahGenap++;
    } else {
      jumlahGanjil++;
    }

    i++;
  }

  hasil.classList.add("sukses");
  hasil.textContent =
    "Jumlah 1 sampai " + batas + " = " + total +
    " | Bilangan genap: " + jumlahGenap +
    " | Bilangan ganjil: " + jumlahGanjil;
}

document.getElementById("btnGrade").addEventListener("click", cekGrade);
document.getElementById("btnTabel").addEventListener("click", tampilkanTabel);
document.getElementById("btnDeret").addEventListener("click", hitungDeret);
