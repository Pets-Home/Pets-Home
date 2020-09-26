let userPet = document.getElementById('userPets');



let cartsContent = document.getElementById('collection');
let carts = new Cart();
if (localStorage.getItem('name')==='dog'){
    dogsRender ();
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

function dogsRender (){
    render(allDogs);
}

function catsRender (){
    render(allCats);
}

function birdsRender (){
    render(allBirds);
}

function fishesRender (){
    render(allFishes);
}




function render(all){
    for (var i=0; i<all.length;i++){
        let section = document.createElement('section');
        let imageEl = document.createElement('img');
        let h1El = document.createElement('h1');
        let parEl= document.createElement('p');
        imageEl.src= all[i].path;
        h1El.textContent = all[i].name;
        parEl.textContent = all[i].discribtion;
        cartsContent.appendChild(section);
        section.appendChild(imageEl);
        section.appendChild(h1El);
        section.appendChild(parEl);
        
    }
   

}

let newPetName = document.getElementById('addName');
let newPetImg = document.getElementById('addImg');
let newPetDescription = document.getElementById('addDescription');




// let li;
// if(localStorage.getItem('new') != undefined) {
//     li = parseInt(localStorage.getItem('new'));
// }else{
//   localStorage.setItem('new',0);
//   li = parseInt(localStorage.getItem('new'));
// }
// function submite(){
//     newPetImg.addEventListener("change", function(e) {
//         let data = e.target;
//         let newImage = new FileReader();
//         newImage.onload = function() {
//             let data ={
//                 name:newPetName.value,
//                 path:newImage.result,
//                 description:newPetDescription.value
    
//             };
//             storeNewData (li++,data);
//             localStorage.setItem('new',li);
          
//         };
//         newImage.readAsDataURL(data.files[0]);
        
//       });
    

// }

// function storeNewData (object){
//     cartforaddeditem.addtolocalstorage(`i,${li}`,object);
// }


let li;
if(localStorage.getItem('new') != undefined) {
    li = parseInt(localStorage.getItem('new'))
}else{
  localStorage.setItem('new',0)
  li = parseInt(localStorage.getItem('new'))
}
function addNewF() {
    let reader = new FileReader();
    reader.addEventListener('load' , function () {
    let data = {
        name:newPetName.value,
        path:reader.result,
        description:newPetDescription.value
}
newImg(li++,data)
localStorage.setItem('new',li)
})
reader.readAsDataURL(document.getElementById('addImg').files[0])
showResults();
location.reload();
}
function newImg(name,object) {
    carts.addtolocalstorage(`i,${li}`, object)
    }

function showResults(){
    for (let i =0; i<li;i++){
        let recivedData = JSON.parse(localStorage.getItem(`i,${i+1}`));
        let sectionUser = document.createElement('section');
        let userImg = document.createElement('img');
        let userH1 = document.createElement('h1');
        let userPar = document.createElement('p');
        userImg.src = recivedData.name.path;
        userH1.textContent = recivedData.name.name;
        userPar.textContent = recivedData.name.description; 
        userPet.appendChild(sectionUser);
        sectionUser.appendChild(userImg);
        sectionUser.appendChild(userH1);
        sectionUser.appendChild(userPar);

    }


}
showResults();