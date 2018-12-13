<template>
<div >
    <div v-for="(dot,indexRow) in boardRow" :key="'row' + indexRow">
        <span
            v-for="(dot, indexCol) in boardCol" 
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
            boardRow: 6,
            boardCol: 7,
            board: []
        }
    },
    methods: {
        colClicked(row, col) {
            console.log(row,col)
            let newRow = this.boardRow - 1;
            // console.log(this.board[5])
            for(let i = this.boardRow - 1; i >= 0; i-- ) {
                console.log(this.board[i][col])
                if(this.board[i][col] == 'empty') {
                    newRow = i ;
                    console.log("oeoeotoe", i)
                    break
                }
            }
            this.$set(this.board[newRow], col, 'green')
        }
    },

    created() {
        let board = []
        
        for(let i = 0; i < this.boardRow; i++){
            board.push([])
            for(let j= 0; j < this.boardCol; j++){
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
