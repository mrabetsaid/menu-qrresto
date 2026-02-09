const menuData = [
  {
    categorie: "Gratins",
    items: [
      { nom: "Gomora", prix: "500 / 700 DA" },
      { nom: "Medeline", prix: "500 / 700 DA" },
      { nom: "Mixte", prix: "600 / 800 DA" }
    ]
  },
  {
    categorie: "Meals",
    items: [
      { nom: "Solo", prix: "700 DA" },
      { nom: "Combo", prix: "1300 DA" },
      { nom: "Hat-Trick", prix: "1800 DA" }
    ]
  },
  {
    categorie: "Pizza (Sauce Tomate)",
    items: [
      { nom: "Margherita", prix: "450 DA" },
      { nom: "Végétarienne", prix: "550 DA" },
      { nom: "Thon", prix: "650 DA" },
      { nom: "Poulet", prix: "700 DA" },
      { nom: "Reine", prix: "700 DA" },
      { nom: "Tokyo", prix: "800 DA" },
      { nom: "Fumeuse", prix: "800 DA" },
      { nom: "Orientale", prix: "1000 DA" }
    ]
  },
  {
    categorie: "Pizza (Sauce Blanche)",
    items: [
      { nom: "Chikita", prix: "800 DA" },
      { nom: "Oslo", prix: "850 DA" },
      { nom: "Sharapova", prix: "900 DA" },
      { nom: "Blanca", prix: "900 DA" },
      { nom: "Marlyne", prix: "950 DA" },
      { nom: "Boursin", prix: "850 DA" },
      { nom: "5 Fromages", prix: "850 DA" },
      { nom: "Vegas", prix: "900 DA" },
      { nom: "Montagnarde", prix: "900 DA" }
    ]
  },
  {
    categorie: "Sandwiches",
    items: [
      { nom: "Suisse", prix: "450 DA" },
      { nom: "Mexicain", prix: "450 DA" },
      { nom: "Narcos", prix: "500 DA" },
      { nom: "Buffalo", prix: "500 DA" },
      { nom: "Dallas", prix: "600 DA" },
      { nom: "3 Fromages", prix: "650 DA" },
      { nom: "Le Divin", prix: "600 DA" },
      { nom: "Lucifer", prix: "650 DA" },
      { nom: "Miam-Miam", prix: "650 DA" }
    ]
  },
  {
    categorie: "Tacos",
    items: [
      { nom: "Chicharito", prix: "650 DA" },
      { nom: "Booba", prix: "700 DA" },
      { nom: "Double W", prix: "800 DA" },
      { nom: "22", prix: "800 DA" },
      { nom: "Naruto", prix: "700 DA" }
    ]
  },
  {
    categorie: "Burgers",
    items: [
      { nom: "Le Classic", prix: "350 DA" },
      { nom: "Professeur", prix: "450 DA" },
      { nom: "Américain", prix: "500 DA" },
      { nom: "Marseille", prix: "650 DA" },
      { nom: "Big Ben", prix: "700 DA" }
    ]
  }
];

const menuContainer = document.getElementById("menu");

menuData.forEach(section => {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h2");
  title.textContent = section.categorie;

  card.appendChild(title);

  section.items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `<span>${item.nom}</span><span>${item.prix}</span>`;
    card.appendChild(div);
  });

  menuContainer.appendChild(card);
});
