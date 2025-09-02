  const FAVORITES_KEY = "favoritos";

  function getFavorites() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  }

  function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }

  function toggleFavorite(btn) {
    const id = btn.dataset.id;
    let favorites = getFavorites();

    if (favorites.includes(id)) {
      favorites = favorites.filter(fav => fav !== id);
      btn.textContent = "🤍";
    } else {
      favorites.push(id);
      btn.textContent = "❤️";
    }

    saveFavorites(favorites);
  }

  function loadFavoritesOnStart() {
    const favorites = getFavorites();
    document.querySelectorAll(".favorite").forEach(btn => {
      const id = btn.dataset.id;
      if (favorites.includes(id)) {
        btn.textContent = "❤️";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", loadFavoritesOnStart);

