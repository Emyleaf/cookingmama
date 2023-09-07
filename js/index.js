
    // Lista delle immagini disponibili nella cartella "img"
    const images = [
        "laugh.png",
        "laugh.png",
        "smile.png",
        "surprised.png",
        "surprised.png"
    ];

    const phrases = [
        "Quella potrebbe essere Ibiza 👉",
        "SEBASTIANOOO 🤙",
        "Questa non è IBIZA 🗣🗣🗣‼‼‼",
        "Tutto azzurrino 💙",
        "Molla subito",
        "Sono stato violento?",
        "Abbassa quel braccio destro",
        "Daaaeeeeebyyyyy",
        "Per favore non piangereeeee",
        "Non ci rimanere maaaaleeee",
        "Seee teleefonaaandooo ioooo",
        "A volte sono le voci che parlano",
        "SONO SOTTO LA PIOGGIAAAA",
        "Destinazione maaaaareee 🌊"
    ];

    // Funzione per ottenere un numero casuale tra 0 e il numero di immagini disponibili
    function getRandomIndex() {
        return Math.floor(Math.random() * images.length);
    }

    // Funzione per cambiare l'immagine random
    function changeRandomImage() {
        const randomImageElement = document.getElementById('random-image');
        const randomIndex = getRandomIndex();

        // Ottieni il nome dell'immagine corrispondente al numero casuale
        const randomImageName = images[randomIndex];

        // Costruisci l'URL completo dell'immagine
        const imageUrl = `./img/${randomImageName}`;

        // Aggiorna l'attributo src dell'elemento immagine
        randomImageElement.src = imageUrl;
    }

    function changeRandomPhrase() {
        const randomImageElement = document.getElementById('random-quote');
        const randomIndex = Math.floor(Math.random() * phrases.length);

        const randomPhrase = phrases[randomIndex];

        randomImageElement.innerText = randomPhrase;
        
    }

    document.addEventListener("DOMContentLoaded", changeRandomImage);
    document.addEventListener("DOMContentLoaded", changeRandomPhrase);