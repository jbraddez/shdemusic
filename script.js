function allSizes(){
    var screenWidth = window.innerWidth;
    var spotify = document.querySelector('.spotify-img');
    var socialcont = document.querySelectorAll('.social-cont');
    var social = document.querySelectorAll('.social');
    var footer = document.querySelector('footer');
    var logo = document.querySelector('.logo');
    var links = document.querySelector('.links');
    var nav = document.querySelector('nav');

    if (screenWidth < 750){
        spotify.style.width = '';
        socialcont.forEach(function(item){
            item.style.width = '35px';
            item.style.height = '35px';
            item.style.margin = '0px';
        });
        social.forEach(function(item){
            item.style.maxWidth = '35px';
            item.style.maxHeight = '35px';
        });
        footer.style.flexDirection = 'column';
        footer.style.width ='50px';
        logo.style.fontSize = '3rem';
        links.style.display = 'none';
        nav.style.display = 'block';
    }else{
        spotify.style.width = '160px';
        socialcont.forEach(function(item){
            item.style.width = '';
            item.style.height = '';
            item.style.margin = '';
        });
        social.forEach(function(item){
            item.style.maxWidth = '';
            item.style.maxHeight = '';
        });
        footer.style.flexDirection = 'row';
        footer.style.width ='';
        logo.style.fontSize = '';
        links.style.display = 'block';
        nav.style.display = 'none';
    }
    
}

window.addEventListener('resize', allSizes);
window.addEventListener('load', allSizes);



document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    if (nav) {
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target)) {
                const checkbox = document.getElementById('touch');
                if (checkbox) {
                    checkbox.checked = false;
                }
                const navLabel = document.querySelector('nav label');
                if (navLabel) {
                    navLabel.style.backgroundColor = '#333';
                }
            }
        });
    }
});

