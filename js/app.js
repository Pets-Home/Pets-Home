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
  new Dogs('Alaskan','img/alaskan dog.jpg','Longevity Range: 15 – 20 yrs.<br> Bred For: Companionship<br> An intelligent, active dog, the Alaskan Klee Kai needs a moderate amount of exercise and a large amount of interaction with owners.<br> Klee kai need a large amount of interaction with their owners. They tolerateother dogs well. They are hunters and should be raised together with cats, if their owner is planning on one. The owner should be careful around pet rodents, birds and reptiles, as their husky prey drive is strong. Because they are clever, no pocket pet will be safe from them.<br> Klee kai make excellent watchdogs, but their size precludes them from being guard dogs.<br> The best food is : leaps & Bounds Chicken & Rice Dog Can');

  new Dogs('German shepherd','img/german shepherd dog.jpg','Longevity Range: 10-12 yrs.<br> Bred For: Herding, Guard dog. <br> Smart and easily trained, the ever-popular German shepherd is quite active and likes to have something to do. Therefore, they need ample daily exercise daily; otherwise, they become mischievous or high-strung.great care should be taken to purchase German shepherds from reputable breeders.They should be with the family and continually exposed under supervision to people and other pets around the neighborhood; they should not be confined to a kennel or backyard either alone or with other dogs.<br> The best food is: ProBalance Ocean Fish Adult Dog Food');

  new Dogs('Hasky','img/hasky dog.jpg','Longevity Range: 11-13 yrs.<br> Bred For: Sled pulling The classic northern dogs.<br> Siberian huskies are friendly and intelligent but somewhat independent and stubborn. They thrive on the human company but need firm, gentle training from puppyhood. Siberian huskies were developed under harsh conditions and, not surprisingly, are easy dogs to keep. They can easily become obese if overfed or not exercised. These are dogs bred for running, and they should have a good run at least a couple of times weekly. Siberian huskies tend to be hardy dogs.<br> The best food is : Grain Free Chicken Adult Dog Can');

  new Dogs('Pitbull','img/pitbull dog.jpg','Longevity Range: 11-13 yrs.<br> Bred For:Hunting ,Drive livestock.<br>  Most pit bulls are fun, gentle companions and patient with family members They must have a vigorous exercise period every day. Although they are tough dogs, they are not cold weather dogs and should be shielded from the elements. Pit bulls should be obedience trained because it is a good bonding activity. Because they are very often not good with other dogs, they should be kept on a leash when around them.<br> The best food is : Royal Canin Mini Breed Junior Puppy Pouch.');

  new Dogs('Rotweiler','img/rotweiler dog.jpg','Longevity Range: 8-11 yrs.<br> Bred For: Cattle drover, guardian, draft.<br> Not recommended for first-time owners, the rottweiler needs extensive and continuous socialization to be a good family companion. However, this intelligent, confident dog is easy to keep in spite of the size. Rottweilers are fairly easy to keep for such large dogs and, in fact, have a tendency to obesity if not exercised enough.  Ideally, a rottweiler will be exposed to other pets, including dogs, right from the start, and also to children. Rottweilers are often very protective of their children and should be supervised when with a group of children.<br> The best food is Leaps & Bounds Chicken & Rice Dog Can');

  new Dogs('Shewawa','img/shewawa dog.jpg','Longevity Range: 10-12 yrs.<br> Bred For: Guardian, cart pulling, hunting.<br> Chow chows are not usually social, outgoing dogs. They tend to be aloof with strangers and can be aggressive with other dogs, but are devoted and protective of their family. Chow chows were raised in China primarily on grains and have an overweight tendency with too much rich food. Chow chows are devoted to and protective of their families. Grooming varies with the coat type. A rough-coated chow chow does best with daily grooming to keep him free of tangles. Smooth-coated dogs can be groomed briefly once or twice a week. Special attention should be paid to keeping the eyes and the facial folds clean because the profuse coat can retain dirt and debris.<br> The best food is Royal Canin Mini Breed Junior Puppy Pouch');

}

