var app = new Vue({
    el: '#root',
    data: {
        obj: [
            { id: 1, image: 'img/237-700x400.jpg' },
            { id: 2, image: 'img/238-700x400.jpg' },
            { id: 3, image: 'img/239-700x400.jpg' },
            { id: 4, image: 'img/240-700x400.jpg' },
            { id: 5, image: 'img/241-700x400.jpg' },
            { id: 6, image: 'img/242-700x400.jpg' },
        ],
        indice: 0,
    },
    methods: {
        Indietro: function () {
            this.indice--;
            if (this.indice < 0) {
                return this.indice = 5;
            }
        },

        Avanti: function () {
            this.indice++;
            if (this.indice > 5) {
                return this.indice = 0;
            }
        },
    }
})