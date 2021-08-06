var chalk= require('chalk');
var readlineSync= require('readline-sync');
var userName=readlineSync.question("Give me your name? ")
var score=0
console.log("Welcome to The Great Raamayana Quiz "+userName)

  function play(question,answer){
    var userAnswer=readlineSync.question(question)
    if(userAnswer===answer){
      console.log(chalk.green("You are right"))
    score=score+1;
    }else{
      console.log(chalk.red("You are wrong!"));
    score=score-1;      
    }
      console.log("your score is :",score)
      console.log("-------------")
  }
  var questions=[{
    question:"1. Who had composed the original Ramayana?\n a) Rishi Valmiki \n b) Tulsi Das \n c) Sant Ek Nath \n d) Anhinanda \n correct option: ",
    answer:"a",

  },{
    question:"2.Lakshmana is considered to be the incarnation of whom? \n a) Lord Vishnu \n b) Lord Shiva \n c) Lord Brahma \n d) Sheshnag \n correct option: ",
    answer:"d",
    },{
    question:"3.On the advice of _______ , Ravan agree to spare Hanuman and set him free after setting alight his tail ?\n a) Kumbhakarna \n b) Vibhishan \n c) Prasenjit \n d) Indrajit \n correct option: ",
    answer:"b",
    },{
      question:"4.Ravana was a devotee of who among the following God?\n a) Vishnu \n b) Brahma \n c) Shiva \n d) None of the above \n correct option: ",
      answer:"c",
    },{
      question:"5.What was the name of Lord Rama's father?\n a) Shalishuka \n b) Nahapana \n c) Rajadhiraj \n d) Dasaratha \n correct option: ",
      answer:"d",
    },{
      question:"6.Who is the avataara of Indra in Raamayana ?\n a) Jaambavantha \n b) Sugreeva \n c) Vaali \n d) Neela \n correct option: ",
      answer:"c",
    },{
      question:"7.What is the name of Ravana's vehicle which could fly through air ?\n a) Pushpak viman \n b) Panchajanya \n c) Garudavithi \n d) Indrasan \n correct option: ",
      answer:"a",
    },{
      question:"8.What was the name of a bow that was used by Lord Rama in Goddess Sita swayamvar to marry her?\n a) Pinaka \n b) Pindaka \n c) Anandaka \n d) Rulapand \n correct option: ",
      answer:"a",
    },{
      question:"9.Bali was killed by ______ .\n a) Sugreev \n b) Hanuman \n c) Ravana \n d) Ram \n correct option: ",
      answer:"d",
    },{
      question:"10.Where did Ravan keep Sita after bringing her to Lanka ?\n a) Prisom \n b) In his palace \n c) Temple \n d) Ashok Vatika \n correct option: ",
      answer:"d",
    }
  ]
  for(let i=0;i<questions.length;i++){
      var currentQuestion=questions[i] 
      play(currentQuestion.question,currentQuestion.answer)
  }
        console.log("Thanks "+ userName + " for participating this quiz")  
console.log("Your Final Scored : ",score)