document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const statusHalaman = document.getElementById("status-halaman");
    const allCards = document.querySelectorAll(".target-section");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // 1. Hapus class 'active' dari semua menu kiri
            navLinks.forEach((item) => item.classList.remove("active"));
            // Tambahkan 'active' ke menu yang diklik
            link.classList.add("active");

            // 2. Ambil nama menu
            const menuDipilih = link.getAttribute("data-menu");

            // 3. Ubah teks di bawah nama mahasiswa (Menu Home kembali ke SI-3D)
            if (menuDipilih === "Home") {
                statusHalaman.textContent = "Kelas SI-3D";
            } else {
                statusHalaman.textContent = menuDipilih;
            }

            // 4. Hilangkan highlight warna & bayangan dari semua card di kanan terlebih dahulu
            allCards.forEach((card) => card.classList.remove("highlight-card"));

            // 5. Berikan highlight warna & bayangan pada card yang sesuai, serta auto-scroll jika Dokumen
            if (menuDipilih === "Statistik") {
                document.getElementById("section-statistik").classList.add("highlight-card");
            } else if (menuDipilih === "Kelas") {
                document.getElementById("section-kelas").classList.add("highlight-card");
            } else if (menuDipilih === "Aktifitas") {
                document.getElementById("section-aktifitas").classList.add("highlight-card");
            } else if (menuDipilih === "Dokumen") {
                const docSection = document.getElementById("section-dokumen");
                docSection.classList.add("highlight-card");
                // Scroll otomatis ke bagian dokumen di bawah
                docSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});