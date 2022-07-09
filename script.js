function myFunction() {
    let name = document.getElementById("name").value
    let cards = document.getElementsByName("Cards");
    let card;

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].checked) {
            // alert(cards[i].value);
            card = cards[i].value;
            break;
        }
    }

    let img = document.getElementById(card);
    // img.setAttribute('crossorigin', 'anonymous'); // works for me

    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    canvas.setAttribute('width', '1000');
    canvas.setAttribute('height', '800');

    let imgFinal = new Image();
    // imgFinal.className = "my-5";
    imgFinal.crossOrigin = "anonymous";

    context.strokeRect(0, 0, canvas.width, canvas.height);

    imgFinal.onload = function () {
        context.drawImage(imgFinal, 0, 0);

        // context.font = "3em sans-serif";
        context.font = "bold 30px serif";
        context.fillStyle = "#fff";
        context.textAlign = "center";
        context.fillText(name, canvas.width / 2, 600);
        // context.fillText(name, canvas.width / 2, canvas.height / 2);

        let newImage = new Image();
        let imgURL = canvas.toDataURL();
        newImage.src = imgURL;

        let container = document.getElementById("control");
        // let A = document.createElement('a');
        // A.setAttribute('href', newImage.src);
        // A.setAttribute('download', "");
        // container.appendChild(A);
        container.parentNode.insertBefore(newImage, container.nextSibling);

    }
    imgFinal.src = `${card}.png`;

    // img.removeAttribute("crossorigin"); // works for me
    let form = document.getElementById("form");
    form.remove();
}