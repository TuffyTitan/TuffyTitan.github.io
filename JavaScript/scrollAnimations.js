window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.scroll-animation p, .scroll-animation h3');
    console.log(elements);

elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 5) {
        console.log("Element is in view: ", element);
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }
    });
});