<template>
  <div class="add-member-form">
    <div class="close-button" ><font-awesome-icon icon="window-close"/></div>
    <hr>
    <div class="content">
      <h2>Update Role</h2>
      <hr>
      <h4>Select User Access Level</h4><br>
      <input type="radio" v-model="roleVal" value="Support">
      <label>Tech Support</label><hr>
      <input type="radio" v-model="roleVal" value="Analyst">
      <label>Analyst</label><hr>
      <input type="radio" v-model="roleVal" value="Admin">
      <label>Admin</label>
    </div>
    <div class="add-member-buttons">
      <button class="add-button" @click="saveChange">Save changes</button>
    </div>
    <div class="add-member-buttons">
      <button class="add-button" @click="close">Close</button>
    </div>
  </div>
 </template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class edit extends Vue {
  roleVal = '';

  @Prop({ required: true })
  name!: string;

  index!: number;

  members = []

  mounted() : void{
    this.members = this.$store.getters.getAllMembers;
  }

  computed() : void{
    this.members = this.$store.getters.getAllMembers;
  }

  close() : void {
    this.$router.push('/');
  }

  saveChange() : void{
    this.$store.commit('updateMember', this.roleVal);
    this.$router.push('/');
  }
}
</script>

<style scoped>
.add-button{
  height: 30px;
  width: 140px;
  margin-left: 20px;
  background: green;
  color: white;
  border: 0;
  border-radius: 7px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  font-family: 'Courier New', Courier, monospace;
}
.add-member-buttons{
  display: inline-block;
  width: 200px;
  height: 600px;
}

.close-button{
  font-size: 20px;
  cursor: pointer;
  margin-left: 780px;
}
body {
  font-family: Arial;
}

* {
  box-sizing: border-box;
}

.dot {
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.container {
  border: 3px solid #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin-left: 300px;
  margin-right: 300px;
  padding: 0px;
}

.top {
  padding: 10px;
  background: #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.content {
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size:20px;
}
.add-member-form{
  display: block;
  height: 600px;
  width: 800px;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(68, 67, 67) 0 5px 5px 0;
  margin-top: 100px;
  margin-left: 300px;
}
</style>
