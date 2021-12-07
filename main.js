function preload() {
	world_start = loadSound("world_start.wav");
	jumpS = loadSound("jump.wav");
	coinS = loadSound("coin.wav");
	kickS = loadSound("kick.wav");
	dieS = loadSound("mariodie.wav");
	gameoverS = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("webcam");

	poseN = ml5.poseNet(video, loaded)
	poseN.on('pose', gotPoses);
}

function draw() {
	game()
}

function loaded() {
	console.log("model loaded");
}

function gotPoses(results) {
	if (results.length> 0) {
		console.log(results);

		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}