<template>
  <div class="add-member-form">
    <div class="close-button" ><font-awesome-icon icon="window-close"/></div>
    <hr>
    <div class="content">
      <h2>Invite a team member to use ChargeBee</h2>
      <hr>
      <p>You can either let your team members access everything in this site,
        or assign specific roles to them</p>
      <br>
      <label>Name </label>
      <input type="email" v-model="name" placeholder="John">
      <br>
      <label>Email </label>
      <input type="email" v-model="emailVal" placeholder="abc@chargee.com">
<!--      <input type="email" class="form-control" v-model="emailVal" id="exampleInputEmail1"-->
<!--             aria-describedby="emailHelp" placeholder="Enter email" margin='0px'>-->
      <br>
      <h4>Select User Access Level</h4><br>
        <input type="radio" v-model="roleVal" value="Support">
        <label>Tech Support</label><hr>
        <input type="radio" v-model="roleVal" value="Analyst">
        <label>Analyst</label><hr>
        <input type="radio" v-model="roleVal" value="Admin">
        <label>Admin</label>
      </div>
    <div class="add-member-buttons">
      <button class="add-button" @click="addMember">Add Member</button>
    </div>
    <div class="add-member-buttons">
      <button class="add-button" @click="close">Close</button>
    </div>
<!--    {{emailVal}} {{rolesVal}}-->
  </div>
</template>

<script>
export default {
  name: 'invite-members',
  data() {
    return {
      name: undefined,
      emailVal: undefined,
      roleVal: undefined,
    };
  },
  methods: {
    addMember() {
      this.$store.commit('setNewMember', {
        name: this.name,
        role: this.roleVal,
        mail: this.emailVal,
      });
      alert('Added');
      this.$router.push('/');
    },
    close() {
      this.$router.push('/');
    },
  },

};
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
