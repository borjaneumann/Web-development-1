//Load boards from the file or manually

const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];


  //Create variables

  let timer;
  let timeReaining;
  let lives;
  let selectedNum;
  let selectedTile;
  let disableSelect;


function id(id){

    return document.getElementById(id);
}


window.onload = function (){
    //Run stargame function when startgame button is clicked
    id('start-btn').addEventListener('click', startGame)
}


function startGame(){

  if (id('diff-1').checked)
}


