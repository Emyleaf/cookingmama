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