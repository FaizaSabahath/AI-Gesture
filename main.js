function preload(){}
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,530);
    video.position(20, 60)
    canvas = createCanvas(550, 500);
    canvas.position(650, 80);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function draw(){
    background('#1a044a');
    document.getElementById("square_side").innerHTML = "Width and height of a square will be ="+ difference +"px";
    fill("pink");
    stroke("red");
    square(noseX,noseY,difference);
}
function gotPose(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+ noseX + "noseY = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference ="+ difference);
    }
}