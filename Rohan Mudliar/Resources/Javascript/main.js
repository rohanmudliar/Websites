$(document).ready(function () {

    // Preloader
    var preloader = document.getElementById("preloader");

    preloader.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);

    window.addEventListener("load", function () {
        preloader.classList.add("hidden");
    });


    //  Typer
    var typed = new Typed('.element', {
        strings: ["I'm a <span>Programmer.</span>", "I'm a <span>Developer.</span>", "I'm an <span>Animator.</span>", "And a world class Sloth <span>:p</span>"],
        typeSpeed: 80,
        startDelay: 1000,
        backSpeed: 50,
        backDelay: 500,
        loop: true,
        //false = infinite
        //5 = utne baar chalega
        loopCount: false,
        showCursor: false,
        cursorChar: "|",
        attr: null
    });


    // SCROLL 

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // For old browser.

    // $(document).on('click', 'a[href^="#"]', function (event) {
    //     event.preventDefault();

    //     $('html, body').animate({
    //         scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 500);
    // });

    document.querySelector('a[href^="#header"]').addEventListener("click", function (e) {
        let navbar = document.querySelector("#header");
        let navbarheight = parseInt(window.getComputedStyle(navbar).height, 10);
        let scrollHeight = document.querySelector(e.target.hash).offsetTop - navbarheight - 10;
        window.scroll(0, scrollHeight);
        window.location.hash = e.target.hash;
        e.preventDefault();
    });

    document.querySelector('a[href^="#skills"]').addEventListener("click", function (e) {
        let navbar = document.querySelector("#skills");
        let navbarheight = parseInt(window.getComputedStyle(navbar).height, 10);
        let scrollHeight = document.querySelector(e.target.hash).offsetTop - navbarheight - 10;
        window.scroll(0, scrollHeight);
        window.location.hash = e.target.hash;
        e.preventDefault();
    });

    document.querySelector('a[href^="#projects"]').addEventListener("click", function (e) {
        let navbar = document.querySelector("#projects");
        let navbarheight = parseInt(window.getComputedStyle(navbar).height, 10);
        let scrollHeight = document.querySelector(e.target.hash).offsetTop - navbarheight - 10;
        window.scroll(0, scrollHeight);
        window.location.hash = e.target.hash;
        e.preventDefault();
    });

    document.querySelector('a[href^="#aboutme"]').addEventListener("click", function (e) {
        let navbar = document.querySelector("#aboutme");
        let navbarheight = parseInt(window.getComputedStyle(navbar).height, 10);
        let scrollHeight = document.querySelector(e.target.hash).offsetTop - navbarheight - 10;
        window.scroll(0, scrollHeight);
        window.location.hash = e.target.hash;
        e.preventDefault();
    });

    document.querySelector('a[href^="#contact"]').addEventListener("click", function (e) {
        // dynamically determining the height of your navbar
        let navbar = document.querySelector("#contact");
        let navbarheight = parseInt(window.getComputedStyle(navbar).height, 10);
        // show 5 pixels of previous section just for illustration purposes 
        let scrollHeight = document.querySelector(e.target.hash).offsetTop - navbarheight;
        /* scrolling to the element taking the height of the static bar into account*/
        window.scroll(0, scrollHeight);
        /*properly updating the window location*/
        window.location.hash = e.target.hash;
        /* do not execute default action*/
        e.preventDefault();
    });

});