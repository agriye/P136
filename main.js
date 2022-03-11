status = "";
input_box_value = "";
function setup()
{
    canvas =  createCanvas(380,280);
    canvas.center();

    video=createCapture(VIDEO);
    video.size();
    video.hide();
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting the objects!"; 
    input_box_value = document.getElementById("object_name").value;
    console.log(input_box_value);
}
function modelLoaded()
{
    console.log("Model is Loaded");
    status = true;
}
function draw()
{
    image(video,0,0,380,280);

}