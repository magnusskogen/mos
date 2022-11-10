function customvh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
customvh();

window.addEventListener('resize', customvh);

let colors = ['blue', 'orange', 'beige', 'purple'];
colors = colors.sort((a, b) => 0.5 - Math.random());

let currentColor = 0;
document.body.classList.add('bg-' + colors[currentColor]);

setInterval(function(){
    if (currentColor == (colors.length - 1)) {
        currentColor = 0;
    } else {
        currentColor++;
    }
    document.body.classList = '';
    document.body.classList.add('bg-' + colors[currentColor]);
}, 2000)