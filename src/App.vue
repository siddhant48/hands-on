<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-between mt-5 mb-5 text-center">
        <div class="col-4">
          <br>
          <h2>Team Members</h2>
          <div class="col-4">
          <router-link to="/invite">
            <button type="button" class="btn" id="show-modal-add">
              + Invite Team Members
            </button>
          </router-link>
        </div>
        </div>
      </div>
      <div>
        <router-view/>
      </div>
    </div>
<!--    <transition>-->
<!--      <invite-members v-if='checkInvite' @close='checkInvite= false'></invite-members>-->
<!--    </transition>-->
<!--    <show-team-member member-id="1" member-name="you" member-role="admin"-->
<!--                      member-email="siddhant.chourasia@chargebee.com"></show-team-member>-->
  </div>

</template>
<script lang="ts">
// import InviteMembers from '@/components/InviteMembers.vue';
// import ShowTeamMember from '@/components/ShowTeamMember.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class HelloWorld extends Vue {
  members =[]

  mounted() {
    this.members = this.$store.getters.getAllMembers;
  }

  computed() {
    this.members = this.$store.getters.getAllMembers;
  }
}

</script>
<style lang="scss">
h1 {
  margin: 0;
}
.btn {
  background-color: green;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
