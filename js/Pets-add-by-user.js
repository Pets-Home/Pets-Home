let userPets = document.getElementById('userPets');
let carts = new Cart();
let li;
let xClickEl = document.getElementsByClassName('Remove');

// if (localStorage.getItem('name')==='dog'){
  
//     render(allDogs);
//   }
//   else if (localStorage.getItem('name')==='cat'){
   
//     render(allCats);
  
//   }
//   else if (localStorage.getItem('name')==='bird'){
    
//     render(allBirds);
//   }
//   else if (localStorage.getItem('name')==='fish'){
  
//     render(allFishes);
//   }
  
  
  
  
  
//   function render(all){
//     for (var i=0; i<all.length;i++){
  
//       let section = document.createElement('section');
//       let imageEl = document.createElement('img');
//       let h1El = document.createElement('h1');
//       let parEl= document.createElement('p');
  
//       imageEl.src= all[i].path;
//       h1El.textContent = all[i].name;
//       parEl.textContent = all[i].discribtion;
  
//       cartsContent.appendChild(section);
//       section.appendChild(imageEl);
//       section.appendChild(h1El);
//       section.appendChild(parEl);
//     }
  
//   }

  if(localStorage.getItem('new') != undefined) {
    li = parseInt(localStorage.getItem('new'));
  }else{
    localStorage.setItem('new',0);
    li = parseInt(localStorage.getItem('new'));
  }

  
function showResults(){


    for (let i =0; i<li;i++){
      let recivedData = JSON.parse(localStorage.getItem(`i,${i+1}`));
  if (recivedData==null){
    li=0;
    // location.reload();
  }
      let sectionUser = document.createElement('section');
      let userImg = document.createElement('img');
      let userH1 = document.createElement('h1');
      let userPar = document.createElement('p');
      let parForRemoveEl = document.createElement('p');
  
  
      userImg.src = recivedData.name.path;
      userH1.textContent = recivedData.name.name;
      userPar.textContent = recivedData.name.description;
      parForRemoveEl.textContent='X';
      parForRemoveEl.id=`i,${i+1}`;
      parForRemoveEl.className='Remove';
  
  
      userPets.appendChild(sectionUser);
      sectionUser.appendChild(userImg);
      sectionUser.appendChild(userH1);
      sectionUser.appendChild(userPar);
      sectionUser.appendChild(parForRemoveEl);
  
    }
    
    for (let j=0 ; j<xClickEl.length ; j++){
      xClickEl[j].addEventListener('click',function(event)
      {
        let id = event.target.id;
        localStorage.removeItem(id);
        
        event.target.parentElement.remove();
      });
    }
  
  }
  showResults();  
  