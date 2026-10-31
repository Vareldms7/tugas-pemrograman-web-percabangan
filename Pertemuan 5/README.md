# Tugas Pemrograman Web - Percabangan & Perulangan

Program web sederhana yang memperlihatkan penggunaan **percabangan** (`if - else if - else`) dan **perulangan** (`for` dan `while`) dengan HTML, CSS, dan JavaScript.

|                 |                               |
|-----------------|-------------------------------|
| **Nama**        | Varell Dimas Distyan          |
| **NIM**         | 25533982                      |
| **Kelas**       | D3                            |
| **Mata Kuliah** | Pemrograman Web               |

## Struktur File

```
.
├── index.html   # struktur halaman
├── style.css    # tampilan
├── script.js    # logika program (percabangan & perulangan)
└── README.md    # dokumentasi
```

## Cara Menjalankan

1. Download atau clone repo ini.
2. Buka file `index.html` di browser (klik dua kali). Tidak perlu install apa pun.

## Fitur dan Penjelasan

### 1. Cek Grade Nilai (Percabangan)

Pengguna memasukkan nilai, lalu program menentukan grade memakai rantai `if - else if - else`. Ada **7 kondisi**:

| No | Kondisi | Hasil |
|----|---------|-------|
| 1 | Input kosong / bukan angka | Pesan error |
| 2 | Nilai < 0 atau > 100 | Pesan error |
| 3 | Nilai >= 85 | Grade A |
| 4 | Nilai >= 70 | Grade B |
| 5 | Nilai >= 60 | Grade C |
| 6 | Nilai >= 50 | Grade D |
| 7 | Selain itu (0 - 49) | Grade E |

Urutan kondisi penting: JavaScript mengecek dari atas ke bawah dan berhenti di kondisi pertama yang benar. Karena itu nilai 90 langsung masuk Grade A dan tidak lagi dicek ke kondisi di bawahnya.

### 2. Tabel Perkalian (Perulangan `for`)

Pengguna memasukkan sebuah angka (1 - 100), lalu program menampilkan perkaliannya dari 1 sampai 10.

```js
for (let i = 1; i <= 10; i++) {
}
```

- `let i = 1` : nilai awal
- `i <= 10` : syarat agar perulangan tetap berjalan
- `i++` : `i` bertambah 1 setiap putaran

`for` dipakai di sini karena jumlah putarannya sudah jelas (10 kali).

### 3. Jumlah Deret Bilangan (Perulangan `while`)

Pengguna memasukkan batas (1 - 1000). Program menjumlahkan bilangan 1 sampai batas tersebut dan menghitung berapa banyak bilangan genap dan ganjil.

```js
while (i <= batas) {
  total += i;
  if (i % 2 === 0) { jumlahGenap++; } else { jumlahGanjil++; }
  i++;
}
```

- `while` terus berulang selama syaratnya `i <= batas` masih benar.
- `i % 2 === 0` artinya sisa bagi 2 sama dengan 0, yaitu bilangan genap.
- `i++` di akhir wajib ada. Tanpa itu `i` tidak pernah berubah dan perulangan tidak akan berhenti.

Contoh: batas = 10 menghasilkan jumlah 55, genap 5, ganjil 5.

## Teknologi

- HTML5
- CSS3
- JavaScript (tanpa library)
