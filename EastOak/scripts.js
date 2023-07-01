let slide = document.getElementById("slide");

const openBox = () => {
    document.getElementsByClassName("feature")[0].classList.toggle("active");
}

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting === true) {
        entries[0].target.classList.add("active");
    } 
}, {
    threshold: 0.8
})
// box.onclick = openBox;
observer.observe(slide);

