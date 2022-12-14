const sizes = document.querySelectorAll(".size")
const colors = document.querySelectorAll(".color")
const shoes = document.querySelectorAll(".shoe")
const gradients = document.querySelectorAll(".gradient")

let prevColor = "blue";

let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove("active"));
    this.classList.add("active");
}
function changeColor(){
    if(!animationEnd)return;
    let primary = this.getAttribute("primary");
    // console.log(primary)
    let color = this.getAttribute("color");
    // console.log(color)
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`)
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`)

    colors.forEach(color => color.classList.remove("active"));
    this.classList.add("active");

    document.documentElement.style.setProperty("--primary",primary);

    shoes.forEach(shoe => shoe.classList.remove("show"));
    shoe.classList.add("show");

    gradients.forEach(g => g.classList.remove("first" , "second"))
    gradient.classList.add("first")
    prevGradient.classList.add("second")

    prevColor = color;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener("click",changeSize))
colors.forEach(color => color.addEventListener("click",changeColor))

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);