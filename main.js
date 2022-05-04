noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
diffrence=0;
function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas = createCanvas(550, 500);
  canvas.position(550, 120);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose', gotPoses);

}
function modelLoaded(){
  console.log('PoseNet initiated');
}
function gotPoses(results){
  if (results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nosex= "+noseX+"noseY=" +noseY );
    leftWristX=results[0].pose.leftWrist.x;
    rightWrist=results[0].pose.rightWrist.x;
    diffrence=floor(leftWristX-rightWristX);
    console.log("leftWristx="+leftWristX+"rightWristx="+rightWristX+"diffrence="+diffrence);
  }
}
