
for(let i = 0; i < 18; i++){
    document.querySelectorAll("img")[i].addEventListener('mouseover', function(){
        document.querySelectorAll("img")[i].style.height = '300px';
    })
    document.querySelectorAll("img")[i].addEventListener('mouseout', function(){
        document.querySelectorAll("img")[i].style.height = '172.49px';
    })
}
