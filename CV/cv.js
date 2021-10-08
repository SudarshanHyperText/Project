console.log("this is cv.css");
N = parseInt(100*Math.random());
B = parseInt(100*Math.random());
C = parseInt(100*Math.random());
D = parseInt(100*Math.random());
E = parseInt(100*Math.random());
F = parseInt(100*Math.random());

const data = [
    {
        name: 'Anil Saptale',
        age: 24,
        Profession: 'lieutenant general',
        image: `https://randomuser.me/api/portraits/men/${N}.jpg`
    },

    {
        name: 'Sanjay Jatti',
        age: 25,
        Profession: 'IAS',
        image: `https://randomuser.me/api/portraits/men/${F}.jpg`
    },
    {
        name: 'Samadhan Kate',
        age: 24,
        Profession: 'Talathi',
        image: `https://randomuser.me/api/portraits/men/${B}.jpg`
    },
    {
        name: 'Sachin Pandhare',
        age: 25,
        Profession: 'Web Scrapper',
        image: `https://randomuser.me/api/portraits/men/${C}.jpg`
    },
    {
        name: 'Sudarshan Shinde',
        age: 25,
        Profession: 'Undefined',
        image: `https://randomuser.me/api/portraits/men/${D}.jpg`
    },
    {
        name: 'Sreyash Jadhav',
        age: 21,
        Profession: 'Doctor',
        image: `https://randomuser.me/api/portraits/men/${E}.jpg`
    }
]

function cvIterator(profiles){
    let nextIndex =0;
    return{
        next: function(){
            return nextIndex< profiles.length ?
            {value: profiles[nextIndex++], done:false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);
nextCV();

const next = document.getElementById('Next');
next.addEventListener('click' , nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age}</li>
    <li class="list-group-item">${currentCandidate.Profession}</li>
  </ul>`;
    }
    else{
        alert(" End of Candidates")
    }
}
