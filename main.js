Vue.component('block', {
    props: {
        pos_x: Number, pos_y: Number, color1: String
    }
    ,
    template: `
    <div id="block" :style="{ left: x + '%', bottom: y + '%', backgroundColor: color }">
    </div>
    `,
    data() {
        return {
            x: this.pos_x,
            y: this.pos_y,
            color: this.color1
        };
    },
    created() {
        setInterval(this.move, 50);
    },
    methods: {
        move() {
            if (this.y > 0) this.y -= 0.5;
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        items: []
    },
    created() {
        setInterval(this.add_block, 2000);
    },
    methods: {
        add_block() {
            this.items.push({ pos_x: this.generateRandomPos(), pos_y: 100, color1: this.generateRandomColor() })
        },
        generateRandomColor() {
            const randomRed = Math.floor(Math.random() * 256);
            const randomGreen = Math.floor(Math.random() * 256);
            const randomBlue = Math.floor(Math.random() * 256);

            return `rgb(${randomRed},${randomGreen},${randomBlue})`;
        },
        generateRandomPos() {
            const random = Math.floor(Math.random() * 83);

            return random;
        }
    }
})