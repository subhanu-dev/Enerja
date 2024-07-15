// we are making it!

/////////////////////////////////navbar scroller

const links = document.querySelectorAll('a');


links.forEach(function (link) {

    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        //scrolling only if the target loc exists.
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

})

/*********************************** hamburger menu*************************************************/

const hamburger=document.querySelector('#hamburger-menu');

const menu=document.getElementById('small-nav');

// const smallnav_classes = smallnav.classList;

// console.log(smallnav_classes);

hamburger.addEventListener('click', function(){

    hamburger.classList.toggle('change');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    

}
    
)

