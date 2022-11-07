const team = [
    {
    'name': 'Wayne Barnett',
    'position': 'Founder & Ceo',
    'image': 'wayne-barnett-founder-ceo.jpg'
    },

    {
    'name': 'Angela Caroll',
    'position': 'Chief Editor',
    'image': 'angela-caroll-chief-editor.jpg'
    },

    {
    'name': 'Walter Gordon',
    'position': 'Office Manager',
    'image': 'walter-gordon-office-manager.jpg'
    },

    {
    'name': 'Angela Lopez',
    'position': 'Social Media Manager',
    'image': 'angela-lopez-social-media-manager.jpg'
    },

    {
    'name': 'Scott Estrada',
    'position': 'Developer',
    'image': 'scott-estrada-developer.jpg'
    },

    {
    'name': 'Barbara Ramos',
    'position': 'Graphic Designer',
    'image': 'barbara-ramos-graphic-designer.jpg'
    }
]

for (let i = 0; i < 3; i++) {
    let nameUl = document.getElementById('team-names');
    let positionsUl = document.getElementById('team-positions');
    let imagesUl = document.getElementById('team-images');

    for (let key in team) {
        let li = document.createElement("li");  

        if (i === 0) { 
            li.innerHTML = team[key].name;
            nameUl.appendChild(li);
        }
        else if (i === 1) {
            li.innerHTML = team[key].position;
            positionsUl.appendChild(li);
        }
        else if (i === 2) {
            li.innerHTML = team[key].image;
            imagesUl.appendChild(li);
        }
    }
}