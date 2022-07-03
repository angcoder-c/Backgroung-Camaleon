document.addEventListener('DOMContentLoaded', () => {
    const change = document.getElementById('change');
    const name = document.getElementById('name');
    
    function randomRGBGenerator (): string {
        var R = Math.round(Math.random() * (255 - 0) + 0);
        var G = Math.round(Math.random() * (255 - 0) + 0);
        var B = Math.round(Math.random() * (255 - 0) + 0);
        return `rgb(${R}, ${G}, ${B})`;
    }

    function displayColor (rgb:string) {
        fetch(`https://www.thecolorapi.com/id?rgb=${rgb}`)
            .then(res => res.json())
            .then(color => {
                document.body.style.background = color['hex']['value'];
                name.innerText = color['name']['value'];
            });
    }

    function refreshColor () {
        var newColor = randomRGBGenerator();
        displayColor(newColor);
    }

    var firstColor = randomRGBGenerator();
    displayColor(firstColor);
    
    change.onclick = refreshColor;
});