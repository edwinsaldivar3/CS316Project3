let tank = document.getElementById("tank");

let pictures = [
    "fish1.png",
    "fish2.png",
    "fish3.png",
    "fish4.png",
    "fish5.png"
];

class Fish {
    constructor() {
        this.image = document.createElement("img");

        let random = Math.floor(Math.random() * 5);
        this.image.src = pictures[random];
        this.image.className = "fish";

        this.x = Math.random() * (tank.clientWidth - 100);
        this.y = Math.random() * (tank.clientHeight - 80);

        if (Math.random() < 0.5) {
            this.direction = 1;
        }
        else {
            this.direction = -1;
        }

        this.speed = 2;

        this.image.style.left = this.x + "px";
        this.image.style.top = this.y + "px";

        tank.appendChild(this.image);

        this.image.addEventListener("click", () => {
            this.speedUp();
        });

        this.move();
        this.changeDirection();
    }

    move() {
        setInterval(() => {
            this.x = this.x + this.speed * this.direction;

            if (this.x >= tank.clientWidth - 100) {
                this.x = tank.clientWidth - 100;
                this.direction = -1;
            }

            if (this.x <= 0) {
                this.x = 0;
                this.direction = 1;
            }

            this.image.style.left = this.x + "px";
        }, 20);
    }

    changeDirection() {
        let time = Math.random() * 6000 + 2000;

        setTimeout(() => {
            if (Math.random() < 0.5) {
                this.direction = this.direction * -1;
            }

            this.changeDirection();
        }, time);
    }

    speedUp() {
        this.speed = 6;

        clearTimeout(this.timer);

        this.timer = setTimeout(() => {
            this.speed = 2;
        }, 3000);
    }
}

for (let i = 0; i < 7; i++) {
    new Fish();
}