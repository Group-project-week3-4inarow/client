<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo_kite.png" style="margin-top: 25%;">
    <div class="row mt-4">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <form class="form-group">
          <h2>Let's play!</h2>
          <input v-model="user.name" class="form-control mb-3" type="text" placeholder="Enter your name">
          
          <button class="btn btn-primary btn-lg" @click.prevent="userLogin">
            <router-link to="/lobby" style="color: white; text-decoration: none;">
              Play
            </router-link>
          </button>
        </form>   
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      user: {
        name: ''
      }
    }
  },
  methods: {
    userLogin() {
      localStorage.setItem('name', this.user.name)
    }
  }
}
</script>
