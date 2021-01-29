class Form{
    constructor(){

    }
  display(){
      var title=createElement('h2');
      title.html('Super Car Racing Game');
      title.position(120,10)
      var input=createInput('Name');
      var button=createButton('Start');
      var greeting=createElement('h3');
      input.position(150,160);
      button.position(150, 180);

 button.mousePressed(function(){
      input.hide();
      button.hide();
      var name=input.value();
      playerCount+=1;
      player.update(name);
      player.updateCount(playerCount);
      greeting.html("Hello"+name);
      greeting.position(150,120);


  })
  }



}