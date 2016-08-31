Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)];
};

Vue.component('hand', {
    template: '#handTemplate',
    props: ['hand']
});

new Vue({
    el: '#game',
    data: {
        hands: [
            {
                "name": "Rock",
                "icon": "img/rock.png",
            },
            {
                "name": "Paper",
                "icon": "img/paper.png",
            },
            {
                "name": "Scissors",
                "icon": "img/scissors.png",
            },
            {
                "name": "Lizard",
                "icon": "img/lizard.png",
            },
            {
                "name": "Spock",
                "icon": "img/spock.png"
            }
        ],
        userHand: { "name": "", "icon": "" },
        computerHand: { "name": "", "icon": "" },
        message: 'Choose Your Next Move!'
    },
    methods: {
        onPlayHand(userHand) {
            this.userHand = userHand;
            this.computerHand = this.hands.randomElement();
            this.message = playRound(this.userHand, this.computerHand);
        }
    }
});
