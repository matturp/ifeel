var gui;
var gui2;
var Mood = 0;
var MoodMin = -10;
var MoodMax = 10;
var MoodStep = 1;
var Interest = 0;
var InterestMin = -10;
var InterestMax = 10;
var InterestStep = 1;
var Appetite = 0;
var AppetiteMin = -10;
var AppetiteMax = 10;
var AppetiteStep = 1;
var Brain_Fog = false;
var Energy = 0;
var EnergyMin = -10;
var EnergyMax = 10;
var EnergyStep = 1;
var Self_Worth = 0;
var Self_WorthMin = -10;
var Self_WorthMax = 10;
var Self_WorthStep = 1;
var Physical_Slowness;
var Suicidal_Ideation = false;
var Insomnia = false;
var Irritability = 0;
var Anxiety = 0;
var Physical_Pain = 0;
var Night = false;
var Day = true;
var Notes = '';
var txtFont;

let button;

function preload(){
  txtFont = loadFont('assets/Corben/Corben-Regular.ttf');
}


function setup() {
  var pictogram = createCanvas(windowWidth/10*9,windowWidth/10*9);
  textFont(txtFont);

  button = createButton('Download Pictogram');
  button.position(width/20, pictogram.height + 320);
  button.mousePressed(downloadImage);
  button.touchEnded(downloadImage);

  gui = createGui('B').setPosition(width/2 + 20, pictogram.height + 50);
  sliderRange(0, 10, 1);
  gui.addGlobals('Mood', 'Interest', 'Energy', 'Appetite', 'Self_Worth', 'Physical_Pain', 'Irritability', 'Anxiety');

  gui2 = createGui('A').setPosition(width/20, pictogram.height + 50);
  gui2.addGlobals('Day', 'Night','Insomnia', 'Suicidal_Ideation', 'Brain_Fog', 'Notes');
}

