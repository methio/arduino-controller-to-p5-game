// variables for serial communication
let serial;

// variables for games 
let asteroids = [];
let nbAsteroidToGenerate = 50;

// variables for player
let p;
let playerSize = 20;
let hit = false;
let direction;

// variables for color 
let c;


function setup() {
   c = [color('#23234c'), color('#f4c76e'), color('#d9eedd'), color('#05fc90'), color('#ca1e04')];
	createCanvas(windowWidth, windowHeight);

	serial = new p5.SerialPort();
	serial.open('/dev/tty.usbserial-143220'); // use your usb serial port name 

	// object initialisation
	GenerateAsteroids(nbAsteroidToGenerate);
	p = new player(windowWidth / 2, windowHeight - 200, 10, playerSize, c[3]);
}


function draw() {
	// get controller infos
	direction = serial.read();
	direction = serial.readLine();

	// scene elements 
	background(c[0]);
	fill(c[2]);
	text(second(), 10, 10);
	text(direction, 100, 10);

	// actions
	p.move(direction);
	asteroids.forEach(function(element) {
		element.fall();
		hit = collideCircleCircle(element.posX, element.posY, element.diam, p.posX, p.posY, p.size);

		if (hit) {
			console.log('loser');
			fill(c[2]);
			text("you loser", 500, 500);
			p.color = c[4];
		}
	});
}

function GenerateAsteroids(nbAsteroid) {
	for (let i = 0; i <= nbAsteroid; i++) {
		asteroids[i] = new asteroid();
	}
}

class player {
	constructor(posX, posY, speed, size, color) {
		this.posX = posX;
		this.posY = posY;
		this.speed = speed;
		this.size = size;
		this.color = color;
	}
	move(direction) {
		// get direction
		trim(direction);

		switch (direction) {
			case 'left':
				this.posX -= this.speed;
				break;
			case 'down':
				this.posY += this.speed;
				break;
			case 'up':
				this.posY -= this.speed;
				break;
			case 'right':
				this.posX += this.speed;
				break;
		}

		// display 
		noStroke();
		fill(this.color);
		circle(this.posX, this.posY, this.size);
	}
}

class asteroid {
	constructor(posX, posY, diam, speed) {
		this.posX = random(50, windowWidth - 50);
		this.posY = random(-10, -1000);
		this.diam = random(10, 50);
		this.speed = random(5);
	}
	fall() {
		fill(c[1]);
		circle(this.posX, this.posY, this.diam)
		this.posY += this.speed;
	}
}