/* =========================================
   RISHAV RAKHI EXPERIENCE
========================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    if (loader) {

        gsap.to(loader, {
            opacity: 0,
            duration: 0.9,
            delay: 0.8,
            ease: "power2.inOut",

            onComplete: () => {

                loader.remove();

                heroIntro();

            }
        });

    } else {

        heroIntro();

    }

});


/* =========================================
   HERO INTRO
========================================= */

function heroIntro() {

    gsap.from(".hero-eyebrow", {
        opacity: 0,
        y: 30,
        duration: 0.8
    });

    gsap.from(".hero-title", {
        opacity: 0,
        scale: 0.7,
        duration: 1.2,
        ease: "back.out(1.7)"
    });

    gsap.from(".hero-divider", {
        opacity: 0,
        scaleX: 0,
        duration: 0.8,
        delay: 0.4
    });

    gsap.from(".hero-text", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        delay: 0.5
    });

    gsap.from(".hero-small", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.7
    });

    gsap.from("#startBtn", {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.8,
        delay: 0.9,
        ease: "back.out(2)"
    });

}
/* =========================================
   RAKHI SONG - AUTO PLAY MUSIC
========================================= */

const rakhiMusic = document.getElementById("rakhiMusic");

let musicStarted = false;

/*
    Try to start music immediately
*/
function startRakhiMusic() {

    if (musicStarted) return;

    rakhiMusic.volume = 1;

    const playPromise = rakhiMusic.play();

    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                musicStarted = true;

                console.log("❤️ Rakhi music started");

            })
            .catch(() => {

                /*
                    Browser autoplay blocked.
                    Music will start on first interaction.
                */

                console.log(
                    "Autoplay blocked. Waiting for user interaction..."
                );

            });

    }

}


/*
    Start music when website loads
*/
window.addEventListener("load", () => {

    startRakhiMusic();

});


/*
    If browser blocks autoplay,
    start music on first user interaction.
*/
[
    "click",
    "touchstart",
    "keydown",
    "scroll"
].forEach(eventName => {

    window.addEventListener(
        eventName,
        () => {

            if (!musicStarted) {
                startRakhiMusic();
            }

        },
        {
            once: false,
            passive: true
        }
    );

});


/*
    Backup:
    If song reaches the end,
    start again automatically.
*/
rakhiMusic.addEventListener("ended", () => {

    rakhiMusic.currentTime = 0;

    rakhiMusic.play()
        .then(() => {

            musicStarted = true;

        })
        .catch(() => {

            musicStarted = false;

        });

});

/* =========================================
   FLOATING PARTICLES
========================================= */

const floatingHearts =
    document.getElementById("floatingHearts");

if (floatingHearts) {

    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("span");

        heart.className = "particle";

        heart.innerHTML =
            Math.random() > 0.5
                ? "♥"
                : "✦";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (7 + Math.random() * 10) + "s";

        heart.style.animationDelay =
            (-Math.random() * 15) + "s";

        heart.style.fontSize =
            (10 + Math.random() * 20) + "px";

        floatingHearts.appendChild(heart);

    }

}


/* =========================================
   SCROLL PROGRESS
========================================= */

window.addEventListener("scroll", () => {

    const max =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        max > 0
            ? (window.scrollY / max) * 100
            : 0;

    const progressBar =
        document.querySelector(".progress-bar");

    if (progressBar) {

        progressBar.style.width =
            percentage + "%";

    }

});


/* =========================================
   START BUTTON
   ALSO STARTS REAL MUSIC
========================================= */

const startBtn =
    document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", () => {

        /*
            Browser user interaction ke andar
            actual music start hoga.
        */

        if (!musicOn) {

            startMusic();

        }


        const rakhiSection =
            document.getElementById("rakhi");

        if (rakhiSection) {

            rakhiSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


/* =========================================
   SCROLL REVEALS
========================================= */

gsap.utils.toArray(".reveal").forEach(element => {

    gsap.from(element, {

        opacity: 0,

        y: 60,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: element,

            start: "top 82%",

            toggleActions:
                "play none none reverse"

        }

    });

});


gsap.utils.toArray(".reveal-left").forEach(element => {

    gsap.from(element, {

        opacity: 0,

        x: -80,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: element,

            start: "top 80%"

        }

    });

});


gsap.utils.toArray(".reveal-right").forEach(element => {

    gsap.from(element, {

        opacity: 0,

        x: 80,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: element,

            start: "top 80%"

        }

    });

});


/* =========================================
   WISH CARD STAGGER
========================================= */

gsap.from(".wish-card", {

    opacity: 0,

    y: 70,

    scale: 0.9,

    duration: 0.8,

    stagger: 0.15,

    ease: "back.out(1.5)",

    scrollTrigger: {

        trigger: ".wish-grid",

        start: "top 75%"

    }

});


