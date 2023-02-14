
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
        point.addEventListener("click", function(){
            document.getElementById('output').innerHTML = "Selected Point Coordinates: " + "(" +xval + ", " + yval + ")";

            // adds or removes border on click
            if (point.getAttribute("stroke")) {
                point.removeAttribute("stroke");
            } else {
                point.setAttribute("stroke", "black");
                point.setAttribute("stroke-width", "3px")
            }
        });
    })
};



// gets list of all points and loops through all of them and adds event listener to all points already on graph
let points = document.getElementsByClassName("point");
for (let i = 1; i <= points.length; i++) {
    let point = document.getElementById(`pt${i}`);
    // event listener adds border and displays x and y coordinates on click
    point.addEventListener("click", function(){
        xcoor = point.getAttribute("cx") / 50
        ycoor = (500 - point.getAttribute("cy")) / 50
        document.getElementById('output').innerHTML = "Selected Point Coordinates: " + "(" +xcoor + ", " + ycoor + ")";
        point.classList.toggle("border");
})
} 





