// Function to reset scores
function newgame() {
    document.getElementById("homescore").innerText = "0";
    document.getElementById("guestscore").innerText = "0";
    checkLeader(); // Reset the leader colors as well
}

// Function to create and animate emojis
function animateEmojis(emoji) {
    for (let i = 0; i < 10; i++) {
        const emojiElement = document.createElement("div");
        emojiElement.innerText = emoji;
        emojiElement.classList.add("emoji");
        emojiElement.style.left = `${Math.random() * 100}vw`;
        emojiElement.style.top = `${Math.random() * 100}vh`;
        document.body.appendChild(emojiElement);

        emojiElement.addEventListener("animationend", () => {
            emojiElement.remove();
        });
    }
}

// Function to check and highlight the leader
function checkLeader() {
    const homeScore = parseInt(document.getElementById("homescore").innerText);
    const guestScore = parseInt(document.getElementById("guestscore").innerText);

    if (homeScore > guestScore) {
        document.getElementById("homescore").style.color = "#FFD700"; // Gold color for leader
        document.getElementById("guestscore").style.color = "#F94F6D"; // Default color for non-leader
    } else if (guestScore > homeScore) {
        document.getElementById("guestscore").style.color = "#FFD700"; // Gold color for leader
        document.getElementById("homescore").style.color = "#F94F6D"; // Default color for non-leader
    } else {
        document.getElementById("homescore").style.color = "#F94F6D"; // Default color
        document.getElementById("guestscore").style.color = "#F94F6D"; // Default color
    }
}

// Functions to increment scores and check the leader
function one() {
    let homeScore = parseInt(document.getElementById("homescore").innerText);
    let guestScore = parseInt(document.getElementById("guestscore").innerText);
    document.getElementById("homescore").innerText = homeScore + 1;

    if (homeScore + 1 > guestScore) {
        animateEmojis("🏆");
        animateEmojis("🏀");
    }

    checkLeader();
}

function two() {
    let homeScore = parseInt(document.getElementById("homescore").innerText);
    let guestScore = parseInt(document.getElementById("guestscore").innerText);
    document.getElementById("homescore").innerText = homeScore + 2;

    if (homeScore + 2 > guestScore) {
        animateEmojis("🏆");
        animateEmojis("🏀");
    }

    checkLeader();
}

function three() {
    let homeScore = parseInt(document.getElementById("homescore").innerText);
    let guestScore = parseInt(document.getElementById("guestscore").innerText);
    document.getElementById("homescore").innerText = homeScore + 3;

    if (homeScore + 3 > guestScore) {
        animateEmojis("🏆");
        animateEmojis("🏀");
    }

    checkLeader();
}

function one_guest() {
    let guestScore = parseInt(document.getElementById("guestscore").innerText);
    let homeScore = parseInt(document.getElementById("homescore").innerText);
    document.getElementById("guestscore").innerText = guestScore + 1;

    if (guestScore + 1 > homeScore) {
        animateEmojis("🏆");
        animateEmojis("🏀");
    }

    checkLeader();
}

function two_guest() {
    let guestScore = parseInt(document.getElementById("guestscore").innerText);
    let homeScore = parseInt(document.getElementById("homescore").innerText);
    document.getElementById("guestscore").innerText = guestScore + 2;

    if (guestScore + 2 > homeScore) {
        animateEmojis("🏆");
        animateEmojis("🏀");
    }

    checkLeader();
}

function three_guest() {
    let guestScore = parseInt(document.getElementById("guestscore").innerText);
    let homeScore = parseInt(document.getElementById("homescore").innerText);
    document.getElementById("guestscore").innerText = guestScore + 3;

    if (guestScore + 3 > homeScore) {
        animateEmojis("🏆");
        animateEmojis("🏀");
    }

    checkLeader();
}
