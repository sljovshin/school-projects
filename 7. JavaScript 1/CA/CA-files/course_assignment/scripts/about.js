// refer to question 3 before development starts for scope document
var moreInfoTrigger = document.getElementById('moreInfoTrigger');
moreInfoTrigger.addEventListener('click', toggleMoreInfoContent);
var toggled = false;
function toggleMoreInfoContent(){
   
    if(toggled === false) { 
        document.getElementById('moreInfoContent').style.display = "block";
        document.getElementById('toggleArrow').style.transform = "rotate(180deg)"
        toggled = true;
    }
    else { 
        document.getElementById('moreInfoContent').style.display = "none";
        document.getElementById('toggleArrow').style.transform = "rotate(0deg)"
        toggled = false;
    }
    
}