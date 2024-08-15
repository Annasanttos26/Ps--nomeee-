function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke("blue");
    fill("red");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }let cor;
  let posicaoHorizontal;
  let posicaoVertical; 
  
  function setup() {
  
      createCanvas(400, 400);
      background(color(100, 0, 0));
      cor = "color(random(0, 255), random(0, 255), random(0,255))";
      posicaoHorizontal = 200;
      posicaoVertical = 200;
      }
  