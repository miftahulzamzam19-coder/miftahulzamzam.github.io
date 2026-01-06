let no = 1;

document.getElementById("absenForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nim = document.getElementById("nim").value;
  const nama = document.getElementById("nama").value;
  const status = document.getElementById("status").value;
  const tanggal = new Date().toLocaleDateString();

  const tabel = document.getElementById("tabelAbsensi");
  const row = tabel.insertRow();

  row.innerHTML = `
    <td>${no++}</td>
    <td>${nim}</td>
    <td>${nama}</td>
    <td>${status}</td>
    <td>${tanggal}</td>
  `;

  document.getElementById("absenForm").reset();
});