/* =========================================
   RAKHI TYING
========================================= */

let rakhiDone = false;

const tieBtn =
    document.getElementById("tieBtn");

if (tieBtn) {

    tieBtn.addEventListener("click", () => {

        if (rakhiDone) return;

        rakhiDone = true;


        const thread =
            document.getElementById("rakhiThread");

        const highlight =
            document.getElementById("rakhiHighlight");

        const center =
            document.getElementById("rakhiCenter");

        const sparkles =
            document.getElementById("sparkles");

        const badge =
            document.getElementById("rakhiBadge");

        const status =
            document.getElementById("tieStatus");


        if (!thread) return;


        const length =
            thread.getTotalLength();


        thread.style.strokeDasharray =
            length;

        thread.style.strokeDashoffset =
            length;


        if (highlight) {

            highlight.style.strokeDasharray =
                length;

            highlight.style.strokeDashoffset =
                length;

        }


        if (status) {

            status.textContent =
                "🧵 Behen Rakhi baandh rahi hai...";

        }


        const timeline =
            gsap.timeline();


        timeline

            /* Thread */

            .to(thread, {

                strokeDashoffset: 0,

                duration: 1.7,

                ease: "power2.inOut"

            })


            /* Highlight */

            .to(

                highlight,

                {

                    strokeDashoffset: 0,

                    duration: 1.1,

                    ease: "power2.inOut"

                },

                "-=.8"

            )


            /* Center */

            .to(center, {

                opacity: 1,

                scale: 0.1,

                duration: 0.1

            })


            .to(center, {

                scale: 1.5,

                duration: 0.45,

                ease: "back.out(4)"

            })


            /* Sparkles */

            .to(sparkles, {

                opacity: 1,

                duration: 0.2

            })


            .fromTo(

                "#sparkles text",

                {

                    opacity: 0,

                    scale: 0

                },

                {

                    opacity: 1,

                    scale: 1,

                    stagger: 0.08,

                    duration: 0.25,

                    ease: "back.out(3)"

                }

            )


            /* Image heartbeat */

            .to("#characterFrame", {

                scale: 1.035,

                duration: 0.18,

                yoyo: true,

                repeat: 3

            })


            /* Badge */

            .to(badge, {

                opacity: 1,

                y: 0,

                duration: 0.7,

                ease: "back.out(2)"

            })


            .call(() => {

                if (status) {

                    status.textContent =
                        "❤️ Rakhi bandhi! Ab tum officially meri Big Brother ho!";

                }

                confettiBurst();

            });

    });

}


/* =========================================
   CONFETTI
========================================= */

function confettiBurst() {

    const colors = [

        "#a50717",

        "#e11d35",

        "#ffffff",

        "#ffd05c"

    ];


    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");


        piece.style.position =
            "fixed";

        piece.style.left =
            "50%";

        piece.style.top =
            "50%";

        piece.style.width =
            "7px";

        piece.style.height =
            "12px";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        piece.style.zIndex =
            "99999";

        piece.style.pointerEvents =
            "none";


        document.body.appendChild(piece);


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            200 +
            Math.random() *
            450;


        gsap.to(piece, {

            x:
                Math.cos(angle) *
                distance,

            y:
                Math.sin(angle) *
                distance,

            rotation:
                Math.random() *
                720,

            opacity: 0,

            duration:
                1.5 +
                Math.random(),

            ease: "power2.out",

            onComplete: () => {

                piece.remove();

            }

        });

    }

}


/* =========================================
   PROMISE GAME
========================================= */

const promiseItems =
    document.querySelectorAll(
        ".promise-item"
    );

let promisesDone = 0;


promiseItems.forEach(item => {

    item.addEventListener("click", () => {

        if (item.classList.contains("done")) {

            return;

        }


        item.classList.add("done");


        const icon =
            item.querySelector("i");

        if (icon) {

            icon.textContent = "✓";

        }


        promisesDone++;


        const percentage =
            (promisesDone / 4) * 100;


        const progress =
            document.getElementById(
                "promiseProgress"
            );

        if (progress) {

            progress.style.width =
                percentage + "%";

        }


        const counter =
            document.getElementById(
                "promiseCounter"
            );

        if (counter) {

            counter.textContent =
                `${promisesDone} / 4 promises`;

        }


        gsap.fromTo(

            item,

            {
                scale: 0.95
            },

            {

                scale: 1,

                duration: 0.4,

                ease: "back.out(3)"

            }

        );


        if (promisesDone === 4) {

            const success =
                document.getElementById(
                    "promiseSuccess"
                );


            if (success) {

                success.style.display =
                    "block";


                gsap.fromTo(

                    success,

                    {

                        opacity: 0,

                        y: 30,

                        scale: 0.8

                    },

                    {

                        opacity: 1,

                        y: 0,

                        scale: 1,

                        duration: 1,

                        ease: "back.out(2)"

                    }

                );

            }


            confettiBurst();

        }

    });

});


