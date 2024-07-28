const btn = document.getElementById("btn")
let hex = document.getElementById("hexCode")

const randomColor = () => {
    let letters = "0123456789abcdef"
    let color = '#' 
    
    for(let iter = 0; iter<6; iter++){
        color += letters[Math.floor(16*Math.random())]
    }

    return color;
}

btn.addEventListener('click', () => {
    let newColor = randomColor()
    document.body.style.backgroundColor = newColor;
    hex.innerHTML = newColor;
})