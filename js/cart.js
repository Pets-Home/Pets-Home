
let carts = new Cart();
let li;
let cartsContent = document.getElementById('collection');
let count_add = 0;
if (localStorage.getItem('name')==='dog'){
  
  render(allDogs);
}
else if (localStorage.getItem('name')==='cat'){
 
  render(allCats);

}
else if (localStorage.getItem('name')==='bird'){
  
  render(allBirds);
}
else if (localStorage.getItem('name')==='fish'){

  render(allFishes);
}



function render(all){
  for (var i=0; i<all.length;i++){

    let section = document.createElement('section');
    let imageEl = document.createElement('img');
    let DiveEl = document.createElement('div')
    let h1El = document.createElement('h1');
    let parEl= document.createElement('p');
    section.className="container";
    DiveEl.className="overlay";
    imageEl.className="image";
    parEl.className="text";
    
    imageEl.src= all[i].path;
    h1El.textContent = all[i].name;
    parEl.textContent = all[i].discribtion;

    cartsContent.appendChild(section);
    section.appendChild(imageEl);
    DiveEl.appendChild(h1El);
    DiveEl.appendChild(parEl);
    section.appendChild(DiveEl)
  }

}

let newPetName = document.getElementById('addName');
let newPetDescription = document.getElementById('addDescription');

if(localStorage.getItem('new') != undefined) {
  li = parseInt(localStorage.getItem('new'));
}else{
  localStorage.setItem('new',0);
  li = parseInt(localStorage.getItem('new'));
}

let done = document.getElementById('done');
function addNewF() {
  // count_add++

  console.log(localStorage.getItem('new'))
  let reader = new FileReader();
  reader.addEventListener('load' , function () {
    let data = {
      name:newPetName.value,
      path:reader.result,
      description:newPetDescription.value
    };
    newImg(li++,data);
    localStorage.setItem('new',li);
  });
  reader.readAsDataURL(document.getElementById('addImg').files[0]);
 if (localStorage.getItem(`i,${li}`)== null){
   li=0;
 }
//  newPetName.value = '';
//  newPetDescription.value = '';
 done.innerHTML = 'Done'
}


function newImg(name,object) {
  carts.addtolocalstorage(`i,${li}`, object);
}

////////////////////////////////////////
//to make header scrollable 

window.addEventListener('scroll' , () => {
  let header = document.querySelector("header");
  let Home = document.querySelectorAll("a");
  let lastOne = document.querySelector('.button')

  header.classList.toggle("new-header",window.scrollY > 0);

for ( let i = 0 ; i<Home.length ; i++)
{
  Home[i].classList.toggle("new-Home" , window.scrollY > 0);
}

 

})

