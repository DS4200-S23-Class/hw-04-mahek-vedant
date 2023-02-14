
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
            }
        });
    })
};

// function pointClicked(point) {
//     let points = document.getElementsByClassName("point");
//     console.log('point clicked')
// for (let i = 0; i < points.length; i++) {
//     console.log(points[i]);
//     // points[i].classList.toggle("border");
//     points[i].addEventListener("click", function(){
//         document.getElementById('output').innerHTML = "Selected Point Coordinates: " + "(" +points[i][0] + ", " + points[i][1] + ")";
//     })
// };



//}





