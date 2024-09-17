includendo l'informazione sulla struttura delle cartelle:

-------------------- HTML --------------------

/* File: index.html Descrizione: Questo file HTML definisce la struttura della pagina per una semplice calcolatrice. Include un header, un main con un modulo per le operazioni matematiche e un footer con attribuzioni.

Dettagli:

    Header:
        Contiene il titolo della calcolatrice e un logo.
        Elementi:
            <h1>: Titolo della calcolatrice.
            <img>: Logo dell'applicazione con ID "logo".

    Main:
        Contiene un modulo (<form>) con vari input e controlli per le operazioni matematiche.
        Elementi:
            Primo Addendo:
                <label>: Etichetta per il primo addendo.
                <div class="primo-input-cont">: Contenitore per l'input e l'icona.
                <input type="number">: Campo di input per il primo numero.
            Operazioni:
                <fieldset>: Raggruppa i controlli radio per le operazioni matematiche.
                <input type="radio">: Pulsanti per selezionare l'operazione (Addizione, Sottrazione, Moltiplicazione, Divisione).
                <label>: Etichette per i pulsanti di operazione.
            Secondo Addendo:
                <label>: Etichetta per il secondo addendo con un messaggio di errore.
                <input type="number">: Campo di input per il secondo numero.
            Output:
                <div id="output">: Contenitore per mostrare il risultato.
                <p id="total-person">: Testo che mostra il risultato dell'operazione.
                <p id="totalSum">: Valore del risultato, inizialmente impostato a "0.00".
                <input type="reset">: Pulsante per resettare i campi di input e il risultato.
                <label>: Etichetta per il pulsante di reset, nascosta visivamente.

    Footer:
        Contiene le attribuzioni per l'esercizio e il creatore.
        Elementi:
            <div class="attribution">: Contenitore per le attribuzioni.
            <a href="...">: Link al sito del professore e al profilo Twitter dell'autore.

Note:

    Assicurati che i percorsi delle immagini e dei file di script siano corretti.
    I file di immagini devono essere collocati nella cartella foto.
    I file JavaScript devono essere collocati nella cartella Script.
    Il file script_1.js è incluso alla fine del body per garantire che il DOM sia completamente caricato prima di eseguire il codice JavaScript. */

================================================================================

-------------------- CSS --------------------

/* File: stile.css Descrizione: Questo file CSS definisce lo stile per la calcolatrice. Gestisce l'aspetto generale della pagina, i layout e la formattazione.

Dettagli:

    Body:
        Imposta il background dell'immagine e altri stili globali.
        Proprietà:
            background: Immagine di sfondo con copertura totale e centratura.
            font-family: Font monospace per il testo.
            font-size: Dimensione del testo.
            display, flex-wrap, flex-direction, align-items, justify-content, align-content: Gestione del layout e allineamento.
            min-height: Altezza minima per garantire che il contenuto occupi l'intera altezza della finestra.
            margin, padding: Rimozione dei margini e padding predefiniti. */

================================================================================

-------------------- JavaScript --------------------

/* File: script_1.js Descrizione: Questo file JavaScript gestisce le operazioni della calcolatrice e la funzionalità di reset. Include la gestione degli eventi per i pulsanti e l'aggiornamento del risultato.

Dettagli:

    Avviso Iniziale:
        Mostra un avviso all'utente per ingrandire la pagina.

    Funzione eseguiOperazione(operazione):
        Gestisce le operazioni matematiche in base al parametro operazione.
        Controlla la validità dei numeri inseriti e mostra il risultato.

    Collegamento dei Pulsanti:
        Aggiunge gli eventi di click ai pulsanti delle operazioni per eseguire le operazioni matematiche.

    Funzione di Reset:
        Resetta i campi di input e il risultato quando il pulsante di reset è cliccato.

Note:

    Assicurati che i file di immagini siano collocati nella cartella foto.
    Assicurati che i file JavaScript siano collocati nella cartella Script. */