function draw() {
  background(255);
  strokeWeight(15);

  // COLOURS

  let black = color('#001219');
  let nightBlue = color('#003440');
  let darkBlue = color('#005f73');
  let green = color('#0a9396');
  let lightBlue = color('#94d2bd');
  let cream = color('#e9d8a6');
  let yellow = color('#ee9b00');
  let orange = color('#ca6702');
  let burntOrange = color('#bb3e03');
  let red = color('#ae2012');
  let wine = color('#9b2226');

  // SHAPES

  // TIME OF DAY
  if ((Night === true) && (Day === false)) {
    //filter(INVERT);
    background(nightBlue);
  }

    // BRAIN FOG
    if (Brain_Fog === true) {
      push();
      noFill()
      stroke(black);
      strokeWeight(7);
      ellipse(width/2,height/2, width/3 * 2.8, height/3 * 2.8);
      pop();
    }
  
    // INSOMNIA
    if (Insomnia === true) {
      push();
      stroke(black);
      strokeWeight(7);
      noFill();
      rectMode(CENTER);
      rect(width/2,height/2, width/3 * 2.8, height/3 * 2.8);
      pop();
    }

  // MOOD
  push();
  translate(width / 2, height / 2);
  var moodAmount = map(Mood, -10, 10, 180, 0);
  rotate(radians(moodAmount));
  noStroke();
  var moodColAmt = map(Mood, -10, 10, 1, 0);
  var moodCol = lerpColor(cream, darkBlue, moodColAmt);
  fill(moodCol);
  triangle(0, - height/3, width/3, height/3, - width/3, height/3);
  pop();

  // PHYSICAL PAIN
  push();
  var painAmount = map(Physical_Pain, 0, 10, 0, 255);
  noStroke();
  fill(187, 62, 3, painAmount);
  scale(0.48);
  beginShape();
  vertex(450, 200);
  vertex(525, 275);
  vertex(625, 275);
  vertex(625, 377);
  vertex(697, 450);
  vertex(625, 525);
  vertex(625, 625);
  vertex(525, 625);
  vertex(450, 700);
  vertex(375, 625);
  vertex(275, 625);
  vertex(275, 525);
  vertex(200, 450);
  vertex(275, 375);
  vertex(275, 275);
  vertex(375, 275);
  vertex(450, 200);
  endShape();
  pop();

  // ENERGY
  push();
  var energyAmount = map(Energy, -10, 10, 0, 1);
  var energyColor = lerpColor(wine, green, energyAmount);
  //fill(155,34,38, energyAmount);
  fill(energyColor);
  noStroke();
  ellipse(width / 2, height / 2, width/3, height/3);
  pop();

  // INTEREST
  push();
  beginShape();
  stroke(black);
  noFill();
  scale(0.5);
  vertex(275, 450 - Interest * 25);
  vertex(450, 450 - Interest * 40);
  vertex(625, 450 - Interest * 25);
  endShape();
  pop();

  // APPETITE
  push();

  if (Appetite === 0) {
    noStroke();
  } else {
    var appetiteAmt = map(Appetite, -10, 10, 0.2, 1);
    var appetiteColor = lerpColor(green, yellow, appetiteAmt);
    stroke(appetiteColor);
    scale(appetiteAmt);
  }

  beginShape(POINTS);
  vertex(106, 106);
  vertex(146, 106);
  vertex(187, 106);
  vertex(228, 106);
  vertex(268, 106);

  vertex(106, 147);
  vertex(146, 147);
  vertex(187, 147);
  vertex(228, 147);
  vertex(268, 147);

  vertex(106, 188);
  vertex(146, 188);
  vertex(187, 188);
  vertex(228, 188);
  vertex(268, 188);

  vertex(106, 229);
  vertex(146, 229);
  vertex(187, 229);
  vertex(228, 229);
  vertex(268, 229);

  vertex(106, 270);
  vertex(146, 270);
  vertex(187, 270);
  vertex(228, 270);
  vertex(268, 270);
  endShape();
  pop();


  // SELF_WORTH
  push();
  if (Self_Worth === 0) {
    noStroke();
  } else {
  }

  if (Self_Worth < 0) {
    var worthAmount = map(Self_Worth, -10, 0, 255, 0);
    stroke(155, 34, 38, worthAmount);
    scale(0.5);
    line(100, 625, 275, 800);
    line(100, 800, 275, 625);
  }

  if (Self_Worth > 0) {
    var worthAmount2 = map(Self_Worth, 0, 10, 0, 255);
    stroke(10, 147, 150, worthAmount2);
    scale(0.5);
    //line(100,700,150,800);
    //line(150,800,275,625);
    line(187, 600, 187, 825);
    line(75, 712, 300, 712);
  }
  pop();

  // IRRITABILITY
  push();
  if (Irritability === 0) {
    noStroke();
  } else {
    var irrColAmt = map(Irritability, 0, 10, 0, 1);
    var irrColor = lerpColor(cream, wine, irrColAmt);
    stroke(irrColor);
  }
  noFill();
  var irrAmount = map(Irritability, 0, 10, 0, -180);
  scale(0.5);
  arc(625, 167, 80, 80, radians(irrAmount / 2), PI + radians(irrAmount / 2));
  arc(705, 167, 80, 80, PI + radians(irrAmount / 2), radians(irrAmount / 2));
  pop();

  // ANXIETY
  push();
  noFill();
  if (Anxiety === 0) {
    noStroke();
  } else {
    stroke(wine);
  }
  scale(0.5);
  beginShape();
  vertex(756 + (Anxiety * 10), 636);
  vertex(691 - (Anxiety * 10), 677);
  vertex(740 + (Anxiety * 10), 718);
  vertex(691 - (Anxiety * 10), 759);
  vertex(756 + (Anxiety * 10), 800);
  endShape();
  pop();

  // SUICIDAL IDEATION
  if (Suicidal_Ideation === true) {
    push();
    fill(red);
    noStroke();
    translate(width/2,height/2);
    ellipse(0, 0, width/5, height/5);
    pop();
  }


  // NOTES

push();
noStroke();
fill(orange);
textSize(15);
textAlign(CENTER);
text(Notes, width/2, height - 50);
pop();

// DATETIME

push();
noStroke();
fill(orange);
textSize(10);
textAlign(CENTER);
text(day() + '/' + month() + '/' + year(), width/2, 50);
pop();


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === ENTER) {
    //saveCanvas('pattern','jpg');
  }
}

function downloadImage() {
  saveCanvas('pictogram_' + day() + '_' + hour() + '_' + minute(), 'jpg');
}
