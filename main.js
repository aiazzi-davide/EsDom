const pizzeria = {
    pizzeria: "Otello",
    indirizzo: "Via tal dei Tali, 1 - Firenze",
    recensioni: [
      { nome: "Mario", descrizione: "Pizza buonissima"},
      { nome: "Sara", descrizione: "Pizza ottima ma tempi di attesa troppo lunghi"},
      { nome: "Mario", descrizione: "Non fanno pizza senza glutine "}
    ]
  };
  
  const nomePizzeria = document.getElementById("nomePizzeria");
  const indirizzoPizzeria = document.getElementById("indirizzoPizzeria");
  const bottoneRecensioni = document.getElementById("bottoneRecensioni");
  const recensioni = document.getElementById("recensioni");
  
  nomePizzeria.textContent = pizzeria.pizzeria;
  indirizzoPizzeria.textContent = pizzeria.indirizzo;
  
  bottoneRecensioni.addEventListener("click", function() {
    if (recensioni.style.display === "none") {
      recensioni.style.display = "block";
      bottoneRecensioni.textContent = "Nascondi recensioni";
      for (let i = 0; i < pizzeria.recensioni.length; i++) {
        const recensione = document.createElement("p");
        recensione.textContent = pizzeria.recensioni[i].nome + ": " + pizzeria.recensioni[i].descrizione;
        recensioni.appendChild(recensione);
      }
    } else {
      recensioni.style.display = "none";
      bottoneRecensioni.textContent = "Mostra recensioni";
      recensioni.innerHTML = "";
    }
  });
  