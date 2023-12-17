Vue.component('block', {
    props: {
        pos_x: Number, pos_y: Number, color1: String, index1: Number
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
            color: this.color1,
            index: this.index1
        };
    },
    created() {
        setInterval(this.move, 50);
    },
    methods: {
        move() {
            if (this.index === 0 && this.y > 0) {
                this.y -= 0.5;
            } else if (this.index > 0 && this.y > this.$parent.positions_y[this.index - 1] + 10) {
                this.y -= 0.5;
            }
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        index_counter: 0,
        items: [],
        positions_y: [],
        positions_x: []
    },
    created() {
        setInterval(this.add_block, 5000);
        setInterval(this.accessBlockY, 50);
    },
    methods: {
        add_block() {
            this.items.push({ pos_x: this.generateRandomPos(), pos_y: 100, color1: this.generateRandomColor(), index1: this.index_counter })
            this.index_counter++;
        },
        accessBlockY() {
            for (let i = 0; i < this.items.length; i++) {
                const currentBlockY = this.$refs.myBlock[i].y;
                const currentBlockX = this.$refs.myBlock[i].x;
                this.positions_y[i] = currentBlockY;
                this.positions_x[i] = currentBlockX;
            }
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