/* =========================================
   CHAT ANIMATION
========================================= */

if (document.querySelector(".chat-box")) {

    ScrollTrigger.create({

        trigger: ".chat-box",

        start: "top 75%",

        once: true,

        onEnter: () => {

            gsap.from(".chat", {

                opacity: 0,

                y: 25,

                duration: 0.5,

                stagger: 0.25,

                ease: "power2.out"

            });

        }

    });

}


/* =========================================
   JOKES
========================================= */

const jokes = [

    "Bhai, gussa kam. 😌",

    "Bad girls = distance maintained. 👀😂",

    "Gali ka monthly quota reduce karo. 🤐",

    "Smile karo, Big Brother. ❤️",

    "Rakhi bandhi hai, ab behen ki baat maan-ni padegi. 😏",

    "Gift bhi dena hai... ye important point hai. 🎁😂",

    "Bhai hone ka tax = lifetime protection. 😂❤️",

    "Behen ko ignore karna strictly prohibited. 🚫😂"

];


const jokeBtn =
    document.getElementById("jokeBtn");


if (jokeBtn) {

    jokeBtn.addEventListener("click", () => {

        const result =
            document.getElementById(
                "jokeResult"
            );


        const random =
            jokes[
                Math.floor(
                    Math.random() *
                    jokes.length
                )
            ];


        if (result) {

            result.textContent =
                random;


            gsap.fromTo(

                result,

                {

                    opacity: 0,

                    y: 12,

                    scale: 0.8

                },

                {

                    opacity: 1,

                    y: 0,

                    scale: 1,

                    duration: 0.5,

                    ease: "back.out(2)"

                }

            );

        }

    });

}


/* =========================================
   PHOTO MODAL
========================================= */

const photoCards =
    document.querySelectorAll(
        ".photo-card"
    );


const modal =
    document.getElementById(
        "photoModal"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const closeModal =
    document.getElementById(
        "closeModal"
    );


photoCards.forEach(card => {

    card.addEventListener("click", () => {

        if (!modal) return;


        if (modalImage) {

            modalImage.src =
                card.dataset.image;

        }


        if (modalTitle) {

            modalTitle.textContent =
                card.dataset.title;

        }


        modal.classList.add("show");


        if (modalImage) {

            gsap.fromTo(

                modalImage,

                {

                    scale: 0.7,

                    opacity: 0

                },

                {

                    scale: 1,

                    opacity: 1,

                    duration: 0.6,

                    ease: "back.out(2)"

                }

            );

        }

    });

});


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closePhotoModal
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {

                closePhotoModal();

            }

        }
    );

}


function closePhotoModal() {

    if (modal) {

        modal.classList.remove("show");

    }

}


/* =========================================
   LETTER SCROLL EFFECT
========================================= */

if (document.querySelector(".letter-text")) {

    gsap.from(".letter-text", {

        opacity: 0,

        y: 30,

        duration: 1.2,

        scrollTrigger: {

            trigger: ".letter-card",

            start: "top 70%"

        }

    });

}


/* =========================================
   SECRET UNLOCK
========================================= */

let secretUnlocked = false;


const unlockBtn =
    document.getElementById(
        "unlockBtn"
    );


if (unlockBtn) {

    unlockBtn.addEventListener("click", () => {

        if (secretUnlocked) return;

        secretUnlocked = true;


        const button =
            document.getElementById(
                "unlockBtn"
            );


        const countdown =
            document.getElementById(
                "countdown"
            );


        const secret =
            document.getElementById(
                "secretMessage"
            );


        const lock =
            document.getElementById(
                "lockIcon"
            );


        button.style.display =
            "none";


        if (lock) {

            lock.textContent =
                "🔓";

        }


        if (countdown) {

            countdown.style.display =
                "block";

        }


        const timeline =
            gsap.timeline();


        timeline


            .to(countdown, {

                textContent: "3",

                scale: 1,

                duration: 0.5

            })


            .to(countdown, {

                textContent: "2",

                scale: 1.3,

                duration: 0.5

            })


            .to(countdown, {

                textContent: "1",

                scale: 1.5,

                duration: 0.5

            })


            .to(countdown, {

                textContent: "❤️",

                scale: 2,

                duration: 0.6

            })


            .to(countdown, {

                opacity: 0,

                scale: 3,

                duration: 0.5

            })


            .set(secret, {

                display: "block"

            })


            .fromTo(

                secret,

                {

                    opacity: 0,

                    y: 50,

                    scale: 0.7

                },

                {

                    opacity: 1,

                    y: 0,

                    scale: 1,

                    duration: 1,

                    ease: "back.out(1.7)"

                }

            )


            .call(() => {

                confettiBurst();

                heartExplosion();

            });

    });

}


