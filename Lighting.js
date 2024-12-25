function switchoff() {
    document.getElementById("bulb-of").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("image-of").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("content").textContent = "switch on press ON";
    document.getElementById("content").style.color = "darkgreen";
    document.getElementById("off").style.backgroundColor = "grey";
    document.getElementById("on").style.backgroundColor = "green";
}

function switchon() {
    document.getElementById("bulb-of").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("image-of").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("content").textContent = "switch off press OFF";
    document.getElementById("content").style.color = "yellow";
    document.getElementById("off").style.backgroundColor = "red";
    document.getElementById("on").style.backgroundColor = "grey";

}