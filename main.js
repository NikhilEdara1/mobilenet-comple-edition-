function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    x=ml5.imageClassifier('MobileNet',modelloaded);
  }
  function modelloaded(){
      console.log("MobileNet is loaded");
  }
  function draw(){
      image(video,0,0,300,300);
      x.classify(video,gotresult);
  } 
d='';
function gotresult(error,result){
    if(error){
        console.log(error);
    }
    else{
    if((result[0].confidence > 0.5) && (d != result[0].label))
    {
console.log(result);
d=result[0].label;
document.getElementById("object_name").innerHTML=result[0].label;
document.getElementById("accuracy_percentage").innerHTML=Math.floor(result[0].confidence*100)+"%";
var speakss=window.speechSynthesis;
wwwcom="object detected is"+result[0].label;
com=new SpeechSynthesisUtterance(wwwcom);
speakss.speak(com);
}
}
}