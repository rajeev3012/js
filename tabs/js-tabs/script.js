function openTab(evt, tabName){
    
    var i, tab, content;
    
    content = document.getElementsByClassName("tabcontent");
    for(i = 0; i<content.length; i++ ){
        content[i].style.display = 'none';
    }
    
    tab = document.getElementsByClassName("tablink");
    for(i = 0; i<tab.length; i++){
        tab[i].className = tab[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += " active";
    
}

document.getElementById("defaultOpen").click();