document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const harga = 2500;

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;
    const kategori = document.getElementById("kategori").value;
    const slot = document.getElementById("slot").value;

    const jumlah = harga * slot;

    document.getElementById("confirmation").innerHTML = `
        <div class="card">
            <h2>Pengesahan Pendaftaran</h2>
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>E-mel:</strong> ${email}</p>
            <p><strong>No Telefon:</strong> ${telefon}</p>
            <p><strong>Kategori:</strong> ${kategori}</p>
            <p><strong>Bilangan Slot:</strong> ${slot}</p>
            <p><strong>Jumlah Bayaran:</strong> RM ${jumlah}</p>
        </div>
    `;
});