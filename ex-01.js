let score=0;
let question="Что означает слово `cat`? [кошка, собака]";
let answer=prompt(question);
 
if (answer.toLowerCase()=="кошка") {
    score=score+10;
    alert("все верно!");
}
else {
    alert("нужно еще подумать");
}

question="Что означает слово `dog`? [кошка, собака]";
answer=prompt(question).toLowerCase();
if (answer=="собака") {
    score=score+10;
    alert("все верно!");
}
else {
    alert("нужно еще подумать");
}

alert("счет: "+score);