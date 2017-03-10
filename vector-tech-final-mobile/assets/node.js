var click_flag=9;
document.getElementsByClassName('cl-effect-1')[0].childNodes[9].style.color='#ff0000';

for(i=0;i<5;i++){
  beta = document.getElementsByClassName('cl-effect-1')[0].childNodes[(2*i)+1];
  beta.role=(2*i)+1;
  beta.addEventListener("click",color_change,false);
  
}
function color_change() {
   document.getElementsByClassName('cl-effect-1')[0].childNodes[click_flag].style.color='#ffffff';
   click_flag=this.role;
   this.style.color='#ff0000';
};
