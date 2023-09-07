const randomPhrases = [
    "Benvenuta su Learn with Mama!",
    "A volte sono le voci che parlano",
    "Divertiti cucinando!",
    "Quella potrebbe essere Ibiza 👉",
    "SEBASTIANOO 🤙",
    "Daaaeeeeebyyyyy",
    "Non dare da bere all'olio bollente!",
    "Per favore non piangereeee",
    "Seee teleefonaaandooo ioooo",
    "Riscalda sempre prima la padella!",
    "Rimuovi i residui il prima possibile!",
    "SONO SOTTO LA PIOGGIAAAA",
    "(nintendo non farmi il culo)"
];

// Funzione per ottenere una frase casuale dall'array
function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * randomPhrases.length);
    return randomPhrases[randomIndex];
}

let currentImage = 1; // Inizia con la prima immagine

// Funzione per mostrare il balloon con una frase casuale
function showRandomBalloon() {
    const balloon = document.getElementById('balloon');
    let hellomamaImage;
    if(currentImage == 1){
        hellomamaImage = document.getElementById('hellomama-image');
    } else {
        hellomamaImage = document.getElementById('hellomama-image2');
    }
    
    // Ottieni una frase casuale
    const randomPhrase = getRandomPhrase();
    
    // Imposta il testo del balloon
    balloon.textContent = randomPhrase;
    
    // Calcola la larghezza massima consentita per il balloon
    const maxBalloonWidth = 0.8 * hellomamaImage.offsetWidth; // Ad esempio, limitato all'80% della larghezza dell'immagine
    
    // Limita la larghezza del balloon
    balloon.style.maxWidth = maxBalloonWidth + 'px';
    
    // Posiziona il balloon sopra l'immagine "hellomama.png"
    balloon.style.top = `${hellomamaImage.offsetTop - balloon.offsetHeight - 150}px`;
    balloon.style.left = `1em`;
    
    // Mostra il balloon
    balloon.style.display = 'block';
    
    // Nascondi il balloon dopo qualche secondo (ad esempio, 5 secondi)
    setTimeout(() => {
        balloon.style.display = 'none';
    }, 2000);
}

// Chiama la funzione per mostrare il balloon ogni tot secondi (ad esempio, ogni 10 secondi)
setInterval(showRandomBalloon, 5000);

// Funzione per alternare tra le immagini
function toggleImages() {
    const image1 = document.getElementById('hellomama-image');
    const image2 = document.getElementById('hellomama-image2');
    2
    if (currentImage === 1) {
        image1.style.display = 'none';
        image2.style.display = 'block';
        currentImage = 2;
    } else {
        image1.style.display = 'block';
        image2.style.display = 'none';
        currentImage = 1;
    }
}

// Chiama la funzione per alternare le immagini ogni tot secondi (ad esempio, ogni 5 secondi)
setInterval(toggleImages, 400);
