Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)];
};

class Deck
{
    constructor() {
        // Write me!
    }

    dealCard() {
        // Write me!
        return new Card(0);
    }
}

class Card
{
    constructor(cardIndex) {
        // Write me!
    }

    getSuit() {
        let suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
        // Write me!
    }

    getRank() {
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10',
                     'Jack', 'Queen', 'King', 'Ace'];
        // Write me!
    }

    getIconFilename() {
        // Write me!
        return 'henry_farts.png';
    }

    toString() {
        // Write me!
        return 'henry farts';
    }
}
