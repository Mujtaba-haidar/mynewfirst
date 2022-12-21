const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removetarget();
        panel.classList.add("active");
    })
} )

function removetarget() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}
main = document.getElementById('main')
links = document.getElementById('links');

main.addEventListener('click' , function(e) {
    
    e.preventDefault()
    links.classList.toggle('flex')
    links.classList.toggle('hidden')
    
});

botton = document.getElementById('butt'),
linka = document.getElementById('lis');

botton.addEventListener('click' , function(e) {
    e.preventDefault()
    linka.classList.toggle('flex')
    linka.classList.toggle('hidden')
});