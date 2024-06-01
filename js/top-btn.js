//top button section js code

const scrollTopBtn=document.getElementById('scrollTopBtn');
window.onscroll=function(){

    if(document.documentElement.scrollTop>70){
        scrollTopBtn.style.display="block";
       
    }else{
        scrollTopBtn.style.display="none";
    }
   
}
scrollTopBtn.addEventListener('click',()=>{
    window.scrollTo(0,0);//one way
    document.documentElement.scrollTop=0; //two way
});
