function setup() {
  createCanvas(700, 600);
}

function draw() {
  var h = hour();
  if (hour() > 12) {
    h = hour() - 12;
  }
  background(40)
  textSize(25)
  text("Created by Charles Rinehart", 200, 75, 1000)
  textSize(125);
  text(h + ":" + minute() + ":" + second(), 150, 100, 100)
  text(day() + " / " + month() + " / " + day(), 40,    200,     700)
  textSize(10)
    text("To show you how much time you wasted I have this counter " + round(millis()/1000), 200, 350, 1000, 1000)
}
