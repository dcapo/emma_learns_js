let deck = new Deck();
new Vue({
    el: '#app',
    data: {
        deck,
        card: deck.dealCard() 
    },
    methods: {
        getCardIconUrl() {
            if (this.card) {
                return 'img/cards/' + this.card.getIconFilename();
            }
            return '';
        }
    }

})
