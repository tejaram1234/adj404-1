const planets = [
    { planetName: "Sun", gravity: 27.9, image: "./SolarFull_SeanDoran_2880FullwidthLede-removebg-preview.png" },
    { planetName: "Mercury", gravity: 0.377, image: "./whatsimporta-removebg-preview.png" },
    { planetName: "Venus", gravity: 0.9032, image: "./radar-clouds-Scientists-surface-Venus-computer-image-removebg-preview.png" },
    { planetName: "Earth", gravity: 1, image: "./earth-11015__340-removebg-preview.png" },
    { planetName: "Moon", gravity: 0.1655, image: "./istockphoto-179077120-170667a-removebg-preview.png" },
    { planetName: "Mars", gravity: 0.3895, image: "./images-removebg-preview.png" },
    { planetName: "Jupiter", gravity: 2.640, image: "./images-removebg-preview (3).png" },
    { planetName: "Saturn", gravity: 1.139, image: "./edu_ring_a-round_the_saturn-removebg-preview.png" },
    { planetName: "Uranus", gravity: 0.917, image: "./images-removebg-preview (1).png" },
    { planetName: "Neptune", gravity: 1.148, image: "./images-removebg-preview (2).png" },
]

planets.map((ele)=>{
    const options = document.createElement("option")
    options.innerHTML = ele.planetName
    options.value = ele.gravity
    options.setAttribute("imageSrc", ele.image)
    const select = document.getElementById("Planets")
    select.appendChild(options)
})

function calweight(){
    var mass=+document.getElementById("input").value
    var bottom =document.getElementById("bottom")
    bottom.setAttribute("style","border-radius:10px;background-color:gray;width:60%;height: fit-content;display: flex;align-items: center;justify-content: center;")
    const select = document.getElementById("Planets")
    var selectedIndex = select.selectedIndex
    const selectedOption = select.options[selectedIndex]
    const planetName = selectedOption.innerText
    const gravity = +selectedOption.value
    const weight = mass * gravity
    console.log(weight);
    const h1 = document.getElementById("ans")
    if (mass == "") {
        h1.innerText = "Enter your mass"
    } else if (mass < 0) {
        h1.innerText = "Enter Weight greater than 0"
    } else {
        h1.innerHTML = `The weight of the object on planet ${planetName} is  <h1 class="weight">${Math.abs(weight).toFixed(2)} Kgs</h1>   `
        var imgsrc = selectedOption.getAttribute("imageSrc")
        const img = document.getElementById("image")
        img.src = imgsrc
        img.setAttribute("style", "width : 50% ; height : 100%, ")
    }
}