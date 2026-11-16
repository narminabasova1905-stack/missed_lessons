"use strict";
//  const narmin= document.getElementsByClassName("text1");
// //  console.log(narmin);

// narmin[0].onclick=function(){
//     this.style.color="red"
// // }
// const narmin=document.querySelector(".text1");
// narmin.onclick=function(){
//     this.style.backgroundcolor="blue";
// }
const narmin=document.querySelector(".text1");
for(let i=0;i<narmin.length;i++){
 narmin[i].onclick=function(){
    this.style.color='green';
 }

}


