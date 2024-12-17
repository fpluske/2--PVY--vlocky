let snowflakes = [];
let width = screen.width;
let height = screen.height;


class Snowflake {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.size = random(10, 20);
    this.speed = random(1, 3);
    this.color = color(random(100, 255));
  }

  draw() {
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  update() {
    this.y += this.speed;
  }
}

function setup() {
  createCanvas(width, height);
  console.log(width);
  console.log(height);
}

function draw() {
  background(20);
  if (random(1) < 0.2) snowflakes.push(new Snowflake());
  for (let i = 0; i < snowflakes.length; i++) {
    if (snowflakes[i].y > height + 20) {
      snowflakes.splice(i, 1);
    }
    snowflakes[i].update();
    snowflakes[i].draw();
  }
}
