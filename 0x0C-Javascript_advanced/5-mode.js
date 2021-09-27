function changeMode(size, weight, transform, background, color){
    
    return () => {
        document.querySelector('body').style.size = (size + 'px');
        document.querySelector('body').style.width = weight;
        document.querySelector('body').style.transform = transform;
        document.querySelector('body').style.background = background;
        document.querySelector('body').style.color = color;
    }
    
}

function main() {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(2, 'normal', 'lowercase', 'white', 'black');

    let p = document.createElement('p');
    p.innerText = 'Welcome Holberton!';
    document.body.appendChild(p);

    let btn_spooky = document.createElement("button");
    btn_spooky.setAttribute("id", "btn_spooky");
    btn_spooky.innerText = 'Spooky';
    document.body.appendChild(btn_spooky);
    document.getElementById("btn_spooky").onclick = spooky;

    let btn_dark = document.createElement("button");
    btn_dark.setAttribute("id", "btn_dark");
    btn_dark.innerText = 'Dark mode';
    document.body.appendChild(btn_dark);
    document.getElementById("btn_dark").onclick = darkMode;

    let btn_scream = document.createElement("button");
    btn_scream.setAttribute("id", "btn_scream");
    btn_scream.innerText = 'Scream mode';
    document.body.appendChild(btn_scream);
    document.getElementById("btn_scream").onclick = screamMode;
}
main();