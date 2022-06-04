var canvas = new fabric.Canvas('myCanvas');

ballX = 0;
ballY = 0;
holeX = 800;
holeY = 400;

function load_img()
{
   fabric.Image.fromURL("golf-h.png" , function(Img) {
      holeObj = Img;
      holeObj.scaleToWidth(50);
      holeObj.scaleToHeight(50);
      holeObj.set({
         top:holeY,
         left:holeX
      });
      canvas.add(holeObj)
   });
   new_img();
}

function new_img()
{
   fabric.Image.fromURL("ball.png" , function(Img) {
      ballObj = Img;
      ballObj.scaleToWidth(50);
      ballObj.scaleToHeight(50);
      ballObj.set({
         top:ballY,
         left:ballX
      });
      canvas.add(ballObj)
   });
   if((ballX == holeX) && (ballY == holeY))
   {
      document.getElementById("hd3").innerHTML="You scored a goal";
      document.getElementById("myCanvas").style.borderColor="red";
   }
}

window.addEventListener("keydown" , myKeydown)

function myKeydown(e) 
{
   keypressed = e.keyCode;

   if(keypressed == '38')
    {
       up();
    }
    if(keypressed == '37')
    {
       left();
    }
    if(keypressed == '39')
    {
       right();
    }
    if(keypressed == '40')
    {
       down();
      }
}

function up()
{
   if(ballY >= 0 )
   {
       ballY = ballY - 10;
       canvas.remove(ballObj);
       new_img();
   }
}

function down()
{
   if(ballY <= 550 )
   {
       ballY = ballY + 10;
       canvas.remove(ballObj);
       new_img();
   }
}

function left()
{
   if(ballX >= 0 )
   {
       ballX = ballX - 10;
       canvas.remove(ballObj);
       new_img();
   }
}

function right()
{
   if(ballX <= 1000 )
   {
       ballX = ballX + 10;
       canvas.remove(ballObj);
       new_img();
   }
}