function catsCollection(){
  new Cats('Scottish Fold','img/scottish fold cat.jpg','The typical lifespan of a Scottish Fold is 15 years.<br> The Scottish Fold typically works very well in a home with children and cat-friendly dogs. They are also known to get along well with other household cats. Meet your Scottish folds basic needs by taking it to the vet for routine check ups, and by brushing its coat, cleaning its ears, and trimming its nails regularly. <br> The best Food is:Leaps & Bounds Indoor Chicken & Thyme Cat Food');

  new Cats('Manx','img/Manx cat.jpg','The typical lifespan of a Manx is 9-13 years. <br> The Manx is considered a social and gregarious cat, and very attached to humans, but also shy of strangers,they are believed to be better able to learn simple verbal commands than most cat must have their nutrition strictly controlled in order to keep them in good condition. They tend to have a wonderful appetite and can become overweight rather quickly. <br> The best food is :Advance Multi Cat Chicken and Salmon Adult Cat Food');

  new Cats('Angora Ovan','img/angora ovan.jpg','The typical lifespan of angora ovan is 9-14 years.<br> Angora is sweet but may become upset with sudden changes to her environment.Its loyal and affectionate, and loves to play and run. Angora should not be allowed to get fat. This elegant cat has fine boning and too much weight can be harmful. Angora needs to be brushed every day. Lacking an undercoat, the coat is relatively easy to care for as it generally does not knot or tangle. If the Turkish angora has blue or odd eyes, she may be deaf.<br> The best food is : Royal Canin Indoor Adult Cat Food');

  new Cats('Shirazi','img/shirazi cat.jpg','The typical lifespan of a shirazi is 10-17 years.<br> The best thing about this breed is its love for human beings unlike many other cat breeds. The Shirazi cat needs a lot of love and affection, as it is considered to be a house cat rather than a street cat. Shirazi cats love being around people and most of all they love people’s attention.The Shirazi cat specifically needs a good diet for personal health reasons, the Shirazi are slightly more sensitive to food than any other type of cat, so be careful what you feed it.<br> The best food is: Pro Plan Optiderma Derma Plus Adult Cat Food');

  new Cats('Persian','img/persian cat.jpg','The typical lifespan of a persian is 8-11 years.<br> persian generally friendly with anyone and everyone. The Persian coat requires attention daily. She must be brushed and combed in order to keep the coat from tangling. In addition, the flat face must be cleaned regularly and carefully as tear stains can be deposited on the face. the breed is not known for a high degree of energetic exercise, attention must be paid to both her nutrition and regular exercise.<br> The best food is :Leaps & Bounds Indoor Chicken & Thyme Cat Food');

  new Cats('Himalaya','img/himalaya cat.jpg','The typical lifespan of a himalaya is 9-15 years.<br> These kitties can be shy, and they prefer a calm environment. If you have children, be aware that Himmies love getting attention from kids – some will even let children push them around in buggies – but they do not like roughhousing. They dislike loud noise and are timid around houseguests. it’s a good idea to comb your kitty daily and bathe them monthly to keep their oils under control. In addition to matting, their long hair also has a tendency to collect litter. <br> The best food is :Wysong Optimal Vitality Dry Cat Food.');

}

function birdsCollection(){
  new Birds('LoveBirds','img/Lovebird.jpg','The typical lifespan of  LoveBirds is: 10 - 15 years.<br> It is a genus of small parrots that includes nine species, eight of them live in Africa and the ninth, which is the kana or gray-headed lovebird, lives on the island of Madagascar, and it was named so because it lived in pairs for most of her life.<br> The best food is: fruits, vegetables, seeds and herbs.');

  new Birds('canary','img/canary birds.jpg','The typical lifespan of Canary Bird is:10 years.<br> It is the domesticated type of wild canary and one of the types of songbirds within the family of the Churidae, as it originates from the island of Macaronesia. Canaries were bred as part of human care for the first time in the seventeenth century When Spanish sailors brought him to Europe. <br> The best food is : fruits, vegetables, seeds and herbs.');

  new Birds('Parrot','img/parrot bird.jpeg','The most popular two  types of Parrots are Kakapo and Sapphire Macaw. The typical lifespan of Kakapo is : 95 years.<br>  The typical lifespan of Sapphire Macaw is : 50 years.<br> This birds known for its bright colors ranging from green, red, blue and yellow, and the imitation of some types of sounds, which made them beloved birds for humans to raise them as pampered birds.<br> The best food is : fruits, vegetables, seeds and herbs.');

  new Birds('Goldfinch','img/goldfinch bird.jpg',' The typical lifespan of Goldfinch is : 10 - 15 years.<br> It is a small bird of the passerine order and the family of shrews. The habitat of these birds extends from Western Europe all the way to Central Siberia, and from North Africa to Western and Central Asia.<br> The best food is : fruits, vegetables, seeds and herbs');

  new Birds('Sharshur' , 'img/sharshour.jpg','The typical lifespan of Sharshur is : 8 - 10 years.<br>  is one of the most beautiful ornamented birds, its length is 10 cm, its feathers are colored in white and black, and its beak is red, and there are attractive orange spots on its cheeks, and the Sharshur bird is one of the songbirds, which many people in the Arab world accept.<br>The best food is : fruits, vegetables, seeds and herbs.');

  new Birds('Sulfur Toucan','img/Sulfur toucan.jpg','The typical lifespan of Sulfur Toucan is : 2 - 6 years.<br> That the beak of the toucan is very light and not as heavy as it seems, and that inside this beak is a tongue that is the same length as the beak, flanked on both sides by rough fringes A type of bird that follows the Toucan family, the order Toucan-shaped. It spreads in heavy rainforests in Argentina, Guyana and Brazil.<br> The best food is: fruits, vegetables, seeds and herbs');

}

