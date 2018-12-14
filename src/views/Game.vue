<template>
<div >
    <div v-if="role == turn">
        <div 
        v-for="(dot,indexRow) in boardRow" 
        :key="'row' + indexRow">
            <span
                v-for="(dot, indexCol) in boardCol" 
                :key="'col' + indexCol" 
                @click='colClicked(indexRow,indexCol)'
                >

                <span v-if="board[indexRow][indexCol] === 'empty'">
                    <span class="dot mr-1" ></span>
                </span>
                <span v-else-if="board[indexRow][indexCol] === 'player1'">
                    <span class="dot mr-1 green" ></span>
                </span>
                <span v-else>
                    <span class="dot mr-1 red" ></span>
                </span>
            </span>

        </div>
    </div>
    
    <div v-else>
        <h1>Waiting for the other player</h1>
    </div>

</div>
    
</template>

<script>
import db from '@/assets/firebase'
export default {
    name: 'gameBoard',
    data() {
        return {
            test: true,
            boardRow: 6,
            boardCol: 7,
            board: [],
            rooms: {},
            turn: 'player1',
            roomId: this.$route.params.id,
            role: localStorage.role
        }
    },
    methods: {
        generateBoard(){
            let board = []
        
            for(let i = 0; i < this.boardRow; i++){
                board.push([])
                for(let j= 0; j < this.boardCol; j++){
                    board[i].push('empty')
                }
            }
            this.board = board
        },
        colClicked(row, col) {
            let newRow = this.boardRow - 1;
            for(let i = this.boardRow - 1; i >= 0; i-- ) {
                if(this.board[i][col] == 'empty') {
                    newRow = i ;
                    break
                }
            }
            this.$set(this.board[newRow], col, localStorage.role)
            this.checkWin()
            this.turn === 'player1' ? this.turn='player2' : this.turn='player1';
            this.updateRoomData()
        },
        updateRoomData() {
            db.ref('rooms/' + this.roomId)
            .update({
                turn: this.turn,
                board: this.board,
            });
        },
        readDB() {
            db.ref('rooms/' + this.roomId).on('value', (snapshot) => {
                this.rooms = snapshot.val()
                this.board = {... this.rooms.board}
                this.turn = this.rooms.turn
            })
        },
        checkWin(){
            console.log('check wing')
            let currentBoard = this.board
            for(let i in this.board){
                for(let j = 0; j < this.board[i].length-3; j++){
                    if(this.board[i][j] !== 'empty' && this.board[i][j+1] !== 'empty' && this.board[i][j+2] !== 'empty' && this.board[i][j+3] !== 'empty'){
                        alert(this.board[i][j] + 'win')
                    }
                }
            }
        }
    },

    created() {
        this.readDB() 
        this.generateBoard()
        // this.checkWin()
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
    background-color: lightgreen
}
.red{
    background-color: red
}
</style>
