// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

// creo un array di oggetti con i membri attuali del team
const cards=
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
const teamCont = document.querySelector(".team-container");
for (let i = 0; i < cards.length; i++) {
    cardGen(teamCont, cards[i]);
}

// quando clicco sul bottone add aggiungo una card con le informzioni inserite
const addButton = document.getElementById("addMemberButton");
addButton.addEventListener('click',
    function () {
        
        // - seleziono gli input che mi servono
        let addImage = document.getElementById("image");
        let addName = document.getElementById("name");
        let addRole = document.getElementById("role");
        console.log(addName.value);

        // creo un oggetto con le informazioni inserite nel form
        const newcard = {
            'foto': addImage.value,
            'nome': addName.value,
            'ruolo': addRole.value
        }

        // aggiungo l'oggetto all'array
        cards.push(newcard);
        console.log(cards);

        // genero la nuova card in pagina
        cardGen(teamCont, newcard);

        // reset dei valori del form
        addImage.value = '';
        addName.value = '';
        addRole.value = '';
        console.log(addName.value);
    }
)

// funzioni

// generazione card
function cardGen(container, arrayObj) {
    container.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
                src="img/${arrayObj.foto}"
                alt="${arrayObj.nome}"
            >
        </div>
        <div class="card-text">
            <h3>${arrayObj.nome}</h3>
            <p>${arrayObj.ruolo}</p>
        </div>
    </div>`;
}