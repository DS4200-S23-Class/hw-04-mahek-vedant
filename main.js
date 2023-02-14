

window.onload = function() {
    document.getElementById("point-button").addEventListener("click", function() {
        let svg = document.getElementById("frame");
        let xval = document.getElementById("x").value;
        let yval = document.getElementById("y").value;
        let point = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        point.setAttribute("cx", xval * 50);
        point.setAttribute("cy", 500 - (yval * 50));
        point.setAttribute("r", 10);
        
        // Adding new point to plot
        svg.appendChild(point);
        
        // add on click event listener for newly created point
        point.addEventListener("click", pointClicked(points[i]));
        
    });
};

function pointClicked(point) {
    point.classList.toggle("border");
    let output = document.getElementById('output');
    output.style.display = "block";
    output.innerHTML = "Selected Vis: " + points[i].value;
        
}



// looping through all points and adding event listeners on click
let points = document.getElementsByClassName("point");
for (let i = 0; i < points.length; i++) {
    console.log(points[i]);
    points[i].addEventListener("click", () => pointClicked(points[i]));
}

// points.forEach((point) => {
//     point.addEventListener("click", () => pointClicked(point));
// });





