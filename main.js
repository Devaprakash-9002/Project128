function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length < 0) {        
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("left wrist x: " + leftWristX + ", left wrist y = " + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("right wrist x: " + rightWristX + ", right wrist y = " + rightWristY);
    }
}

function modelLoaded() {
    console.log("Model has initialized!")
}

function draw() {
    image(video, 0, 0, 600, 500);
}

song = ["music 1.jpg", "music 2.jpg"];
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song = loadSound("music 1.mp3");
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}