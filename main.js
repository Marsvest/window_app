var block = new Vue({
    el: '#block',
    data: {
        x: 0,
        y: 0,
        color: 'rgb(0,100,255)'
    },
    created() {
        this.intervalId = setInterval(this.spawn(), 2000);
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
            this.y = this.generateRandomPos();
            this.color = this.generateRandomColor();
        }
    }
});
