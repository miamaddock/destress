var Jokes = ["Make your life a masterpiece; imagine no limitation on what you can be, have or do. - Brian Tracy",
"The way to get started is to quit talking and begin doing. - Walt Disney",
"The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty. - Winston Churchill","Don't let yesterday take up too much of today. - Will Rogers","It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
"If you are working on something exciting that you really care about, you don't have to be pushed the vision pull you. - Steve Jobs","People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen","Whether you think you can or think you can't, you're right. - Henry Ford",
"Security is mostly a superstition life is either a daring adventure or nothing. - Helen Keller",
"The man who has confidence in himself gains the confidence of others. - Hasidic Proverb","Creativity is intelligence having fun. - Aldert Einstein","Do what you can with all you have wherever you are. - Theodore Roosevelt",
"You are naver too old to set another goal or to dream a new dream - C.S. Lewis","The future belong to the competent get good, get better, be the best. - Brian Tracy","For every reason it's not possible, there are hundreds of people who have faced the same cirumstances and succeeded"];


var getJoke = document.querySelector('.Getjoked');
var inspo = document.querySelector('.inspo');


getJoke.addEventListener('click', appendJoke);

function appendJoke() {
    var random = Math.floor(Math.random() * Jokes.length);
  var quote = Jokes[random];
  inspo.innerText=quote;
}


var ok = ["I'm terrified of elevators, so I'm gonna start taking stpps to avoid them",
"What's red and shaped like a bucket? A blue bucket painted red",
"I like to spend everyday as if it's my last, staying in bed and calling for a nurse to bring me more pudding",
"I got fired from the bank today. An old lady comes in and asked me to check her balance so I pushed her",
"My boss told me to have a good day, so I went home.",
"Why do blind people hate skydiving? It scares the hell out of their dogs",
"I have the heart of a lion and a lifetime ban from the National Zoo",
"I couldn't figure out why the baseball was getting larger, then it hit me.",
"How do crazy people make their way through the woods? They take the psycho path.",
"and the Lord said unto John, COME FORTH AND RECIEVE ETERNAL LIFE. well, John came fifth and won a toaster.",
"I have an Epi-Pen. My friend gave it to me as he was dying. It seemed very important that I should have it.",
"What do you call a dog that does magic? A labra-cadabrador",
"A wife says to her programmer husband, GO TO THE STORE AND BUY A LOAF OF BREAD, IF THEY HAVE EGGS, BUY A DOZEN. He came back with 12 loaves of bread."];

var Nice = document.querySelector('.Nice');
var ino = document.querySelector('.ino');


Nice.addEventListener('click', appendOk);

function appendOk() {
  var random = Math.floor(Math.random() * ok.length);
  var quote = ok[random];
  inspo.innerText = quote;
}
