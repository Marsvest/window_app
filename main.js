var block = new Vue({
    el: '#block',
    data: {
        x: 0,
        y: 0,
        color: 'rgb(255,255,255)'
    },
    created() {
        this.spawn()
        this.intervalId = setInterval(this.move, 50);
    },
    methods: {
        generateRandomColor() {
            const randomRed = Math.floor(Math.random() * 256);
            const randomGreen = Math.floor(Math.random() * 256);
            const randomBlue = Math.floor(Math.random() * 256);

            return `rgb(${randomRed},${randomGreen},${randomBlue})`;
        },
        generateRandomPos() {
            const random = Math.floor(Math.random() * 83);

            return random;
        },
        spawn() {
            this.x = this.generateRandomPos();
            this.y = 100
            this.color = this.generateRandomColor();
        },
        move() {
            if (this.y > 0) this.y -= 0.5;
        }
    }
});
