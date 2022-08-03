var noofdrum=document.querySelectorAll(".drum").length;

 for(var i=0;i<noofdrum;i++)
 {
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       location.href = "music.html";
   })
 }
