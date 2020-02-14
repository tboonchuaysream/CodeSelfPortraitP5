/*
@author Thanaphat Boonchuaysream (Tommy)

Self-portrait coded in P5.js showing different emotions. Neutral, sad, and angry.
Press 's' to show sad, click the eye to show angry, and don't do anything to show neutral.

*/

var state;
var stateSad;
var stateAngry;

//tears
var cryBox = 0;

function setup() {
  createCanvas(1000, 800);
  background(227, 255, 222);
  state = neutral();
}

function draw() {

  background(227, 255, 222);

  //neck
  fill(230, 149, 69);
  ellipse(500, 840, 400, 200);
  fill(252, 235, 197);
  rect(460, 709, 80, 50);
  arc(500, 759, 80, 35, 0, PI);

  //ears
  fill(252, 235, 197);
  ellipse(680, 500, 40, 50);
  ellipse(320, 500, 40, 50);
  //earrings
  noFill();
  ellipse(690, 527, 17, 17);
  strokeWeight(2);
  line(691, 535, 691, 546);
  fill(232, 231, 230);
  triangle(685, 546, 697, 546, 691, 561);

  //face
  fill(252, 235, 197);
  ellipse(500, 500, 350, 430);

  //eye brows
  noFill();
  arc(423, 470, 70, 30, PI, 6);
  arc(577, 470, 70, 30, PI, 6);

  //if you hold down s
  if (keyIsDown(83)) {

    state = sad();
    //tears drop with for loop
    for(i = 0; i < 2; i++){
      cryBox++;
    }
      
  //check if mouse is on eye
  } else if ((((mouseX < 448 && mouseX > 398) || (mouseX < 602 && mouseX > 552)) && mouseY < 503 && mouseY > 473) && mouseIsPressed) {

    background(122, 35, 9);
    state = angry();
  
  } else {

  	//reset to neutral
    state = neutral();
    //remove tears
    cryBox = 0;

  }

  //get mouse coordinates
  print(mouseX + "," + mouseY);

  //hair
  fill(0, 0, 0);
  arc(500, 420, 350, 400, PI, TWO_PI);

  //hair (rectangle part)
  triangle(389, 482, 326, 419, 410, 412);
  triangle(450, 478, 408, 417, 472, 417);
  triangle(503, 453, 450, 411, 522, 384);
  triangle(555, 475, 499, 404, 566, 411);
  triangle(553, 414, 593, 493, 616, 414);
  triangle(632, 460, 598, 417, 653, 415);
  triangle(674, 420, 660, 447, 640, 417);
  triangle(344, 467, 325, 420, 371, 421);

  //nose
  noFill();
  arc(500, 563, 40, 35, PI / 2, 4);

}

function neutral() {

  //eyes
  fill(255, 255, 255);
  ellipse(423, 488, 50, 30);
  ellipse(577, 488, 50, 30);

  //pupils
  fill(110, 70, 19);
  ellipse(423, 488, 30, 30);
  ellipse(577, 488, 30, 30);

  //mouth
  stroke(0, 0, 0);
  fill(255, 255, 255);
  arc(500, 630, 50, 35, 0, PI);
  line(475, 630, 525, 630);

  //tongue
  fill(255, 204, 204);
  ellipse(500, 640, 40, 12);

}

function sad() {

  //eyes
  line(398, 488, 448, 488);
  line(552, 488, 602, 488);

  noFill();
  arc(500, 630, 50, 35, PI, TWO_PI);

  //tears
  fill(150, 222, 255);
  rect(408, 488, 30, cryBox);
  rect(562, 488, 30, cryBox);

}

function angry() {

  //neck
  fill(230, 149, 69);
  ellipse(500, 840, 400, 200);
  fill(252, 235, 197);
  rect(460, 709, 80, 50);
  arc(500, 759, 80, 35, 0, PI);

  //ears
  fill(235, 64, 52);
  ellipse(random(675, 685), random(495, 505), 40, 50);
  ellipse(random(315, 325), random(495, 505), 40, 50);
  //earrings
  noFill();
  ellipse(random(685, 695), random(522, 532), 17, 17);
  strokeWeight(2);
  line(random(686, 696), 535, random(686, 696), 546);
  fill(232, 231, 230);
  triangle(random(675, 685), random(541, 551), random(692, 702), random(541, 551), random(686, 696), random(556, 566));

  //face
  fill(235, 64, 52);
  ellipse(random(492, 507), random(500, 507), 350, 430);

  //eye brows
  line(398, 478, 448, 488);
  line(552, 488, 602, 478);

  //mouth
  noFill();
  arc(random(495, 505), 630, 50, 35, PI, TWO_PI);

}