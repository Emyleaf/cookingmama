function popupHamburger(){
    Swal.fire({
        title: '<p class="swalfont">Hamburger con patatine</p>',
        html: "<img src='./img/icon.jpeg'></img><br><br><strong>Preparazione</strong><br>Riscaldare una padella per gli hamburger e una per le patate.<br><br> Nella padella per hamburger mettere un po' di sale, in quella per le patate dell'olio vergine di oliva (poco, giusto per ricoprire la padella) per quelle arrosto, altrimenti olio di semi girasole (leggermente di più rispetto a quello di oliva, le patate si devono un pelo immergere) per quelle fritte.<br><br> <strong>Per le patate:</strong> mettere le patate in pentola a fuoco lento, facendo attenzione agli eventuali schizzi dell'olio caldo con l'acqua contenuta nelle patate surgelate (l'acqua nell'olio bollente fa DANNI!)<br><br><strong>Per la carne:</strong> mettere l'hamburger in padella a fuoco basso e girarlo ogni tanto per non farlo bruciare. ",
        confirmButtonText: 'Capito!',
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popupPastapomodoro(){
    Swal.fire({
        title: '<p class="swalfont">Pasta al pomodoro</p>',
        html: "<img src='./img/icon.jpeg'></img><br><br><strong>Preparazione</strong><br>Riscaldare un pentolo d'acqua fino a ebollizione. Mettere un pugnetto di sale grosso.<br><br><strong>Per la pasta:</strong> immergere la pasta e abbassare il fuoco a lento. <br><br><strong>Per il pomodoro:</strong> mescolare il passato di pomodoro con un filo d'olio d'oliva e scaldare a fuoco lento. Girarlo spesso per non lasciarlo bruciare.",
        confirmButtonText: 'Capito!',
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}

function popupCheesecake(){
    Swal.fire({
        title: '<p class="swalfont">Cheesecake</p>',
        html: "<img src='./img/icon.jpeg'></img><br><br><strong>Preparazione</strong><ol><li>Iniziate preparando la base per il cheesecake.</li><li>Tritate finemente i biscotti secchi di vostra scelta (solitamente si usano biscotti tipo digestive o oreo).</li><li>In una ciotola, mescolate i biscotti tritati con del burro fuso fino a ottenere una consistenza simile a sabbia umida.</li><li>Pressate questa miscela di biscotti sul fondo di una teglia a cerniera precedentemente foderata con carta forno. Assicuratevi di compattarla bene.</li><li>Mettete la base in frigorifero mentre preparate il ripieno.</li></ol><strong>Per il ripieno:</strong><ol><li>In una ciotola capiente, sbattete il formaggio cremoso (tipo Philadelphia) fino a renderlo liscio e cremoso.</li><li>Aggiungete lo zucchero a velo e continuate a mescolare fino a ottenere una consistenza omogenea.</li><li>Aggiungete la vaniglia e il succo di limone e mescolate bene.</li><li>In un'altra ciotola, montate la panna fresca fino a ottenere picchi morbidi.</li><li>Incorporate delicatamente la panna montata al composto di formaggio, mescolando con movimenti delicati dal basso verso l'alto per non smontare la panna.</li><li>Versate il ripieno sulla base di biscotti nella teglia.</li><li>Livellate la superficie con una spatola e coprite la teglia con pellicola trasparente.</li><li>Mettete il cheesecake in frigorifero e lasciatelo raffreddare per almeno 4 ore o preferibilmente durante la notte.</li></ol><strong>Per la guarnizione:</strong><ol><li>Prima di servire, decorate il cheesecake con frutti di bosco freschi o sciroppo di frutta, se desiderate.</li><li>Rimuovete con attenzione il cheesecake dalla teglia a cerniera e trasferitelo su un piatto da portata.</li><li>Tagliate a fette e gustate il vostro delizioso cheesecake freddo!</li></ol>",
        confirmButtonText: 'Capito!',
        customClass: {
            content: 'swalfont', // Classe CSS personalizzata per il contenuto dell'alert
        },
    });
}