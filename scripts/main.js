document.addEventListener('DOMContentLoaded', function () {
    var change = document.getElementById('change');
    var name = document.getElementById('name');
    function randomRGBGenerator() {
        // returns a string that identifies a random RGB code
        var R = Math.round(Math.random() * (255 - 0) + 0);
        var G = Math.round(Math.random() * (255 - 0) + 0);
        var B = Math.round(Math.random() * (255 - 0) + 0);
        return "rgb(".concat(R, ", ").concat(G, ", ").concat(B, ")");
    }
    function displayColor(rgb) {
        // consumes the API based on a random RGB code and assigns the hex code as the background color
        fetch("https://www.thecolorapi.com/id?rgb=".concat(rgb))
            .then(function (res) { return res.json(); })
            .then(function (color) {
            document.body.style.background = color['hex']['value'];
            name.innerText = color['name']['value'];
        });
    }
    function refreshColor() {
        var newColor = randomRGBGenerator();
        displayColor(newColor);
    }
    var firstColor = randomRGBGenerator();
    displayColor(firstColor);
    change.onclick = refreshColor;
});
