<template>
  <div id="hello">
    <div id="nav">
      <!-- <ul id="card"> -->
      <p id="box" v-for="(i,index) in members" v-bind:key="index">
        <br> {{ i.name }} ({{ i.role }})
        <input type="button" id="remove" @click='remove(index)' value="🚮">
        <router-link to="/update">
          <input type="button" id="edit" @click="send(index)" value="🖊️">
        </router-link><br>{{ i.mail }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  methods: {
    remove(index): void {
      this.$store.commit('removeMember', index);
    },
    send(index): void {
      this.$store.commit('saveMember', index);
    },
  },
})

export default class HelloWorld extends Vue {
  members = []

  mounted() : void{
    this.members = this.$store.getters.getAllMembers;
  }

  computed() : void{
    this.members = this.$store.getters.getAllMembers;
  }
}

</script>

<style scoped lang="scss">
#hello {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-left: 250px;

  p {
    padding-left: 20px;
    padding-right: 20px;
    text-align: left;
    font-weight: bold;
    color: mintcream;
    background-color: black;
    width: 80%;
    height: 80px;
  }

}

 #smtg{
  padding-top: 10px;
}

#remove, #edit {
  background-color: green;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin: 4px 2px;
  border-radius: 8px;
  cursor: pointer;
  float: right;
}
</style>
