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

for (const key in team) {
    console.log(team[key]);
}

for (let i = 0; i < 2; i++) {

    for (let key in team) {
        let li = document.createElement("li");  

        if (i === 0) { 
            li.innerHTML = team[key].name;
            document.querySelector('#team-names').appendChild(li);
        }
        else if (i === 1) {
            li.innerHTML = team[key].position;
            document.querySelector('#team-positions').appendChild(li);
        }
    }  
}

for (let i = 0; i < team.length; i++) {
    let img = document.createElement('img');
    img.src = `img/${team[i].image}`;
    img.height = 200;
    img.style.margin = "0 5px"; 
    document.querySelector('#team-images').appendChild(img);
}