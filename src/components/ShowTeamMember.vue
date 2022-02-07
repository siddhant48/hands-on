<template>
  <div class="row text-start justify-content-center mt-0">
<!--    <div class="col-1 border border-light border-end-0 border-3">-->
<!--      <img src="@/assets/logo.png" class="rounded-start img-thumbnail mt-1 mb-1"-->
<!--           alt="..." width="70%">-->
<!--    </div>-->
    <div class="col-5 border-light border-top border-bottom border-3">
      <p class="mt-2">{{ memberName }} ({{ memberRole }})<br>{{ memberEmail }}</p>
    </div>

    <div class="col-1 border border-light border-start-0 border-3">
      <div class="dropdown mt-4 text-center" v-if="!isYou">
        <img src="@/assets/three-dots-vertical.svg" alt="Bootstrap"
             class="dropdown-toggle" id="MemberDropdownButton"
             data-bs-toggle="dropdown">
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" @click.prevent="removeMember">Remove</a></li>
          <li><a class="dropdown-item" @click.prevent="editMember">Edit Role</a></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MemberRow extends Vue {
  @Prop({ required: true }) memberId!: number;

  @Prop({ required: true }) memberName!: string;

  @Prop({ required: true }) memberRole!: string;

  @Prop({ required: true }) memberEmail!: string;

  get isYou() :boolean {
    return this.memberName === 'You';
  }

  removeMember() :void {
    this.$emit('removeMemberEvent', this.memberId);
  }

  editMember() :void {
    this.$emit('editMemberEvent', this.memberId);
  }
}
</script>

<style scoped>
#MemberDropdownButton:hover {
  cursor: pointer;
}
</style>
