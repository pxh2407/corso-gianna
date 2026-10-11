/* =========================================================
   TESTI DELLA DISPENSA — si modifica SOLO questo file.
   Argomenti presi dal PDF "Lezioni LAMANCUSA GIANNA".

   Come si scrive il testo di un argomento:
     ## Titoletto           → sottotitolo
     - voce                 → elenco puntato
     1. voce                → elenco numerato
     | a | b | c |          → tabella (la prima riga è l'intestazione)
     > testo                → riquadro "Da ricordare"
     riga vuota             → nuovo paragrafo
     **parola**             → grassetto
   ========================================================= */

const CORSO = {
  titolo: "Addetto amministrativo segretariale",
  docente: "Lamancusa Gianna",
  calendario: [
    ["Lunedì", "16/11/2026", "mattina", "9:00 – 12:00"],
    ["Martedì", "17/11/2026", "mattina", "9:00 – 12:00"],
    ["Mercoledì", "18/11/2026", "pomeriggio", "15:00 – 18:00"],
    ["Lunedì", "23/11/2026", "mattina", "9:00 – 12:00"],
    ["Martedì", "24/11/2026", "mattina", "9:00 – 12:00"],
    ["Mercoledì", "25/11/2026", "pomeriggio", "15:00 – 18:00"]
  ],
  moduli: [
  /* ======================= MODULO 1 ======================= */
  {
    n: 1,
    titolo: "Elementi di tecnica commerciale",
    colore: "#1f4f4a",
    argomenti: [
    {
      titolo: "Introduzione alla tecnica commerciale",
      sintesi: "Concetto di commercio e attività commerciale · Imprese commerciali e loro funzioni · Mercato, domanda e offerta.",
      testo: `
## Concetto di commercio e attività commerciale
Il **commercio** è l'attività di scambio di beni e servizi tra chi li produce o li possiede e chi ne ha bisogno, in cambio di un prezzo. Il commercio mette in contatto la **produzione** con il **consumo**: il produttore non deve cercare da solo ogni cliente e il consumatore trova ciò che gli serve vicino a sé.

La **tecnica commerciale** studia come si svolgono concretamente queste attività: come si compra e si vende, quali documenti si usano, come si calcolano i prezzi, come si incassa e si paga.

Si distingue tra:
- **commercio all'ingrosso**: si acquista in grandi quantità dai produttori e si rivende ad altri commercianti;
- **commercio al dettaglio**: si vende in piccole quantità al consumatore finale;
- **commercio interno** (in Italia), **intracomunitario** (con i Paesi dell'Unione Europea) e **con l'estero** (importazione ed esportazione).

## Imprese commerciali e loro funzioni
L'**impresa commerciale** acquista beni per rivenderli, di solito senza trasformarli. Le sue funzioni principali sono:
- **acquisto**: scegliere i fornitori e comprare la merce alle condizioni migliori;
- **magazzino**: conservare la merce e controllarne le scorte;
- **vendita**: trovare i clienti e concludere gli affari;
- **amministrazione**: documenti, fatture, incassi, pagamenti, contabilità;
- **finanza**: procurare il denaro necessario e gestire i rapporti con le banche;
- **marketing**: studiare il mercato e far conoscere i prodotti.

## Mercato, domanda e offerta
Il **mercato** è l'insieme degli incontri tra chi vuole vendere e chi vuole comprare un certo bene, in un luogo fisico (un negozio, una fiera) o virtuale (un sito internet).
- La **domanda** è la quantità di un bene che i consumatori sono disposti ad acquistare a un certo prezzo.
- L'**offerta** è la quantità di un bene che i venditori sono disposti a vendere a un certo prezzo.

| Situazione | Effetto sul prezzo |
| La domanda aumenta, l'offerta resta uguale | Il prezzo tende a **salire** |
| La domanda diminuisce | Il prezzo tende a **scendere** |
| L'offerta aumenta (molta merce disponibile) | Il prezzo tende a **scendere** |
| L'offerta diminuisce (merce scarsa) | Il prezzo tende a **salire** |

> Il prezzo di mercato nasce dall'incontro tra domanda e offerta.
`
    },
    {
      titolo: "La compravendita",
      sintesi: "Fasi della compravendita · Contratto di vendita · Obblighi del venditore e dell'acquirente.",
      testo: `
## Fasi della compravendita
1. **Richiesta di informazioni o di preventivo**: il cliente chiede prezzi e condizioni.
2. **Offerta**: il venditore propone prezzi, tempi e condizioni.
3. **Trattativa**: le parti discutono prezzo, sconti, consegna, pagamento.
4. **Ordine**: il compratore conferma per iscritto ciò che vuole acquistare.
5. **Conferma d'ordine**: il venditore accetta; il contratto è concluso.
6. **Consegna**: la merce viene spedita, accompagnata dal documento di trasporto.
7. **Fatturazione**: il venditore emette la fattura.
8. **Pagamento**: il compratore paga secondo le condizioni pattuite.

## Contratto di vendita
Secondo il Codice civile (art. 1470) la **vendita** è il contratto con cui il venditore trasferisce la proprietà di una cosa al compratore in cambio di un **prezzo**.

Gli elementi principali da concordare sono:
- **oggetto**: quale merce, in che quantità e qualità;
- **prezzo** ed eventuali sconti;
- **consegna**: luogo, tempi, chi paga il trasporto;
- **imballaggio**;
- **pagamento**: modalità e scadenza.

Le **clausole di consegna** indicano chi sostiene le spese e i rischi del trasporto:
- **franco magazzino venditore** (franco partenza): il trasporto è a carico del compratore;
- **franco destino** (franco magazzino compratore): il trasporto è a carico del venditore.

Negli scambi internazionali si usano le regole **Incoterms** (ad esempio EXW, DDP).

## Obblighi del venditore e dell'acquirente
| Venditore | Acquirente |
| Consegnare la merce concordata, nei tempi e nel luogo stabiliti | Pagare il prezzo alle condizioni pattuite |
| Garantire che la merce sia senza vizi (difetti) | Ricevere la merce |
| Garantire di esserne il legittimo proprietario | Controllare la merce e segnalare subito eventuali difetti |
| Emettere i documenti (DDT, fattura) | Rispettare le scadenze di pagamento |

Tra imprese, i difetti della merce vanno **denunciati entro 8 giorni** dalla scoperta (art. 1495 c.c.). Quando l'acquirente è un **consumatore**, il Codice del consumo prevede una garanzia legale di **2 anni**.

> Il contratto di vendita può essere concluso anche a voce, ma in azienda conviene sempre la **forma scritta**: ordine e conferma d'ordine.
`
    },
    {
      titolo: "I documenti commerciali",
      sintesi: "Preventivo e offerta commerciale · Ordine e conferma d'ordine · Documento di trasporto (DDT) · Fattura e nota di credito.",
      testo: `
## Preventivo e offerta commerciale
L'**offerta** (o preventivo) è il documento con cui il venditore propone al cliente le proprie condizioni. Contiene:
- dati del venditore e del cliente;
- numero e data;
- descrizione, quantità e prezzo unitario dei beni o servizi;
- eventuali sconti e IVA;
- tempi e modalità di consegna;
- condizioni di pagamento;
- **validità** dell'offerta (ad esempio «valida 30 giorni»).

## Ordine e conferma d'ordine
L'**ordine** è il documento con cui il compratore chiede la merce. Riporta: riferimento all'offerta, descrizione e quantità, prezzo, luogo e data di consegna, modalità di pagamento, firma.

La **conferma d'ordine** è la risposta del venditore che accetta l'ordine. Con la conferma il **contratto è concluso** e diventa vincolante per entrambe le parti.

## Documento di trasporto (DDT)
Il **DDT** accompagna la merce durante il trasporto. Contiene:
- numero progressivo e data;
- dati del mittente e del destinatario;
- descrizione e quantità dei beni;
- **causale** del trasporto (vendita, reso, conto riparazione, conto visione);
- vettore (chi trasporta), data di inizio trasporto;
- firme di chi consegna e di chi riceve.

Il DDT permette al venditore di emettere una **fattura differita**, che riunisce tutte le consegne di un mese, entro il giorno 15 del mese successivo.

## Fattura e nota di credito
La **fattura** è il documento fiscale con cui il venditore chiede il pagamento e certifica l'operazione ai fini dell'IVA.

La **nota di credito** è un documento che **riduce** l'importo di una fattura già emessa, ad esempio per:
- reso di merce difettosa;
- sconto concesso dopo la fatturazione;
- errore nell'importo.

La nota di credito richiama sempre il numero e la data della fattura a cui si riferisce. Anch'essa è elettronica e passa dal Sistema di Interscambio.

| Documento | Chi lo emette | A che cosa serve |
| Preventivo / offerta | Venditore | Proporre condizioni |
| Ordine | Compratore | Chiedere la merce |
| Conferma d'ordine | Venditore | Concludere il contratto |
| DDT | Venditore | Accompagnare la merce |
| Fattura | Venditore | Chiedere il pagamento |
| Nota di credito | Venditore | Ridurre una fattura |
`
    },
    {
      titolo: "La determinazione del prezzo",
      sintesi: "Prezzo di acquisto e prezzo di vendita · Costi, ricavi e margine commerciale · Ricarico e sconti commerciali.",
      testo: `
## Prezzo di acquisto e prezzo di vendita
- Il **prezzo di acquisto** è quanto l'impresa paga al fornitore per la merce.
- Il **costo di acquisto** comprende anche le spese accessorie: trasporto, imballaggio, assicurazione.
- Il **prezzo di vendita** è quanto l'impresa chiede al cliente: deve coprire tutti i costi e lasciare un guadagno.

## Costi, ricavi e margine commerciale
- **Costi**: tutto ciò che l'impresa spende (merce, affitto, stipendi, bollette, trasporti).
- **Ricavi**: ciò che l'impresa incassa dalle vendite.
- **Margine commerciale** (o utile lordo): la differenza tra prezzo di vendita e costo di acquisto della merce.

> Margine = Prezzo di vendita − Costo di acquisto

Il margine si può esprimere anche in percentuale **sul prezzo di vendita**:

> Margine % = Margine ÷ Prezzo di vendita × 100

## Ricarico
Il **ricarico** (o mark-up) è la percentuale che si aggiunge al costo per ottenere il prezzo di vendita. Si calcola **sul costo**.

> Prezzo di vendita = Costo + (Costo × Ricarico %)

Esempio: costo 80 €, ricarico 25% → 80 + 20 = **100 €**.

| | Valore |
| Costo di acquisto | 80,00 € |
| Ricarico 25% (sul costo) | 20,00 € |
| Prezzo di vendita | 100,00 € |
| Margine in euro | 20,00 € |
| Margine % sul prezzo di vendita | 20% |

Attenzione: lo stesso guadagno di 20 € è il **25% del costo** ma il **20% del prezzo di vendita**. Ricarico e margine non sono la stessa cosa.

## Sconti commerciali
- **Sconto incondizionato**: concesso sempre, ad esempio a un cliente abituale.
- **Sconto condizionato**: concesso solo a certe condizioni, ad esempio per pagamento immediato («sconto cassa») o per grandi quantità.
- **Sconti in catena**: più sconti applicati uno dopo l'altro. Esempio: 10% + 5% su 100 € → 100 − 10 = 90; 90 − 4,50 = **85,50 €**. Non è uno sconto del 15%, ma del 14,5%.

> Lo sconto si calcola: Importo × Sconto % ÷ 100. Il prezzo scontato: Importo − Sconto.
`
    },
    {
      titolo: "L'IVA e la fatturazione",
      sintesi: "Concetto di IVA · Imponibile e totale fattura · Calcolo dell'IVA · Elementi principali della fattura elettronica.",
      testo: `
## Concetto di IVA
L'**IVA** (Imposta sul Valore Aggiunto) è un'imposta che si applica sulla vendita di beni e sulle prestazioni di servizi. È pagata, alla fine, dal **consumatore finale**: le imprese la incassano dai clienti e la versano allo Stato, dopo aver detratto l'IVA pagata sui propri acquisti.

Le principali **aliquote** in Italia sono:
| Aliquota | Si applica, ad esempio, a |
| **22%** (ordinaria) | La maggior parte dei beni e servizi |
| **10%** | Alcuni alimenti, servizi turistici, alcuni lavori edilizi |
| **5%** | Alcuni beni e servizi particolari |
| **4%** | Beni di prima necessità (pane, latte, libri) |

Alcune operazioni sono **esenti** o **non imponibili**: in fattura si indica la norma di riferimento.

## Imponibile e totale fattura
- **Imponibile**: il valore della merce o del servizio, al netto di sconti, su cui si calcola l'IVA.
- **IVA**: l'imposta calcolata sull'imponibile.
- **Totale fattura**: imponibile + IVA.

## Calcolo dell'IVA
> IVA = Imponibile × Aliquota ÷ 100

Esempio: imponibile 500 €, IVA 22% → 500 × 22 ÷ 100 = **110 €**; totale fattura **610 €**.

Per ricavare l'imponibile da un prezzo che comprende già l'IVA («**scorporo**»):

> Imponibile = Prezzo con IVA ÷ 1,22 (per l'aliquota del 22%)

Esempio: 122 € IVA compresa → 122 ÷ 1,22 = **100 €** di imponibile e **22 €** di IVA.

## Elementi principali della fattura elettronica
La **fattura elettronica** è un file in formato **XML**, trasmesso tramite il **Sistema di Interscambio (SdI)** dell'Agenzia delle Entrate. È obbligatoria tra operatori italiani, salvo eccezioni, dal 1° gennaio 2019. Contiene:
- dati del **cedente** (venditore) e del **cessionario** (acquirente): denominazione, indirizzo, partita IVA o codice fiscale;
- **codice destinatario** (7 caratteri) o indirizzo **PEC** del cliente, per il recapito;
- **tipo di documento** (fattura, nota di credito…), numero e data;
- descrizione, quantità, prezzo unitario;
- **imponibile**, **aliquota IVA**, **importo IVA**, **totale**;
- modalità e scadenza del pagamento.

Lo SdI controlla il file: se è corretto lo consegna e rilascia una **ricevuta di consegna**; se contiene errori lo rifiuta con una **ricevuta di scarto**, e la fattura va corretta e reinviata. La fattura immediata va trasmessa entro **12 giorni** dall'operazione.
`
    },
    {
      titolo: "Le modalità di pagamento",
      sintesi: "Pagamenti anticipati, immediati e dilazionati · Bonifico bancario · Ricevute bancarie (Ri.Ba.) · Scadenze e condizioni di pagamento.",
      testo: `
## Pagamenti anticipati, immediati e dilazionati
| Tipo | Quando si paga | A favore di |
| **Anticipato** | Prima della consegna (anche solo un acconto) | Venditore: nessun rischio di non essere pagato |
| **Immediato** | Alla consegna o subito dopo («pronta cassa») | Equilibrio tra le parti |
| **Dilazionato** (differito) | Dopo un certo tempo dalla consegna o dalla fattura | Compratore: ha tempo per pagare |

Il pagamento dilazionato è una forma di **credito** che il venditore concede al cliente: per questo spesso il pagamento immediato è premiato con uno **sconto cassa**.

## Bonifico bancario
Con il **bonifico** chi paga ordina alla propria banca di trasferire una somma sul conto del beneficiario. Servono:
- nome del beneficiario;
- codice **IBAN** del beneficiario;
- importo;
- **causale** (ad esempio «Saldo fattura n. 88 del 03/11/2026»).

Il bonifico ordinario arriva di solito entro il giorno lavorativo successivo; il **bonifico istantaneo** arriva in pochi secondi.

## Ricevute bancarie (Ri.Ba.)
La **Ri.Ba.** è uno strumento con cui il **venditore** (creditore) chiede alla propria banca di incassare un credito. La banca del cliente gli invia un **avviso di scadenza**; il cliente paga presso la sua banca. Se il cliente non paga, la Ri.Ba. torna **insoluta** al venditore.

## Scadenze e condizioni di pagamento
Le condizioni di pagamento si concordano nel contratto e si riportano su offerta, ordine e fattura. Esempi:
- «Rimessa diretta»: pagamento alla consegna o a ricevimento fattura;
- «Bonifico a 30 giorni data fattura»;
- «Ri.Ba. 60 giorni fine mese»: si conta a partire dalla fine del mese della fattura.

Tra imprese, la legge (D.Lgs. 231/2002) prevede che, se non diversamente concordato, si paghi entro **30 giorni**; di norma non si possono superare i **60 giorni** salvo accordo espresso. In caso di ritardo maturano gli **interessi di mora**.
`
    },
    {
      titolo: "Le tecniche di vendita",
      sintesi: "Accoglienza e approccio al cliente · Analisi dei bisogni · Presentazione del prodotto · Gestione delle obiezioni · Negoziazione e conclusione della vendita.",
      testo: `
## Accoglienza e approccio al cliente
La prima impressione conta moltissimo.
- Salutare subito, con un sorriso e guardando negli occhi.
- Presentarsi e mettersi a disposizione, senza essere invadenti.
- Curare l'aspetto personale e l'ordine del luogo di vendita.
- Usare un tono cordiale e dare del **Lei**.

## Analisi dei bisogni
Prima di proporre un prodotto bisogna capire **che cosa serve** davvero al cliente.
- Fare **domande aperte**: «Per quale uso le serve?», «Che cosa è importante per lei?».
- **Ascoltare** con attenzione, senza interrompere.
- **Riformulare** per verificare di aver capito: «Quindi cerca qualcosa di…».
- Individuare budget, tempi, preferenze.

## Presentazione del prodotto
- Presentare i prodotti **adatti** ai bisogni emersi, non tutti quelli disponibili.
- Trasformare le **caratteristiche** in **vantaggi** per il cliente: non «ha una batteria da 5000 mAh», ma «dura tutto il giorno senza ricaricarlo».
- Far vedere, provare, toccare il prodotto quando possibile.
- Essere **onesti**: mai promettere ciò che il prodotto non fa.

## Gestione delle obiezioni
Un'obiezione («costa troppo», «ci devo pensare», «l'ho visto altrove a meno») non è un rifiuto: è una richiesta di chiarimento.
1. **Ascoltare** l'obiezione fino in fondo.
2. **Comprendere**: «Capisco la sua preoccupazione».
3. **Rispondere** con informazioni concrete (qualità, garanzia, assistenza, durata).
4. **Verificare** che la risposta abbia convinto.

## Negoziazione e conclusione della vendita
- Conoscere in anticipo il proprio **margine di trattativa** (fino a quale sconto si può arrivare).
- Concedere qualcosa in cambio di qualcosa: uno sconto a fronte di un pagamento anticipato o di una quantità maggiore.
- Cogliere i **segnali di acquisto** (domande su consegna, garanzia, pagamento).
- **Riepilogare** l'accordo: prodotto, prezzo, consegna, pagamento.
- Concludere con un ringraziamento e lasciare una porta aperta per il futuro.

> Il buon venditore non «convince» il cliente: lo **aiuta a scegliere** ciò che gli serve.
`
    },
    {
      titolo: "La gestione dei clienti e dei fornitori",
      sintesi: "Relazioni commerciali · Comunicazione professionale · Gestione degli ordini · Reclami e assistenza post-vendita · Fidelizzazione del cliente.",
      testo: `
## Relazioni commerciali
L'impresa vive di relazioni: con i **clienti**, che acquistano, e con i **fornitori**, che le permettono di avere merce e servizi. Relazioni basate su **fiducia**, **correttezza** e **rispetto degli impegni** durano nel tempo e portano vantaggi a tutti.
- Con i clienti: disponibilità, puntualità nelle consegne, chiarezza nei prezzi.
- Con i fornitori: rispetto delle scadenze di pagamento, ordini chiari, comunicazioni tempestive.

## Comunicazione professionale
- Linguaggio **chiaro**, **cortese** e **preciso** (date, quantità, importi).
- Al telefono: presentarsi, ascoltare, prendere nota, confermare.
- Per iscritto (email, PEC, lettere): oggetto chiaro, testo breve, firma completa.
- Rispondere sempre, e in tempi brevi, anche solo per dire «ricevuto, le faremo sapere entro…».

## Gestione degli ordini
1. **Ricevere** l'ordine e verificarne la completezza.
2. **Controllare** disponibilità della merce, prezzi e condizioni.
3. **Confermare** l'ordine al cliente.
4. **Registrare** l'ordine e seguirne l'evasione.
5. **Spedire** con il DDT.
6. **Fatturare** e controllare l'incasso.

Per gli ordini ai fornitori il percorso è speculare: richiesta di offerta, ordine, controllo della merce ricevuta, controllo della fattura, pagamento.

## Reclami e assistenza post-vendita
Un reclamo ben gestito può trasformare un cliente insoddisfatto in un cliente fedele.
- Ascoltare con calma e senza giustificarsi subito.
- Raccogliere tutti i dati (cliente, ordine, problema).
- Proporre una **soluzione** concreta (sostituzione, riparazione, nota di credito) e un tempo preciso.
- Registrare il reclamo e verificare che sia stato risolto.

L'**assistenza post-vendita** comprende consegna e installazione, garanzia, riparazioni, informazioni sull'uso del prodotto.

## Fidelizzazione del cliente
**Fidelizzare** significa far sì che il cliente torni e consigli l'impresa ad altri. Strumenti:
- qualità costante del prodotto e del servizio;
- attenzione personale (ricordare nome e preferenze);
- carte fedeltà, sconti riservati, offerte dedicate;
- comunicazioni periodiche (newsletter, auguri);
- assistenza rapida ed efficace.

> Conquistare un nuovo cliente costa molto di più che mantenerne uno già acquisito.
`
    },
    {
      titolo: "Il marketing commerciale",
      sintesi: "Analisi del mercato · Strategie promozionali · Canali di vendita · Commercio elettronico.",
      testo: `
Il **marketing** è l'insieme delle attività con cui l'impresa studia il mercato, sceglie che cosa offrire e a chi, e fa conoscere i propri prodotti.

## Analisi del mercato
- **Chi sono i clienti**: età, zona, abitudini, esigenze (si parla di **target** o segmento di clientela).
- **Chi sono i concorrenti**: che cosa offrono, a quali prezzi, con quali punti di forza.
- **Come si muove il mercato**: prodotti in crescita, mode, stagionalità.

Fonti di informazione: questionari ai clienti, dati delle vendite, osservazione dei concorrenti, statistiche pubbliche, ricerche su internet.

## Strategie promozionali
- **Pubblicità**: volantini, manifesti, giornali, radio, social network.
- **Promozioni**: sconti temporanei, 3x2, omaggi, campioni gratuiti.
- **Vetrine ed esposizione** curata della merce.
- **Fiere ed eventi**.
- **Passaparola**: il cliente soddisfatto è la migliore pubblicità.

Le leve del marketing si riassumono spesso nelle «4 P»: **Prodotto**, **Prezzo**, **Punto vendita** (distribuzione), **Promozione**.

## Canali di vendita
| Canale | Esempio |
| **Diretto** | Il produttore vende direttamente al cliente (spaccio aziendale, sito proprio) |
| **Corto** | Produttore → dettagliante → consumatore |
| **Lungo** | Produttore → grossista → dettagliante → consumatore |

A questi si aggiungono la vendita per corrispondenza, la vendita tramite agenti e rappresentanti, la vendita a domicilio.

## Commercio elettronico
Il **commercio elettronico** (e-commerce) è la vendita di beni e servizi tramite internet: sito dell'impresa, grandi piattaforme online, social network.
- **Vantaggi**: negozio aperto 24 ore su 24, clienti in tutta Italia e all'estero, costi di struttura minori.
- **Attenzioni**: logistica delle spedizioni, gestione dei resi, sicurezza dei pagamenti, protezione dei dati personali.
- Il consumatore che acquista online ha diritto di **recesso** entro **14 giorni** dalla consegna, senza dover dare motivazioni (Codice del consumo).

Si distingue tra **B2C** (dall'impresa al consumatore) e **B2B** (tra imprese).
`
    },
    {
      titolo: "Esercitazioni pratiche",
      sintesi: "Compilazione di un preventivo · Simulazione di un ordine commerciale · Calcolo di prezzi, sconti e IVA · Lettura di una fattura · Simulazione di una trattativa commerciale.",
      testo: `
## Esercizio 1 · Compilazione di un preventivo
La ditta **Forniture Ufficio srl** riceve dalla **Studio Rossi** una richiesta per 20 risme di carta A4 a 4,00 € l'una e 5 toner a 60,00 € l'uno. Concede uno sconto del 10%, IVA 22%, consegna entro 7 giorni, pagamento con bonifico a 30 giorni, validità 30 giorni.

Compilare il preventivo con: numero e data, dati delle due ditte, descrizione, quantità, prezzi, sconto, imponibile, IVA, totale, condizioni.

| Descrizione | Quantità | Prezzo unitario | Importo |
| Risme carta A4 | 20 | 4,00 € | 80,00 € |
| Toner | 5 | 60,00 € | 300,00 € |
| **Totale merce** | | | **380,00 €** |
| Sconto 10% | | | − 38,00 € |
| **Imponibile** | | | **342,00 €** |
| IVA 22% | | | 75,24 € |
| **Totale preventivo** | | | **417,24 €** |

## Esercizio 2 · Simulazione di un ordine commerciale
La Studio Rossi accetta il preventivo. Scrivere l'**ordine** indicando: riferimento al preventivo (numero e data), merce e quantità, prezzo concordato, luogo e data di consegna, modalità di pagamento, firma. Scrivere poi la **conferma d'ordine** del fornitore.

## Esercizio 3 · Calcolo di prezzi, sconti e IVA
1. Una merce costa 150 €; si applica un ricarico del 40%. Qual è il prezzo di vendita? → 150 + 60 = **210 €**.
2. Su un prezzo di 210 € si concede uno sconto dell'8%. Prezzo scontato? → 210 − 16,80 = **193,20 €**.
3. Calcolare l'IVA al 22% su un imponibile di 193,20 €. → **42,50 €** (42,504 arrotondato); totale **235,70 €**.
4. Un prodotto costa 61 € IVA 22% compresa. Qual è l'imponibile? → 61 ÷ 1,22 = **50 €**; IVA **11 €**.
5. Sconti in catena 20% + 10% su 400 €. → 400 − 80 = 320; 320 − 32 = **288 €**.

## Esercizio 4 · Lettura di una fattura
Su una fattura (anche il facsimile fornito dalla docente) individuare:
- chi è il **cedente** e chi il **cessionario**;
- numero, data e tipo di documento;
- descrizione della merce, quantità, prezzi;
- **imponibile**, **aliquota**, **IVA**, **totale**;
- modalità e **scadenza** del pagamento;
- codice destinatario o PEC.

Verificare che i calcoli siano corretti e che i dati corrispondano all'ordine e al DDT.

## Esercizio 5 · Simulazione di una trattativa commerciale
A coppie: uno è il **venditore**, l'altro il **cliente** che vuole acquistare 3 computer per il suo ufficio con un budget limitato.
- Il venditore accoglie, fa domande sui bisogni, presenta un'offerta.
- Il cliente solleva almeno due obiezioni (prezzo, tempi di consegna).
- Si negozia: sconto in cambio di pagamento anticipato o di un ordine maggiore.
- Si conclude riepilogando l'accordo.

Poi ci si scambia i ruoli. Al termine, la classe commenta: accoglienza, ascolto, risposta alle obiezioni, chiusura.
`
    }
    ]
  },

  /* ======================= MODULO 2 ======================= */
  {
    n: 2,
    titolo: "Strumenti di incasso e pagamento",
    colore: "#6b3a12",
    argomenti: [
    {
      titolo: "Introduzione agli strumenti di incasso e pagamento",
      sintesi: "Concetto di incasso e pagamento · Differenza tra strumenti di incasso e strumenti di pagamento · Operazioni commerciali e transazioni finanziarie · Ruolo delle banche nei pagamenti.",
      testo: `
## Concetto di incasso e pagamento
- Il **pagamento** è l'atto con cui il debitore (chi deve) estingue il proprio debito versando una somma di denaro al creditore.
- L'**incasso** è lo stesso atto visto dalla parte del creditore: è il momento in cui riceve il denaro che gli spetta.

Ogni pagamento di un cliente è un incasso per il fornitore.

## Differenza tra strumenti di incasso e strumenti di pagamento
| Strumenti di pagamento | Strumenti di incasso |
| L'iniziativa è di **chi paga** | L'iniziativa è di **chi incassa** |
| Contanti, assegno, bonifico, carte | Ri.Ba., addebito diretto SEPA (SDD), MAV, bollettini |
| Il debitore decide quando pagare | Il creditore «chiede» il pagamento alla scadenza |

## Operazioni commerciali e transazioni finanziarie
- L'**operazione commerciale** è lo scambio di beni o servizi (vendita, acquisto): genera un credito per il venditore e un debito per il compratore.
- La **transazione finanziaria** è il movimento di denaro che chiude quel credito e quel debito (il pagamento).

Spesso i due momenti non coincidono: la merce si consegna oggi e si paga tra 60 giorni.

## Ruolo delle banche nei pagamenti
Le banche (e gli altri intermediari, come Poste Italiane e gli istituti di pagamento) sono il tramite di quasi tutti i pagamenti:
- tengono i **conti correnti** delle imprese e delle persone;
- eseguono **bonifici** e addebiti;
- emettono **carte** e assegni;
- curano l'**incasso** di Ri.Ba., SDD, MAV per conto delle imprese;
- forniscono gli **estratti conto** e l'**home banking**.

> Ogni impresa dovrebbe avere un conto corrente dedicato all'attività, separato da quello personale.
`
    },
    {
      titolo: "Gli strumenti di pagamento tradizionali",
      sintesi: "Denaro contante e limiti di utilizzo · Assegno bancario e circolare · Bonifico bancario · Pagamenti anticipati, immediati e differiti.",
      testo: `
## Denaro contante e limiti di utilizzo
Il **contante** (banconote e monete) è il mezzo di pagamento più semplice, ma per legge ha dei **limiti**, per contrastare evasione e riciclaggio. Dal 2023 il trasferimento di contante tra soggetti diversi è consentito per importi **inferiori a 5.000 euro** (cioè fino a 4.999,99 €). Il limite è stato cambiato più volte negli anni: va sempre verificata la norma in vigore.

- Vantaggi: immediato, accettato da tutti.
- Svantaggi: rischio di furto e smarrimento, nessuna traccia, limiti di legge.
- Per ogni incasso in contanti l'esercente rilascia scontrino o ricevuta.

## Assegno bancario e circolare
| | Assegno bancario | Assegno circolare |
| Chi lo emette | Il titolare di un conto corrente | La banca, su richiesta del cliente |
| Copertura | Dipende dai fondi sul conto di chi lo firma | **Garantita**: la somma è già versata alla banca |
| Rischio per chi lo riceve | Può essere «scoperto» (senza fondi) | Molto basso |
| Termine per incassarlo | 8 giorni (stesso comune) o 15 giorni (comune diverso) | 30 giorni |

Elementi dell'assegno: luogo e data, importo in cifre e in lettere, nome del beneficiario, firma. Per importi **pari o superiori a 1.000 euro** l'assegno deve riportare la clausola **«non trasferibile»**.

Chi emette un assegno senza copertura viene iscritto nella **CAI** (Centrale d'Allarme Interbancaria) e non può emettere assegni per un certo periodo.

## Bonifico bancario
Ordine dato alla propria banca di trasferire denaro sul conto del beneficiario, identificato dall'**IBAN** (in Italia 27 caratteri, che iniziano con IT).
- **Ordinario**: accredito di norma entro il giorno lavorativo successivo.
- **Istantaneo**: accredito in pochi secondi, 24 ore su 24.
- Si può fare allo sportello, con l'home banking o con l'app della banca.
- Lascia una **traccia** sicura: la contabile del bonifico è la prova del pagamento.

## Pagamenti anticipati, immediati e differiti
- **Anticipati**: prima della consegna (acconto o intero importo).
- **Immediati**: alla consegna («contanti alla consegna», «pronta cassa»).
- **Differiti**: dopo un periodo concordato (30, 60, 90 giorni).

La scelta dipende dalla **fiducia** tra le parti e dalla forza contrattuale: con un cliente nuovo il venditore può chiedere il pagamento anticipato.
`
    },
    {
      titolo: "Gli strumenti di pagamento elettronici",
      sintesi: "Carte di debito e di credito · Carte prepagate · POS e pagamenti contactless · Pagamenti online e tramite smartphone · Sicurezza delle transazioni elettroniche.",
      testo: `
## Carte di debito e di credito
| | Carta di debito (es. Bancomat) | Carta di credito |
| Quando viene addebitata la spesa | **Subito** sul conto corrente | **Il mese successivo**, in un'unica soluzione o a rate |
| Limite di spesa | Disponibilità sul conto e massimale | Fido (plafond) concesso dalla banca |
| Uso tipico | Spese quotidiane, prelievi | Spese più grandi, acquisti online, viaggi |

## Carte prepagate
Si **ricaricano** in anticipo e si può spendere solo la somma caricata. Alcune hanno un IBAN e funzionano quasi come un conto. Sono utili per gli acquisti online, per i giovani, per limitare il rischio in caso di furto.

## POS e pagamenti contactless
Il **POS** è l'apparecchio che permette all'esercente di accettare pagamenti con carta. Commercianti e professionisti hanno l'**obbligo** di accettare pagamenti elettronici; in caso di rifiuto sono previste sanzioni.

Il pagamento **contactless** si fa avvicinando la carta o lo smartphone al POS. Per gli importi più piccoli (in Italia fino a 50 €) di solito non serve il PIN.

## Pagamenti online e tramite smartphone
- **Carte** sul sito del venditore.
- **Portafogli digitali** (es. PayPal, Apple Pay, Google Pay).
- **App della banca** e pagamenti tra persone tramite numero di telefono.
- **Bonifico** con home banking.
- Per le Pubbliche Amministrazioni si usa il sistema **pagoPA**.

## Sicurezza delle transazioni elettroniche
- Le banche usano l'**autenticazione forte**: per confermare un pagamento servono due elementi (ad esempio password + codice sull'app o impronta digitale).
- Pagare solo su siti affidabili, con indirizzo che inizia con **https** e il simbolo del lucchetto.
- Non comunicare **mai** PIN, password o codici ricevuti via SMS, nemmeno a chi dice di chiamare dalla banca.
- Attivare gli **avvisi** via SMS o app per ogni pagamento.
- In caso di furto o smarrimento, **bloccare subito** la carta chiamando il numero dedicato.

> La banca non chiede mai codici o password per telefono, SMS o email.
`
    },
    {
      titolo: "Gli strumenti di incasso commerciale",
      sintesi: "Ricevute bancarie (Ri.Ba.) · Addebito diretto SEPA (SDD) · MAV e bollettini di pagamento · Incassi tramite bonifico · Gestione degli incassi dai clienti.",
      testo: `
## Ricevute bancarie (Ri.Ba.)
1. Il **venditore** consegna alla propria banca l'elenco delle Ri.Ba. da incassare (importo, scadenza, dati del cliente).
2. La banca del **cliente** gli invia un **avviso di scadenza**.
3. Il cliente paga entro la scadenza (allo sportello, con home banking o con addebito sul conto).
4. Il venditore riceve l'accredito; se il cliente non paga, la Ri.Ba. torna **insoluta**.

La Ri.Ba. è molto usata tra imprese perché è semplice ed economica, ma **non è un titolo di credito**: in caso di mancato pagamento non permette di agire subito contro il debitore.

## Addebito diretto SEPA (SDD)
Con l'**SDD** il cliente firma un **mandato** che autorizza il creditore ad addebitare automaticamente sul suo conto le somme dovute alle scadenze (bollette, abbonamenti, rate).
- **SDD Core**: per i consumatori; il debitore può chiedere il **rimborso** entro 8 settimane dall'addebito.
- **SDD B2B**: solo tra imprese; non prevede il rimborso.

## MAV e bollettini di pagamento
- Il **MAV** (Pagamento Mediante Avviso) è un modulo precompilato inviato dal creditore: il debitore lo paga in qualsiasi banca o online.
- Il **bollettino postale** si paga in posta, in tabaccheria o online.
- L'**avviso pagoPA** si usa per pagare la Pubblica Amministrazione (tasse, multe, servizi).

## Incassi tramite bonifico
Il creditore indica in fattura il proprio **IBAN** e il cliente paga con bonifico. È il metodo più diffuso. Per riconoscere facilmente gli incassi, chiedere al cliente di indicare nella **causale** il numero e la data della fattura.

## Gestione degli incassi dai clienti
- Indicare chiaramente in fattura modalità, IBAN e **scadenza**.
- Tenere uno **scadenziario clienti** aggiornato.
- Controllare ogni giorno gli accrediti sul conto.
- Registrare subito gli incassi e collegarli alle fatture.
- Sollecitare con cortesia, ma con tempestività, i clienti in ritardo.
`
    },
    {
      titolo: "I titoli di credito",
      sintesi: "Caratteristiche principali dei titoli di credito · Cambiale tratta · Pagherò cambiario · Scadenza e pagamento dei titoli · Mancato pagamento e protesto.",
      testo: `
## Caratteristiche principali dei titoli di credito
Il **titolo di credito** è un documento che **incorpora** un diritto (di solito il diritto di ricevere una somma di denaro). Chi possiede legittimamente il documento può esercitare il diritto. Caratteristiche:
- **incorporazione**: il diritto è «dentro» il documento;
- **letteralità**: vale ciò che è scritto sul titolo;
- **autonomia**: ogni nuovo possessore ha un diritto proprio, indipendente da quello dei precedenti;
- **astrattezza**: il titolo vale indipendentemente dal motivo per cui è stato emesso.

La **girata** (firma sul retro) permette di trasferire il titolo a un'altra persona.

Sono titoli di credito l'assegno bancario, l'assegno circolare e la **cambiale**.

## Cambiale tratta
È un **ordine** di pagamento. Coinvolge tre persone:
- il **traente**, che emette la cambiale e ordina di pagare;
- il **trattario**, che deve pagare (diventa obbligato quando firma per **accettazione**);
- il **prenditore** (beneficiario), che riceve il pagamento.

## Pagherò cambiario
È una **promessa** di pagamento. Coinvolge due persone:
- l'**emittente**, che promette di pagare;
- il **beneficiario**, che riceve il pagamento.

Elementi della cambiale: denominazione «cambiale», importo, scadenza, luogo di pagamento, nome del beneficiario, data e luogo di emissione, firma. Sulla cambiale si paga l'**imposta di bollo**.

## Scadenza e pagamento dei titoli
La scadenza può essere:
- a **giorno fisso** (una data precisa);
- **a vista** (si paga quando il titolo viene presentato);
- a un certo tempo **data** o **vista**.

Alla scadenza il possessore presenta il titolo per il pagamento; chi paga ritira il titolo, che è la prova dell'avvenuto pagamento.

## Mancato pagamento e protesto
Se la cambiale o l'assegno non vengono pagati, il possessore può far elevare il **protesto**: un atto pubblico redatto da un **notaio** o un **ufficiale giudiziario** che certifica il mancato pagamento. Il nome del debitore protestato viene pubblicato nel **Registro informatico dei protesti** delle Camere di Commercio, con gravi conseguenze sulla sua reputazione commerciale e sul credito.

La cambiale è un **titolo esecutivo**: il creditore può agire direttamente sui beni del debitore, senza bisogno di una causa.
`
    },
    {
      titolo: "Le condizioni e le scadenze di pagamento",
      sintesi: "Pagamento alla consegna · Pagamento anticipato · Pagamento a 30, 60 e 90 giorni · Pagamenti rateali · Scadenziario clienti e fornitori.",
      testo: `
## Pagamento alla consegna
Il cliente paga nel momento in cui riceve la merce (in contanti nei limiti di legge, con carta, con assegno o con bonifico). Nelle vendite a distanza esiste il **contrassegno**: il corriere incassa l'importo al momento della consegna.

## Pagamento anticipato
Il cliente paga, in tutto o in parte (**acconto**), prima della consegna. Si usa con clienti nuovi, per merce realizzata su misura o negli acquisti online. Per il venditore elimina il rischio di non essere pagato.

## Pagamento a 30, 60 e 90 giorni
Il pagamento è **dilazionato**: si paga dopo un certo numero di giorni.
- **Data fattura** (d.f.): i giorni si contano dalla data della fattura.
- **Fine mese** (f.m.): i giorni si contano dalla fine del mese della fattura.

| Fattura del 10/03 | Scadenza |
| 30 giorni data fattura | 09/04 |
| 30 giorni fine mese | 30/04 |
| 60 giorni fine mese | 31/05 |
| 90 giorni fine mese | 30/06 |

Nella pratica i termini «fine mese» si fanno spesso cadere all'ultimo giorno del mese di scadenza, come in tabella.

## Pagamenti rateali
L'importo è diviso in più **rate**, con scadenze diverse (ad esempio 30/60/90 giorni: un terzo a ogni scadenza). Ogni rata ha una data e un importo precisi; può essere pagata con Ri.Ba., SDD o bonifico.

## Scadenziario clienti e fornitori
Lo **scadenziario** è l'elenco ordinato per data di tutte le somme da **incassare** (clienti) e da **pagare** (fornitori).

| Scadenza | Cliente / Fornitore | Fattura | Importo | Incasso / Pagamento | Stato |
| 30/11 | Bianchi srl (cliente) | n. 88 del 31/10 | 610,00 € | Incasso Ri.Ba. | Da incassare |
| 30/11 | Carta Sud spa (fornitore) | n. 412 del 31/10 | 245,00 € | Pagamento bonifico | Pagato |
| 15/12 | Verdi snc (cliente) | n. 95 del 15/11 | 1.220,00 € | Incasso bonifico | Da incassare |

> Lo scadenziario si controlla **ogni giorno**: permette di sapere quanto denaro entrerà e uscirà e di non dimenticare nessuna scadenza.
`
    },
    {
      titolo: "La gestione degli incassi e dei pagamenti aziendali",
      sintesi: "Registrazione e controllo degli incassi · Gestione dei pagamenti ai fornitori · Controllo delle scadenze · Riconciliazione bancaria · Gestione dei ritardi e dei mancati pagamenti.",
      testo: `
## Registrazione e controllo degli incassi
- Controllare ogni giorno gli **accrediti** sul conto (home banking, estratto conto).
- Collegare ogni incasso alla **fattura** a cui si riferisce (grazie alla causale).
- Verificare che l'importo incassato corrisponda a quello dovuto.
- Segnare la fattura come **incassata** nello scadenziario.
- Per gli incassi in contanti: rilasciare ricevuta e registrare subito.

## Gestione dei pagamenti ai fornitori
- Prima di pagare, controllare che la fattura corrisponda all'**ordine** e al **DDT** (merce ricevuta, prezzi concordati).
- Rispettare le **scadenze**: pagare puntualmente migliora i rapporti e la reputazione dell'impresa.
- Pagare con strumenti tracciabili (bonifico) e conservare la **contabile**.
- Segnare la fattura come **pagata** nello scadenziario.

## Controllo delle scadenze
- Consultare lo scadenziario ogni giorno.
- Prevedere le uscite dei giorni successivi e verificare che sul conto ci sia la **disponibilità**.
- Segnalare per tempo al responsabile le scadenze importanti.

## Riconciliazione bancaria
La **riconciliazione** è il confronto tra i movimenti registrati dall'impresa e quelli riportati dalla banca nell'**estratto conto**. Le differenze possono dipendere da:
- operazioni registrate dall'impresa ma non ancora contabilizzate dalla banca (es. un assegno emesso non ancora incassato);
- operazioni della banca non ancora registrate dall'impresa (commissioni, interessi, addebiti automatici);
- **errori**, da individuare e correggere.

Alla fine il saldo dell'impresa e quello della banca, spiegate le differenze, devono **coincidere**.

## Gestione dei ritardi e dei mancati pagamenti
1. **Sollecito cortese** (telefono o email) pochi giorni dopo la scadenza.
2. **Secondo sollecito** scritto, con data limite.
3. **Lettera di diffida** o messa in mora (anche via PEC).
4. Eventuale sospensione delle forniture.
5. Azioni legali o recupero crediti tramite professionisti.

Tra imprese, in caso di ritardo maturano automaticamente gli **interessi di mora** e il creditore può chiedere un risarcimento forfettario di **40 euro** per le spese di recupero (D.Lgs. 231/2002).
`
    },
    {
      titolo: "La sicurezza e i rischi nei pagamenti",
      sintesi: "Frodi bancarie e informatiche · Phishing e truffe nei pagamenti digitali · Protezione dei dati bancari · Verifica delle coordinate IBAN · Prevenzione degli insoluti.",
      testo: `
## Frodi bancarie e informatiche
- **Clonazione** di carte (ad esempio con apparecchi applicati agli sportelli automatici).
- **Furto di credenziali** dell'home banking.
- **Assegni** falsi o rubati.
- **Virus** che spiano ciò che si digita sul computer.
- **Falsi operatori** che telefonano fingendosi dalla banca o dalle forze dell'ordine.

## Phishing e truffe nei pagamenti digitali
Il **phishing** è un messaggio (email, SMS, WhatsApp) che imita la banca, le Poste o un corriere e invita a cliccare su un link per «sbloccare il conto» o «confermare un pagamento». Il link porta a un sito falso che ruba i dati.

Segnali di allarme:
- urgenza e minacce («il conto sarà bloccato entro 24 ore»);
- errori di scrittura, indirizzi del mittente strani;
- richiesta di codici, PIN, password;
- link che non corrispondono al sito ufficiale.

Un'altra truffa diffusa tra imprese è la **falsa email del fornitore** che comunica un «nuovo IBAN»: chi paga invia il denaro al truffatore.

## Protezione dei dati bancari
- Non comunicare mai PIN, password, codici OTP.
- Usare password robuste e diverse; attivare l'autenticazione a due fattori.
- Tenere aggiornati computer, antivirus e app.
- Non usare reti Wi-Fi pubbliche per l'home banking.
- Conservare i documenti bancari in modo riservato (GDPR).

## Verifica delle coordinate IBAN
- Controllare che l'IBAN italiano abbia **27 caratteri** e inizi con **IT**.
- Se un fornitore comunica un **cambio di IBAN**, verificarlo **telefonando** a un numero già conosciuto, mai a quello indicato nella stessa email.
- Dal 2025 le banche dell'Unione Europea, prima di eseguire un bonifico, controllano che il **nome del beneficiario** corrisponda all'IBAN e avvisano se non coincide: non ignorare mai questo avviso.

## Prevenzione degli insoluti
L'**insoluto** è un credito non pagato alla scadenza. Per prevenirlo:
- raccogliere informazioni sui clienti nuovi (affidabilità, eventuali protesti);
- fissare un **limite di credito** (fido) per ogni cliente;
- chiedere **acconti** o pagamenti anticipati ai clienti nuovi o poco affidabili;
- scegliere strumenti di incasso adeguati;
- sollecitare subito i ritardi e sospendere le forniture a chi non paga.

> In caso di dubbio su una richiesta di pagamento: **fermarsi, verificare, poi pagare**.
`
    },
    {
      titolo: "Esercitazioni pratiche",
      sintesi: "Compilazione di un ordine di bonifico · Lettura di una ricevuta bancaria · Simulazione di incasso di una fattura · Predisposizione di uno scadenziario · Controllo delle scadenze di pagamento · Simulazione della riconciliazione bancaria.",
      testo: `
## Esercizio 1 · Compilazione di un ordine di bonifico
La Studio Rossi deve pagare la fattura n. 412 del 31/10/2026 della **Carta Sud spa**, importo 245,00 €. Compilare il bonifico con:
- ordinante (chi paga) e suo conto;
- beneficiario: Carta Sud spa;
- IBAN del beneficiario (preso dalla fattura e verificato);
- importo: 245,00 €;
- causale: «Saldo fattura n. 412 del 31/10/2026»;
- data di esecuzione.

Controllare l'IBAN (27 caratteri, inizia con IT) e conservare la contabile.

## Esercizio 2 · Lettura di una ricevuta bancaria
Su un avviso di scadenza Ri.Ba. (facsimile fornito dalla docente) individuare:
- il **creditore** (chi deve incassare);
- il **debitore** (chi deve pagare);
- importo e **data di scadenza**;
- riferimento alla fattura;
- banca di appoggio del debitore.

Rispondere: che cosa succede se il debitore non paga entro la scadenza? → La Ri.Ba. torna **insoluta** al creditore, che deve sollecitare il pagamento.

## Esercizio 3 · Simulazione di incasso di una fattura
La Studio Rossi ha emesso la fattura n. 88 del 31/10/2026 alla Bianchi srl: imponibile 500 €, IVA 22%, pagamento con bonifico a 30 giorni fine mese.
1. Calcolare il totale: 500 + 110 = **610 €**.
2. Determinare la scadenza: **30/11/2026**.
3. Il 28/11 arriva sul conto un bonifico di 610 € con causale «fattura 88»: registrare l'incasso e segnare la fattura come incassata.

## Esercizio 4 · Predisposizione di uno scadenziario
Con un foglio di calcolo (o su carta) preparare uno scadenziario con le colonne: **Scadenza, Cliente/Fornitore, Fattura, Importo, Strumento, Stato**. Inserire:
- fattura cliente Bianchi srl, 610 €, Ri.Ba. 30/11;
- fattura fornitore Carta Sud spa, 245 €, bonifico 30/11;
- fattura cliente Verdi snc, 1.220 €, bonifico 15/12;
- fattura fornitore Luce e Gas, 180 €, SDD 05/12.

Ordinare le righe per data di scadenza.

## Esercizio 5 · Controllo delle scadenze di pagamento
Oggi è il 01/12/2026. Usando lo scadenziario dell'esercizio 4:
- quali incassi sono **scaduti** e non ancora arrivati? (verificare la Ri.Ba. della Bianchi srl del 30/11);
- quali pagamenti ci aspettano nei prossimi 15 giorni? → SDD Luce e Gas del 05/12 (180 €);
- quale incasso è atteso entro metà mese? → Verdi snc 15/12 (1.220 €).

## Esercizio 6 · Simulazione della riconciliazione bancaria
Al 30/11 la contabilità dell'impresa indica un saldo di **2.000 €**; l'estratto conto della banca indica **2.195 €**. Dal confronto emergono:
- un assegno di 200 € emesso dall'impresa (già registrato in contabilità) non ancora incassato dal beneficiario, quindi non ancora addebitato dalla banca;
- commissioni bancarie di 5 € addebitate dalla banca e non ancora registrate dall'impresa.

| Lato impresa | Importo | Lato banca | Importo |
| Saldo contabilità | 2.000,00 € | Saldo estratto conto | 2.195,00 € |
| − commissioni non registrate | − 5,00 € | − assegno non ancora addebitato | − 200,00 € |
| **Saldo rettificato** | **1.995,00 €** | **Saldo rettificato** | **1.995,00 €** |

I due saldi rettificati **coincidono**: la riconciliazione è corretta. L'impresa deve ora registrare le commissioni di 5 €.
`
    }
    ]
  }
  ]
};
