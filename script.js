let produkte = [
    { name: "Gaming PC RTX 4090", preis: 2999, kategorie: "PC" },
    { name: "Office PC i7", preis: 899, kategorie: "PC" },
    { name: "MacBook Pro M3", preis: 2399, kategorie: "Laptop" },
    { name: "Asus ROG Gaming Laptop", preis: 1799, kategorie: "Laptop" },
    { name: "iPhone 15 Pro Max", preis: 1299, kategorie: "Smartphone" },
    { name: "Samsung Galaxy S24 Ultra", preis: 1199, kategorie: "Smartphone" },
    { name: "Google Pixel 8 Pro", preis: 1099, kategorie: "Smartphone" },
    { name: "iPad Pro 12.9", preis: 1299, kategorie: "Tablet" },
    { name: "Samsung Galaxy Tab S9", preis: 999, kategorie: "Tablet" },
    { name: "Sony WH-1000XM5 Kopfhörer", preis: 399, kategorie: "Audio" },
    { name: "AirPods Pro 2", preis: 299, kategorie: "Audio" },
    { name: 'LG OLED 55" TV', preis: 1599, kategorie: "TV" },
    { name: 'Samsung QLED 65" TV', preis: 1899, kategorie: "TV" },
    { name: "PlayStation 5 Pro", preis: 699, kategorie: "Gaming" },
    { name: "Xbox Series X", preis: 499, kategorie: "Gaming" },
    { name: "Nintendo Switch OLED", preis: 349, kategorie: "Gaming" }
];


let sortierung = "none";

function updateListe() {
    let suchText = document.getElementById("searchInput").value.toLowerCase();
    let maxPreis = document.getElementById("preisFilter").value;
    let kategorie = document.getElementById("kategorieFilter").value;

    document.getElementById("preisLabel").innerText = maxPreis;

    let liste = produkte.filter(p =>
        p.preis <= maxPreis &&
        (kategorie === "alle" || p.kategorie === kategorie) &&
        p.name.toLowerCase().includes(suchText)
    );

    if (sortierung === "asc") liste.sort((a, b) => a.preis - b.preis);
    if (sortierung === "desc") liste.sort((a, b) => b.preis - a.preis);

    let html = "";
    liste.forEach(p => {
        let highlight = p.name.toLowerCase().includes(suchText) ? "highlight" : "";
        html += `
            <div class="card ${highlight}">
                <h3>${p.name}</h3>
                <p>Preis: ${p.preis}€</p>
                <p>Kategorie: ${p.kategorie}</p>
            </div>
        `;
    });

    document.getElementById("produktListe").innerHTML = html;
}

function sortPreisAsc() {
    sortierung = "asc";
    updateListe();
}

function sortPreisDesc() {
    sortierung = "desc";
    updateListe();
}

updateListe();
