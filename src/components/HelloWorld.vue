<template>
  <div class="hello">
    <form @submit.prevent="writeRoomData">
      Room Name:<br>
      <input type="text" name="roomName" v-model="roomName"><br>
      <input type="button" value="SUBMIT!">
    </form>
    <div class="col-sm-4" >
      <table style="width:100%" v-for="room in rooms" :key="room._id">
        <tr>
          <th>{{ room.name }}</th>
        </tr>
        <tr>
          <td><router-link to="/about">JOIN</router-link></td>
        </tr> 
      </table>
    </div> 
  </div>
</template>

<script>
import db from '@/assets/firebase'

export default {
  name: 'HelloWorld',
  data() {
    return {
      roomName: "",
      rooms: ""
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
      db.ref('rooms/')
      .push({
        name: this.roomName,
        player1: profile,
        player2: {},
        turn: 'player1',
        board: [[123]]
      });
    },
    readDB() {
      db.ref('rooms/').on('value', (snapshot) => {
        this.rooms = snapshot.val()
      })
    }
  },
  created() {
    this.readDB()
  }  
}

</script>                                                                                                                                                                                                                                                                                             

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {                                                                                                                                                                                                                                                                                                    
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

table, th, td {
  border: 2px solid black;
}
</style>