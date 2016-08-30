Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)];
};

class Deck
{
    constructor() {
        this.cards = [];
        for (var i = 0; i < 51; i++) {
            this.cards.push(new Card(i));
        }
    }

    dealCard() {
        return this.cards.randomElement();
    }
}

class Card
{
    constructor(cardIndex) {
        this.index = cardIndex;
    }

    getSuit() {
        let suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
        let suit = Math.floor(this.index / 13);
        return suits[suit];
    }

    getRank() {
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
                     'Jack', 'Queen', 'King', 'Ace'];
        let rank = this.index % 13;
        return ranks[rank];
    }

    getIconFilename() {
        let rankPart = this.getRank() === '10' ? '10' : this.getRank().charAt(0);
        return rankPart + this.getSuit().charAt(0) + '.png';
    }

    toString() {
        return this.getRank() + ' of ' + this.getSuit();
    }
}
