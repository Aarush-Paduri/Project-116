PositionX = 0;
PositionY = 0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/wxP7J5hd/Mustache.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide()
    Posenet = ml5.poseNet(video, modelLoaded);
    Posenet.on('pose', gotposes);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, PositionX, PositionY, 20, 20);
}

function TakeSnaphot() {
    save("Mustache.png");
}

function modelLoaded() {
    console.log("Posenet is Working :)")
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        PositionX = results[0].pose.nose.x;
        PositionY = results[0].pose.nose.y;
        console.log("nose_x:" + PositionX);
        console.log("nose_y:" + PositionY);
}
}