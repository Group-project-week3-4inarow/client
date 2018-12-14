<template>
    <div class="container">
        <div class="row mb-5" style="margin-top: 7%;">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <form class="form-group">
                    <label><h3>Room name:</h3></label>
                    <input  class="form-control" type="text" name="roomName" v-model="roomName"><br>
                    <button class="btn btn-lg btn-danger" type="submit" @click.prevent="writeRoomData">CREATE ROOM</button>
                </form>
            </div>
            <div class="col-md-4"></div>
        </div>
        <div class="row mb-5">
            <div v-for="(room, index) in rooms" :key="index" class="col-md-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h3 class="card-title"><strong>{{ room.name }}</strong></h3>
                        <p class="card-text">Player 1 is waiting...</p>
                        <button type="button" class="btn btn-primary" @click.prevent="joinRoom(room)">Join</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <button type="button" class="btn btn-lg btn-warning" @click.prevent="logout">Leave game</button>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>

<script>
import db from '@/assets/firebase'

export default {
  name: 'lobby',
  data() {
    return {
      roomName: "",
      rooms: "",
    //   isJoin: false
    }
  },
  props: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    msg: String
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  methods: {
    writeRoomData() {
      let profile = {
        name: localStorage.getItem('name')
      }
      console.log('oettttt bos')
      const board = {};

      const row = 6;
      const col = 7;

      for (let i = 0; i < row; i++) {
          board[i] = {};
          for (let j = 0; j < col; j++) {
              board[i][j] = 'empty';
          }

      }

      console.log(board);
      db.ref('rooms/')
      .push({
        name: this.roomName,
        player1: profile,
        player2: {},
        turn: 'player1',
        board,
        status: 'waiting'
      });
      localStorage.setItem('role', 'player1')
    },
    readDB() {
      db.ref('rooms/').on('value', (snapshot) => {
        this.rooms = snapshot.val()
      })
    },
    joinRoom(room) {
        localStorage.setItem('role', 'player2')
    },
    logout() {
        localStorage.removeItem('name')
        localStorage.removeItem('role')
    }
  },
  created() {
    this.readDB()
  }  
}

</script>                                                                                                                                                                                                                                                                                             
