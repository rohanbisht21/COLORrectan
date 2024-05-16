var rect = document.querySelector("#center");
rect.addEventListener("mousemove",function(roh){

    var rectangleLocation = rect.getBoundingClientRect();//rect ke loc points pata chal jynge
var insiderectval=roh.clientX - rectangleLocation.left;// clientX mtlb x axis aur usko - krre h rectange ke left side jitna h 
if(insiderectval<rectangleLocation.width/2){ // mouse left h ya  right pata krne ke lye minus krdiya 
  //left

  var redcolor = gsap.utils.mapRange(
    0,
    rectangleLocation.width/2,
    255,
    0,
    insiderectval
);
  gsap.to(rect,{
    backgroundColor:`rgb(${redcolor},0,0)`,
  ease: Power4,
});
}
else{
//right

var bluecolor = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insiderectval);
gsap.to(rect, {
  backgroundColor:`rgb(0,0,${bluecolor})`,
ease: Power4,
});
}



});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect, {
        backgroundColor: "white",
    });
});

