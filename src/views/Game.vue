<template>
<div >
    <div v-for="(dot,indexRow) in row" :key="'row' + indexRow">
        <span
            v-for="(dot, indexCol) in col" 
            :key="'col' + indexCol" 
            @click='colClicked(indexRow,indexCol)'
            >

            <span v-if="board[indexRow][indexCol] === 'empty'">
                <span class="dot mr-1" ></span>
            </span>
            <span v-else>
                <span class="dot mr-1 green" ></span>
            </span>
        </span>

    </div>

</div>
    
</template>

<script>
export default {
    name: 'gameBoard',
    data() {
        return {
            test: true,
            row: 6,
            col: 7,
            board: []
        }
    },
    methods: {
        colClicked(row, col) {
            console.log(row,col)
            this.$set(this.board[row], col, 'green')
            // this.board[row][col] = 'green'
        }
    },

    created() {
        let board = []
        
        for(let i = 0; i < this.row; i++){
            board.push([])
            for(let j= 0; j < this.col; j++){
                board[i].push('empty')
            }
        }
        this.board = board
    }
}
</script>

<style>
.dot {
  height: 75px;
  width: 75px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
.green{
    background-color: green
}
</style>
