import '../lib/utils.ts'

export const cardData = [
    {
      title: "Consulenza Nutrizionale",
      content: "<strong>Consigli alimentari personalizzati</strong> per migliorare il benessere e supportare uno stile di vita sano ed equilibrato.",
      detailedContent: "Attraverso un'analisi approfondita delle tue abitudini alimentari e delle esigenze specifiche del tuo corpo, offriamo <strong>piani nutrizionali su misura</strong> per migliorare la tua salute e il tuo benessere generale.",
      imageUrl: 'Nutrizione.jpg',
      key: "consulenza-nutrizionale",
    },
    {
      title: "Test Intolleranze",
      subtitle: "Disbiosi",
      content: "<strong>Analisi per identificare eventuali intolleranze</strong> alimentari e squilibri intestinali, aiutando a ristabilire una corretta funzionalità digestiva.",
      detailedContent: "Attraverso test specifici, valutiamo la tua <strong>sensibilità a determinati alimenti</strong>, identificando possibili intolleranze e fornendo consigli alimentari per riequilibrare il tuo intestino e migliorare la digestione.",
      imageUrl: 'Intolleranza2.jpg',
      key: "test-intolleranze",
    },
    {
      title: "Iridologia",
      content: "<strong>Studio dell'iride</strong> per individuare predisposizioni genetiche, squilibri energetici e potenziali problematiche di salute.",
      detailedContent: "L'iridologia è un metodo di analisi che permette di identificare <strong>punti di forza e debolezza</strong> dell'organismo attraverso l'osservazione dell'iride, fornendo indicazioni per un miglior equilibrio fisico e mentale.",
      imageUrl: 'iridologia.jpg',
      key: "iridologia",
    },
    {
      title: "Riflessologia",
      content: "<strong>Tecnica di stimolazione</strong> dei punti riflessi sui piedi e sulle mani per favorire il rilassamento e il riequilibrio dell'organismo.",
      detailedContent: "La riflessologia plantare e palmare stimola <strong>specifici punti riflessi</strong> del corpo per favorire il rilassamento, migliorare la circolazione e supportare il naturale equilibrio energetico dell'organismo.",
      imageUrl: 'riflessologia.jpg',
      key: "riflessologia",
    },
    {
      title: "Fiori di Bach",
      content: "<strong>Rimedi naturali</strong> basati su estratti floreali per armonizzare emozioni e stati d'animo, favorendo il benessere mentale.",
      detailedContent: "I Fiori di Bach sono <strong>essenze floreali naturali</strong> utilizzate per trattare squilibri emotivi e migliorare lo stato d'animo, offrendo un supporto naturale per affrontare ansia, stress e insicurezze.",
      imageUrl: 'FioriDiBach.jpg',
      key: "fiori-di-bach",
    },
    {
      title: "Riequilibrio Energetico",
      content: "<strong>Tecniche con diapason, cristalli e oli essenziali</strong> per riequilibrare l'energia del corpo e della mente.",
      detailedContent: "Utilizziamo diverse pratiche energetiche come la <strong>cristalloterapia, l'aromaterapia e il suono terapeutico</strong> per favorire un equilibrio energetico ottimale e migliorare il benessere psicofisico.",
      imageUrl: 'energia.jpg',
      key: "riequilibrio-energetico",
    },
    {
      title: "Shiatsu",
      content: "<strong>Massaggio giapponese</strong> basato sulla pressione dei meridiani energetici per alleviare tensioni e migliorare il flusso vitale.",
      detailedContent: "Il massaggio Shiatsu è una tecnica manuale che lavora lungo i <strong>meridiani energetici</strong> del corpo, aiutando a ridurre le tensioni muscolari, migliorare la circolazione e riequilibrare il flusso energetico.",
      imageUrl: 'shiatsu.jpg',
      key: "shiatsu",
    },
    {
      title: "Counseling Olistico",
      content: "<strong>Percorsi di ascolto e supporto</strong> per favorire la crescita personale e il benessere psicofisico.",
      detailedContent: "Attraverso il counseling olistico, offriamo <strong>uno spazio di ascolto e supporto personalizzato</strong> per affrontare sfide personali, migliorare la consapevolezza di sé e promuovere il benessere emotivo.",
      imageUrl: 'consueling.jpg',
      key: "counseling-olistico",
    },
    {
      title: "Pressoterapia e Massaggio Drenante",
      content: "<strong>Trattamenti specifici</strong> per migliorare la circolazione, ridurre la ritenzione idrica e favorire il drenaggio linfatico.",
      detailedContent: "Queste tecniche di massaggio aiutano a stimolare la <strong>circolazione sanguigna e linfatica</strong>, riducendo il gonfiore e favorendo l'eliminazione delle tossine per un benessere generale migliorato.",
      imageUrl: 'pressoterapia.jpg',
      key: "pressoterapia-massaggio-drenante",
    },
]

export const WhatsAppButtonProps = {
    phoneNumber: '3454183737',
    message: '',
    className: 'mt-6 inline-block bg-white text-green-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100'
}

// Eventi che vengono visualizzati nella tabella
export const naturopatiaEvents = [
    {
        id: 1,
        title: "Introduzione alla Naturopatia Olistica",
        description: "Webinar gratuito per scoprire i principi base della naturopatia e i suoi benefici per il benessere quotidiano",
        imageUrl: "https://example.com/naturopatia-intro.jpg",
    },
    {
        id: 2,
        title: "Workshop di Fitoterapia Pratica",
        description: "Impara a utilizzare le erbe medicinali per il trattamento naturale dei disturbi comuni",
        imageUrl: "https://example.com/fitoterapia-workshop.jpg"
    },
    {
        id: 3,
        title: "Meditazione e Benessere Energetico",
        description: "Sessioni guidate per riequilibrare i centri energetici attraverso tecniche di meditazione",
    },
    {
        id: 4,
        title: "Alimentazione Naturale per la Primavera",
        description: "Come depurare l'organismo con l'arrivo della bella stagione attraverso l'alimentazione",
        imageUrl: "https://example.com/alimentazione-primavera.jpg"
    },
    {
        id: 5,
        title: "Corso di Aromaterapia Essenziale",
        description: "Scopri come utilizzare gli oli essenziali per il benessere psicofisico",
    },
    {
        id: 6,
        title: "Incontro sui Fiori di Bach",
        description: "Guida all'uso dei rimedi floreali per l'equilibrio emotivo",
        imageUrl: "https://example.com/fiori-di-bach.jpg"
    },
    {
        id: 7,
        title: "Tecniche di Respirazione Consapevole",
        description: "Workshop pratico per migliorare la qualità della vita attraverso il respiro",
    },
    {
        id: 8,
        title: "Naturopatia Pediatrica",
        description: "Approcci naturali per la salute dei bambini",
        imageUrl: "https://example.com/naturopatia-pediatrica.jpg"
    },
    {
        id: 9,
        title: "Yoga Terapeutico per il Benessere",
        description: "Sessioni dedicate all'uso dello yoga come strumento di riequilibrio",
    },
    {
        id: 10,
        title: "Consulenze Naturopatiche Individuali",
        description: "Sessioni one-to-one per un percorso di benessere personalizzato",
        imageUrl: "https://example.com/consulenze-individuali.jpg"
    }
]; 