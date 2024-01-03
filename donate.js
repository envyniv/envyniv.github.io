window.onload = () => {
    var tysection = document.getElementById("ty");
    var buts = document.getElementsByClassName("button");

    tysection.style.display = 'none';

    for (let i = 0; i < buts.length; i++) {
        buts[i].onclick = () => {
            tysection.style.display = 'block';
            donate.style.display = 'none';
        }
    }
}
