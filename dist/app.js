// we are making it!
console.log("yess utto yes!")

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
