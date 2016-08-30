Vue.component('cell', {
    template: '#cellTemplate',
    props: ['cell']
});

new Vue({
    el: 'body',
    data: {
        turn: 0, 
        grid: [
            [{ selection: '' }, { selection: '' }, { selection: '' }],
            [{ selection: '' }, { selection: '' }, { selection: '' }],
            [{ selection: '' }, { selection: '' }, { selection: '' }]
        ],
        isGameOver: false,
        message: ''
    },
    methods: {
        onPickCell(i, j) {
            if (!this.grid[i][j].selection && !this.isGameOver) {
                let selection = (this.turn % 2 === 0) ? 'X' : 'O';
                this.grid[i][j].selection = selection;

                let winner = findWinner(this.grid);
                if (winner) {
                    this.message = `Game Over! ${winner} Wins!`;
                    this.isGameOver = true;
                }
                this.turn++;
            }
        }
    }
});

