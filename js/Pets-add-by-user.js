let userPets = document.getElementById('collection');
let carts = new Cart();
let li;
let xClickEl = document.getElementsByClassName('Remove');
let count_remove = localStorage.getItem('new');

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
    
  }
  localStorage.setItem('remove',li)
      let sectionUser = document.createElement('section');
      let userImg = document.createElement('img');
      let userH1 = document.createElement('h1');
      let userPar = document.createElement('p');
      let DivEl = document.createElement('div')
      let parForRemoveEl = document.createElement('p');
  
  
      userImg.src = recivedData.name.path;
      userH1.textContent = recivedData.name.name;
      userPar.textContent = recivedData.name.description;
      parForRemoveEl.textContent='X';
      parForRemoveEl.id=`i,${i+1}`;
      parForRemoveEl.className='Remove';
      sectionUser.className="container";
      DivEl.className="overlay";
      userImg.className="image";
      userPar.className="text";
  
      sectionUser.appendChild(parForRemoveEl);
      userPets.appendChild(sectionUser);
      sectionUser.appendChild(userImg);
      DivEl.appendChild(userH1);
      DivEl.appendChild(userPar);
      sectionUser.appendChild(DivEl)
  
    }
    
    for (let j=0 ; j<xClickEl.length ; j++){
      xClickEl[j].addEventListener('click',function(event)
      {
        let id = event.target.id;
        localStorage.removeItem(id);
        event.target.parentElement.remove();
        count_remove--

      });
      console.log(count_remove)
    }
  
  }
  showResults();  
  