/* =========================================
   HEART EXPLOSION
========================================= */

function heartExplosion() {

    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");


        heart.textContent =
            Math.random() > 0.4
                ? "❤️"
                : "✦";


        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.zIndex =
            "99999";

        heart.style.pointerEvents =
            "none";


        document.body.appendChild(
            heart
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            150 +
            Math.random() *
            400;


        gsap.to(heart, {

            x:
                Math.cos(angle) *
                distance,

            y:
                Math.sin(angle) *
                distance,

            rotation:
                Math.random() *
                360,

            opacity: 0,

            scale:
                0.5 +
                Math.random(),

            duration:
                1.5 +
                Math.random(),

            ease: "power3.out",

            onComplete: () => {

                heart.remove();

            }

        });

    }

}


/* =========================================
   FINAL CELEBRATION
   FIXED - NO ERROR IF ELEMENT DOES NOT EXIST
========================================= */

const finalCelebrate =
    document.getElementById(
        "finalCelebrate"
    );


if (finalCelebrate) {

    finalCelebrate.addEventListener(
        "click",
        () => {

            heartExplosion();

            confettiBurst();


            const finalSection =
                document.querySelector(
                    ".final-section"
                );


            if (finalSection) {

                finalSection.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }
    );

}


/* =========================================
   MAGNETIC BUTTONS
========================================= */

document
    .querySelectorAll(".magnetic")
    .forEach(button => {

        button.addEventListener(
            "mousemove",
            event => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                gsap.to(button, {

                    x: x * 0.18,

                    y: y * 0.18,

                    duration: 0.3,

                    ease: "power2.out"

                });

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                gsap.to(button, {

                    x: 0,

                    y: 0,

                    duration: 0.5,

                    ease: "elastic.out(1,.4)"

                });

            }
        );

    });


/* =========================================
   CURSOR HEART
========================================= */

const cursorHeart =
    document.querySelector(
        ".cursor-heart"
    );


const cursorSparkle =
    document.querySelector(
        ".cursor-sparkle"
    );


window.addEventListener(
    "mousemove",
    event => {

        if (cursorHeart) {

            gsap.to(cursorHeart, {

                x: event.clientX,

                y: event.clientY,

                duration: 0.2

            });

            cursorHeart.style.opacity =
                "1";

        }


        if (cursorSparkle) {

            gsap.to(cursorSparkle, {

                x: event.clientX - 3,

                y: event.clientY - 3,

                duration: 0.1

            });

        }

    }
);


/* =========================================
   PHOTO REVEAL
========================================= */

gsap.from(".photo-card", {

    opacity: 0,

    y: 80,

    rotate: 3,

    scale: 0.9,

    duration: 1,

    stagger: 0.2,

    ease: "back.out(1.5)",

    scrollTrigger: {

        trigger: ".photo-grid",

        start: "top 75%"

    }

});


/* =========================================
   FINAL SECTION
========================================= */

if (document.querySelector(".final-section")) {

    ScrollTrigger.create({

        trigger: ".final-section",

        start: "top 70%",

        once: true,

        onEnter: () => {

            gsap.from(".final-content", {

                opacity: 0,

                y: 60,

                scale: 0.9,

                duration: 1.3,

                ease: "back.out(1.5)"

            });


            setTimeout(() => {

                heartExplosion();

            }, 900);

        }

    });

}


/* =========================================
   PARALLAX HERO
========================================= */

window.addEventListener(
    "mousemove",
    event => {

        const x =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 20;


        const y =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 20;


        gsap.to(
            ".hero-title",
            {

                x: x * 0.25,

                y: y * 0.25,

                duration: 0.8

            }
        );


        gsap.to(
            ".hero-glow",
            {

                x: x * 2,

                y: y * 2,

                duration: 1.2

            }
        );

    }
);


/* =========================================
   ESCAPE MODAL
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closePhotoModal();

        }

    }
);


/* =========================================
   AUDIO DEBUG
========================================= */

if (rakhiMusic) {

    rakhiMusic.addEventListener(
        "error",
        () => {

            console.error(
                "❌ Audio file not found. Check this path:",
                "SONG/Tenu Sang Rakhna Song.mp3"
            );

        }
    );


    rakhiMusic.addEventListener(
        "canplaythrough",
        () => {

            console.log(
                "✅ Rakhi song loaded successfully."
            );

        }
    );

}