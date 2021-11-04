// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

// creo un array di oggetti con i membri attuali del team
const card=
[        
    {
        'foto': 'angela-caroll-chief-editor.jpg',
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor'
    },

    {
        'foto': 'walter-gordon-office-manager.jpg',
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager'
    },

    {
        'foto': 'angela-lopez-social-media-manager.jpg',
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager'
    },

    {
        'foto': 'scott-estrada-developer.jpg',
        'nome': 'Scott Estrada',
        'ruolo': 'Developer'
    },

    {
        'foto': 'barbara-ramos-graphic-designer.jpg',
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer'
    },
];

// genero in pagina le card per ogni oggetto dell'array utilizando un ciclo for

// creo un oggetto con le informazioni date dall'utente con il form
// aggiungo l'oggetto all'array