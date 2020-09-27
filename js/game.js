let counter = 0;
let score =0;

let sellection= ['','Goat','Banda','Parrot','Frog', 'Butterfly','Monkey','Camel','Giraffe','Tiger','Horse', 'Snake','Dog','Donkey', 'Elephant','Lion','Fox','Owl','Zebra']



let imgEl = document.getElementById('img-id');
let scoreEl = document.getElementById('result');
let selectEl = document.getElementById('select-el');

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

}

function show ()
{
  if ( counter<=10 )
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
    // document.getElementById('R').innerHTML=`Your score is ${score} of 10`;
    if (score===10)
    {
      document.getElementById('R').innerHTML=`Excellent Your score is 10/10 `;
       
    }
    else if (score<10 && score>=7)
    {
      document.getElementById('R').innerHTML=`Your score is ${score} of 10`;
    }
    else {
      document.getElementById('R').innerHTML=`Your score is ${score} of 10 , its bad`;
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








