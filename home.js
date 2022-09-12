document.addEventListener("DOMContentLoaded", function(){
        
    {myVar = setTimeout(showPagex, 1500);}
    {myVar = setTimeout(showPage, 1000);}
    
    
    function showPage() {
    document.getElementById("LoadingID").style.opacity = "0%";}

    function showPagex() {
    document.getElementById("LoadingID").style.display = "none";} 
    
    
    
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    {
        $('[lang="tr"]').show();
        $('[lang="en"]').hide();
        $('[lang="ar"]').hide();}    
       
        var lang=localStorage.getItem('lang');
        localStorage.getItem('lang');   
        if(lang==("en")){
        $('[lang="en"]').show();
        $('[lang="tr"]').hide();
        $('[lang="ar"]').hide();}
        
        
        if(lang==("tr")){
        $('[lang="tr"]').show();
        $('[lang="en"]').hide();
        $('[lang="ar"]').hide();}
        
        if(lang==("ar")){
        $('[lang="ar"]').show();
        $('[lang="en"]').hide();
        $('[lang="tr"]').hide();}});