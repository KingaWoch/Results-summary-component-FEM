let summary = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

const summaryContainer = document.querySelector(".summary-container");

summary.forEach((key, i) => {
  summaryContainer.innerHTML += `
    <li class="summary-item-${i}">
        <div class="left">
            <img src="${key.icon}" alt="${key.category}"/>
            <h4 class="${key.category}">${key.category}</h4>
        </div>
        <div class="right">
            <span class="summary-score">${key.score}</span>
            <span class="summary-max-score">/ 100</span>
        </div>
    </li>
    `;
});
