let counter = 0;
let score =0;

let sellection= ['','Goat','Banda','Parrot','Frog', 'Butterfly','Monkey','Camel','Giraffe','Tiger','Horse', 'Snake','Dog','Donkey', 'Elephant','Lion','Fox','Owl','Zebra']



let imgEl = document.getElementById('img-id');
let scoreEl = document.getElementById('result');
let selectEl = document.getElementById('select-el');
let start_game = document.getElementById('start');
let next = document.getElementById('next')
let try_agin = document.getElementById('try')

let allImg = [
  {pathImg: 'imgGame/banda.jpg',name: 'Banda'},
  {pathImg: 'imgGame/butterfly.jpg',name: 'Butterfly'},
  {pathImg: 'imgGame/camel.jpg',name: 'Camel'},
  {pathImg: 'imgGame/dog.jpg',name: 'Dog'},
  {pathImg: 'imgGame/donkey.jpg',name: 'Donkey'},
  {pathImg: 'imgGame/elephant.jpg',name: 'Elephant'},
  {pathImg: 'imgGame/fox.jpg',name: 'Fox'},
  {pathImg: 'imgGame/frog.jpg',name: 'Frog'},
  {pathImg: 'imgGame/giraffe.png',name: 'Giraffe'},
  {pathImg: 'imgGame/goat.jpg',name: 'Goat'},
  {pathImg: 'imgGame/horse.png',name: 'Horse'},
  {pathImg: 'imgGame/lion.jpg',name: 'Lion'},
  {pathImg: 'imgGame/monkey.png',name: 'Monkey'},
  {pathImg: 'imgGame/owl.jpg',name: 'Owl'},
  {pathImg: 'imgGame/parrot.jpg',name: 'Parrot'},
  {pathImg: 'imgGame/snake.jpg',name: 'Snake'},
  {pathImg: 'imgGame/tiger.jpg',name: 'Tiger'},
  {pathImg: 'imgGame/zebra.jpg',name: 'Zebra'},
];

show();


function start ()
{
  imgEl.src = allImg[counter].pathImg;
  next.style.display = 'block';
  start_game.style.display = 'none';
}

function show ()
{
  if ( counter<=5 )
  {


    counter++;


    console.log(allImg[counter].name);

    if (allImg[counter-1].name === selectEl.value)
    {
    // alert('thats right');

      score++;

    }

    imgEl.src = allImg[counter].pathImg;

    // console.log(selectEl.value);
  }
  else
  {
    try_agin.style.display = 'block'
    next.style.display = 'none'
    // document.getElementById('R').innerHTML=`Your score is ${score} of 10`;
    if (score===5)
    {
      document.getElementById('R').style.display = 'block'
      document.getElementById('R').innerHTML=`Excellent Your score is 5/5 `
      setTimeout(function(){document.getElementById('R').style.display = 'none'}, 4000);
    }
    else if (score<5 && score>=3)
    {
      document.getElementById('R').style.display = 'block'
      document.getElementById('R').innerHTML=`Your score is ${score} of 5`;
      setTimeout(function(){document.getElementById('R').style.display = 'none'}, 4000);
    }
    else {
      document.getElementById('R').style.display = 'block'
      document.getElementById('R').innerHTML=`Your score is ${score} of 5, its bad`;
      setTimeout(function(){document.getElementById('R').style.display = 'none'}, 4000);
    }
  }


}

function randomImage(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;}




let optionElFirst = document.createElement('option');
selectEl.appendChild(optionElFirst);
optionElFirst.textContent='';
imgEl.src = '';

for ( var i=0 ; i <=sellection.length-1 ; i++ )
{
  let optionEl = document.createElement('option');
  selectEl.appendChild(optionEl);
  optionEl.textContent=sellection[i];

}
// //////////////// the right one 
// for ( var i=0 ; i <=allImg.length-1 ; i++ )
// {
//   let optionEl = document.createElement('option');
//   selectEl.appendChild(optionEl);
//   optionEl.textContent=allImg[i].name;

// }





//to make header scrollable 

window.addEventListener('scroll' , () => {
  let header = document.querySelector("header");
  let Home = document.querySelectorAll("a");


  header.classList.toggle("new-header",window.scrollY > 0);

for ( let i = 0 ; i<Home.length ; i++)
{
  Home[i].classList.toggle("new-Home" , window.scrollY > 0);
}

 

})


