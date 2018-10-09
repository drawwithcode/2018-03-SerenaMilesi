function preload(){
  // put preload code here
}

var myColors1 = ['#CB1285',
  '#CB1229',
  '#CB5812',
  '#CBB412'
];

var myColors2 = ['#12CB56',
  '#12CBB3',
  '#1287CB',
  '#122BCB'
];

var myColors3 = ['#E2CE5E',
  '#B4E25E',
  '#72E25E',
  '#5EB0E2'
];

var myColors4 = ['#E25ED4',
  '#E25E92',
  '#E26C5E',
  '#E2AE5E'
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);

  noStroke();
  frameRate(4);
}

function draw() {

  //quadratini
  for (var x = 0; x <= windowWidth; x += 50) {
    for (var y = 0; y <= windowHeight; y += 50) {

      if (mouseX <= 600) {
        fill(color(random(myColors1)))

      } else {
        fill(color(random(myColors2)))
      }

      if (mouseX <= 600 && mouseY >= 600){
        fill(color(random(myColors3)))
    };

    if (mouseX >= 600 && mouseY >= 600){
      fill(color(random(myColors4)))
  };

        polygon(x, y, 10, 4);
    }
  }
}

//polygon

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;

  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
