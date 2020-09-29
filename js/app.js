function Cart(items){
  this.name = items;
}

Cart.prototype.addtolocalstorage = function(count,data){
  let newItem = new Product(data);
  localStorage.setItem(count,JSON.stringify(newItem));
};


function Product(data){
  this.name = data,
  sendToLocalStorage.push(this);
}
let sendToLocalStorage=[];


//////////////////////////////////////////////////////////
function Dogs(name,path,discribtion){
  this.name= name,
  this.path=path,
  this.discribtion=discribtion,
  allDogs.push(this);
}
let allDogs = [];


function Cats(name,path,discribtion){
  this.name= name,
  this.path=path,
  this.discribtion=discribtion,
  allCats.push(this);
}
let allCats = [];


function Birds(name,path,discribtion){
  this.name= name,
  this.path=path,
  this.discribtion=discribtion,
  allBirds.push(this);
}
let allBirds = [];


function Fishes(name,path,discribtion){
  this.name= name,
  this.path=path,
  this.discribtion=discribtion,
  allFishes.push(this);
}
let allFishes = [];
//////////////////////////////////////////////////////////////

function dogsCollection(){
  new Dogs('Alaskan','img/alaskan dog.jpg','Longevity Range: 15 – 20 yrs.Bred For: Companionship An intelligent, active dog, the Alaskan Klee Kai needs a moderate amount of exercise and a large amount of interaction with owners. Klee kai need a large amount of interaction with their owners.');

  new Dogs('German shepherd','img/german shepherd dog.jpg','Longevity Range: 10-12 yrs. Bred For: Herding, Guard dog.Smart and easily trained, the ever-popular German shepherd is quite active and likes to have something to do. Therefore, they need ample daily exercise daily; otherwise, they become mischievous or high-strung.');

  new Dogs('Hasky','img/hasky dog.jpg','Longevity Range: 11-13 yrs. Bred For: Sled pulling The classic northern dogs. Siberian huskies are friendly and intelligent but somewhat independent and stubborn. They thrive on the human company but need firm, gentle training from puppyhood. ');

  new Dogs('Pitbull','img/pitbull dog.jpg','Longevity Range: 11-13 yrs. Bred For:Hunting ,Drive livestock. Most pit bulls are fun, gentle companions and patient with family members They must have a vigorous exercise period every day.');

  new Dogs('Rotweiler','img/rotweiler dog.jpg','Longevity Range: 8-11 yrs. Bred For: Cattle drover, guardian, draft. Not recommended for first-time owners, the rottweiler needs extensive and continuous socialization to be a good family companion. However, this intelligent, confident dog is easy to keep in spite of the size.');

  new Dogs('Shewawa','img/shewawa dog.jpg','Longevity Range: 10-12 yrs.Bred For: Guardian, cart pulling, hunting.Chow chows are not usually social, outgoing dogs. They tend to be aloof with strangers and can be aggressive with other dogs, but are devoted and protective of their family.');

}

function catsCollection(){
  new Cats('Scottish Fold','img/scottish fold cat.jpg','The typical lifespan of a Scottish Fold is 15 years.The Scottish Fold typically works very well in a home with children and cat-friendly dogs. They are also known to get along well with other household cats.');

  new Cats('Manx','img/manx1.jpg','The typical lifespan of a Manx is 9-13 years.The Manx is considered a social and gregarious cat, and very attached to humans, but also shy of strangers,they are believed to be better able to learn simple verbal commands than most cat must have their nutrition strictly controlled in order to keep them in good condition.');

  new Cats('Angora Ovan','img/Angora Ovan1.jpg','The typical lifespan of angora ovan is 9-14 years.Angora is sweet but may become upset with sudden changes to her environment.Its loyal and affectionate, and loves to play and run. Angora should not be allowed to get fat. This elegant cat has fine boning and too much weight can be harmful.');

  new Cats('Shirazi','img/shirazy1.jpg','The typical lifespan of a shirazi is 10-17 years.The best thing about this breed is its love for human beings unlike many other cat breeds. The Shirazi cat needs a lot of love and affection, as it is considered to be a house cat rather than a street cat. ');

  new Cats('Persian','img/persian cat.jpg','The typical lifespan of a persian is 8-11 years.persian generally friendly with anyone and everyone. The Persian coat requires attention daily. She must be brushed and combed in order to keep the coat from tangling.');

  new Cats('Himalaya','img/hamalaya3.jpg','The typical lifespan of a himalaya is 9-15 years.These kitties can be shy, and they prefer a calm environment. If you have children, be aware that Himmies love getting attention from kids – some will even let children push them around in buggies – but they do not like roughhousing.');

}

