
const searchInput = document.getElementById("searchInput");
const paperCards = document.querySelectorAll(".paper-card");
const noResults = document.getElementById("noResults");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase().trim();
  let count = 0;

  paperCards.forEach(function (card) {
    const text = (
      card.dataset.search + " " + card.innerText
    ).toLowerCase();

    const match = text.includes(query);
    card.hidden = !match;

    if (match) count++;
  });

  noResults.hidden = count > 0;
});
