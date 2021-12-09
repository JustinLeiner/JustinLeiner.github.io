/* I referenced this link in order to complete the javascript for the slider

https://www.gitto.tech/posts/before-after-image-slider-using-html-css-and-javascript/

*/


document.querySelector(".compare #compare-ip").addEventListener("input",function(e){
  document.querySelector(".compare .before .after").style.width = (+e.target.value) + "px";
});

document.querySelector(".compare #compare-ip").addEventListener("change",function(e){
  document.querySelector(".compare .before .after").style.width = (+e.target.value) + "px";
});