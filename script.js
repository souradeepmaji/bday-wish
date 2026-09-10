function openSurprise() {

    const welcome = document.getElementById("welcome");
    const surprise = document.getElementById("surprise");
    const music = document.getElementById("birthdayMusic");

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        surprise.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);


    // Start music after the user's button click
    music.play().catch(() => {
        console.log("Music could not start automatically.");
    });

}


function toggleMusic() {

    const music = document.getElementById("birthdayMusic");
    const button = document.getElementById("musicButton");

    if (music.paused) {

        music.play();

        button.innerHTML = "🎵";

    } else {

        music.pause();

        button.innerHTML = "🔇";

    }

}


function showFinalMessage() {

    const message = document.getElementById("finalMessage");

    message.classList.remove("hidden-message");

    message.classList.add("show");

}