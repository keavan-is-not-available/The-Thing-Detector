status1 = ""

function preload(){
    i = loadImage("dog_cat.jpg")
}

function setup(){
    c = createCanvas(450,350)
    c.center()
    OD = ml5.objectDetector("cocossd",modelLoaded)
}

function draw(){
    image(i,0,0,450,350)
    stroke("red")
    text("Dog",80,50)
    text("Cat",220,90)
    noFill("white")
    rect(210,80,200,250)
    rect(70,40,200,500)
}

function modelLoaded(){
    console.log("model loaded")
    status1 = true
    OD.detect(i,gotResults)
}
function gotResults(error,results){
   if(error){
    console.log(error)
   }
   else{
    console.log(results)
   }
}