function birdsCollection(){
  new Birds('LoveBirds','img/Lovebird.jpg','The typical lifespan of  LoveBirds is: 10 - 15 years.It is a genus of small parrots that includes nine species, eight of them live in Africa and the ninth, which is the kana or gray-headed lovebird,it was named so because it lived in pairs for most of her life.');

  new Birds('canary','img/canary birds.jpg','The typical lifespan of Canary Bird is:10 years.It is the domesticated type of wild canary and one of the types of songbirds within the family of the Churidae, as it originates from the island of Macaronesia.');

  new Birds('Parrot','img/parrot bird.jpeg','The most popular two  types of Parrots are Kakapo and Sapphire Macaw. The typical lifespan of Kakapo is : 95 years.The typical lifespan of Sapphire Macaw is : 50 years.This birds known for its bright colors.');

  new Birds('Goldfinch','img/goldfinch bird.jpg',' The typical lifespan of Goldfinch is : 10 - 15 years.It is a small bird of the passerine order and the family of shrews. The habitat of these birds extends from Western Europe all the way to Central Siberia, and from North Africa to Western and Central Asia.');

  new Birds('Rose ','img/Roze bird.jpg','The typical lifespan of Sulfur Toucan is : 25-30 years. Colors: Wild Indian Parakeets are usually green with the exception of turquoise blue on their tail feathers, and males have black and rose colored rings around their necks.');



  new Birds('Sulfur Toucan','img/Sulfur toucan.jpg','The typical lifespan of Sulfur Toucan is : 2 - 6 years.That the beak of the toucan is very light and not as heavy as it seems, and that inside this beak is a tongue that is the same length as the beak, flanked on both sides by rough fringes A type of bird that follows the Toucan family.');

}

function fishesCollection(){
  new Fishes ( 'sowrdtail fish' , 'img/sowrdtail fish.jpg' ,'They are peaceful and widely viewed as a perfect addition to a community tank.Male Swordtails can be territorial towards other male Swordtails, so be cautious when housing more than one.');

  new Fishes('Guppies' , 'img/Guppies.png' , 'These fish are popular due to the small size and colourful fan tails.Guppies are very hardy fish and since they are livebearers, it can be fun to watch the baby fish appear and grow in the tank.');

  new Fishes ( 'Oranda fish' , 'img/Oranda fish.jpg' , 'The oranda comes in a variety of colors. At around 2 or 3 years of age,an oranda goldfish will develop a raspberrylike growth on the top of its head much like its Lionhead forebears.The oranda goldfish grows to a length of 8 to 12 inches.');

  new Fishes ( 'tang fish' , 'img/tang fish.jpg' , 'This tang possesses only a single color, but that color is enough to make it one of the most stunning tangs,It is fully covered from head to tail with a pastel-like bright yellow,with Maximum Size: 8 Inches.');

  new Fishes ( 'Molly fish' , 'img/Molly fish.jpg' , 'Mollies are hardy and fun, livebearing fish.They are gentle and undemanding and because of this, may be bullied by other fish in a community tank so be sure to keep an eye out for them.');

  new Fishes ( 'Tetras' , 'img/Tetras fish.jpg' , 'These fish are popular due to their hardiness, non-aggressive temperament and small size.It is quite easy to keep multiple Tetras in a tank together and they do not require large tanks.Most species of Tetra can be kept together quite easily.feeding');
}
//////////////////////////////////////////////////////////////////////
function dogLocalStorage(){
  localStorage.setItem('name','dog');
}

function catLocalStorage(){
  localStorage.setItem('name','cat');
}

function birdLocalStorage(){
  localStorage.setItem('name','bird');
}

function fishLocalStorage(){
  localStorage.setItem('name','fish');
}


if (localStorage.getItem('name')==='dog'){
  dogsCollection();
}
else if (localStorage.getItem('name')==='cat'){
  catsCollection();

}
else if (localStorage.getItem('name')==='bird'){
  birdsCollection();

}
else if (localStorage.getItem('name')==='fish'){
  fishesCollection();

}
////////////////////////////////////////////////////////////////////////////
//to make header scrollable 
window.addEventListener('scroll' , () => {
  let header = document.querySelector("header");
  
  header.classList.toggle("new-header",window.scrollY > 0);
 
})