function fishesCollection(){
  new Fishes ( 'sowrdtail fish' , 'img/sowrdtail fish.jpg' ,'water Temperature: Between 15°C and 20°C. <br>pH: Between 6.8 and 7.8 <br>Cleaning Regularly change the water in your aquarium to keep it clean. Do this by removing only 25% of the water at a time.<br> Swordtails are very adaptable to a wide range of tank conditions and may also breed and produce baby fish in your tank.<br> They are peaceful and widely viewed as a perfect addition to a community tank.Male Swordtails can be territorial towards other male Swordtails, so be cautious when housing more than one.<br> feeding :feed them once a day until they seem to be less interested. Then phase it out to once a week.<br>food types:Aqua One Goldfish Flakes.');

  new Fishes('Guppies' , 'img/Guppies.png' , 'water Temperature: Between 15°C and 20°C. <br>pH: Between 6.8 and 7.8 <br>CleaningRegularly change the water in your aquarium to keep it clean. Do this by removing only 25% of the water at a time.<br> These fish are popular due to the small size and colourful fan tails.Guppies are very hardy fish and since they are livebearers, it can be fun to watch the baby fish appear and grow in the tank.<br>feeding :feed them once a day until they seem to be less interested. Then phase it out to once a week.<br>food types:Hikari Sinking Wafer Fish Food.');

  new Fishes ( 'Oranda fish' , 'img/Oranda fish.jpg' , 'waterTemperature: Between 15°C and 20°C<br>pH: Between 6.8 and 7.8.<br>Cleaning Regularly change the water in your aquarium to keep it clean. Do this by removing only 25% of the water at a time.<br>The oranda comes in a variety of colors. At around 2 or 3 years of age,<br>an oranda goldfish will develop a raspberrylike growth on the top of its head much like its Lionhead forebears.<br>The oranda goldfish grows to a length of 8 to 12 inches. Then phase it out to once a week.<br>food types:Aqua One Goldfish Flakes');

  new Fishes ( 'tang fish' , 'img/tang fish.jpg' , 'water Temperature: Between 15°C and 20°C. <br>pH: Between 6.8 and 7.8 <br>CleaningRegularly change the water in your aquarium to keep it clean. Do this by removing only 25% of the water at a time.<br>This tang possesses only a single color, but that color is enough to make it one of the most stunning tangs,<br>It is fully covered from head to tail with a pastel-like bright yellow,with Maximum Size: 8 Inches <br>feeding :feed them once a day until they seem to be less interested. Then phase it out to once a week.<br>food types:Hikari Sinking Wafer Fish Food');

  new Fishes ( 'Molly fish' , 'img/Molly fish.jpg' , 'water Temperature: Between 15°C and 20°C. <br>pH: Between 6.8 and 7.8 <br>CleaningRegularly change the water in your aquarium to keep it clean. Do this by removing only 25% of the water at a time.Mollies are hardy and fun, livebearing fish.<br>They are gentle and undemanding and because of this, may be bullied by other fish in a community tank so be sure to keep an eye out for them.<br>feeding :feed them once a day until they seem to be less interested. Then phase it out to once a week.<br>food types:Hikari Sinking Wafer Fish Food');

  new Fishes ( 'Tetras' , 'img/Tetras fish.jpg' , '>waterTemperature: Between 15°C and 20°C<br>pH: Between 6.8 and 7.8.<br>Cleaning Regularly change the water in your aquarium to keep it clean. Do this by removing only 25% of the water at a time.<br>These fish are popular due to their hardiness, non-aggressive temperament and small size.<br>It is quite easy to keep multiple Tetras in a tank together and they do not require large tanks.<br>Most species of Tetra can be kept together quite easily.<br>feeding :feed them once a day until they seem to be less interested. Then phase it out to once a week.<br>food types:Aqua One Goldfish Flakes ');
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