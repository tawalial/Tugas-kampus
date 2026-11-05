const searchForm = document.querySelector("#searchForm");
const usernameInput = document.querySelector("#username");
const searchButton = document.querySelector("#searchButton");
const statusText = document.querySelector("#status");
const profile = document.querySelector("#profile");

// Mengambil dan menampilkan profil GitHub
async function searchGitHub(username) {
  statusText.textContent = "Loading data...";
  profile.hidden = true;
  searchButton.disabled = true;
  searchButton.textContent = "Mencari...";

  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}`
    );

    if (response.status === 404) {
      throw new Error("Username GitHub tidak ditemukan.");
    }

    if (!response.ok) {
      throw new Error(`Gagal mengambil data. HTTP ${response.status}`);
    }

    const data = await response.json();

    document.querySelector("#avatar").src = data.avatar_url;
    document.querySelector("#name").textContent = data.name || "Nama tidak tersedia";
    document.querySelector("#user").textContent = "@" + data.login;
    document.querySelector("#bio").textContent = data.bio || "Bio belum tersedia.";
    document.querySelector("#repos").textContent = data.public_repos;
    document.querySelector("#followers").textContent = data.followers;
    document.querySelector("#following").textContent = data.following;
    document.querySelector("#profileLink").href = data.html_url;

    profile.hidden = false;
    statusText.textContent = "Profil berhasil ditemukan!";
  } catch (error) {
    statusText.textContent = error.message || "Terjadi kesalahan jaringan.";
  } finally {
    searchButton.disabled = false;
    searchButton.textContent = "Cari Profil";
  }
}

// Menangani pengiriman form
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();

  if (!username) {
    statusText.textContent = "Masukkan username GitHub.";
    profile.hidden = true;
    return;
  }

  searchGitHub(username);
});
