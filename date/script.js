let messages = ["pleasee", "Sige na e du", "isa", "dalawa", "Please🥹", "sige na e, dugayon pagid abi", "Adi pleasee🙏", "pindot kapa ka no ha😤"];
let noCount = 0;
let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let messageText = document.getElementById("message");

noButton.addEventListener("click", rejectLove);
yesButton.addEventListener("click", acceptLove);

function rejectLove() {
    if (noCount < messages.length) {
        messageText.innerText = messages[noCount];
        noCount++;
        noButton.style.transform = `scale(${1 - noCount * 0.1})`;
        yesButton.style.transform = `scale(${1 + noCount * 0.1})`;
    }
    if (noCount === messages.length) {
        noButton.style.display = "none";
    }
}

function acceptLove() {
    document.getElementById("valentine").innerHTML = `
        <img src="https://media1.tenor.com/m/aEWN44So2ckAAAAC/kiss-kisses.gif" class="gif">
        <div class="question">na ba loveyouuuuu mwaaaaaa</div>
    `;
    launchConfetti();
    startHeartRain();
}

function launchConfetti() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function startHeartRain() {
    const heartContainer = document.getElementById("heart-container");
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
