import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
  key: 'workshop',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allMembers: [{
      name: 'Siddhant',
      email: 'siddhant.chourasia@chargebee.com',
      role: 'admin',
    },
    {
      name: 'Navneet',
      email: 'navneet.chourasia@chargebee.com',
      role: 'Tech Support',
    },
    {
      name: 'Chirag',
      email: 'chirag.chourasia@chargebee.com',
      role: 'Analyst',
    },
    ],
    saveIndex: 0,
  },
  mutations: {
    setNewMember(state, member) {
      state.allMembers.push(member);
    },
    saveMember(state, member) {
      state.saveIndex = member;
    },
    updateMember(state, member) {
      state.allMembers[state.saveIndex].role = member;
    },
    removeMember(state, member) {
      state.allMembers.splice(member, 1);
    },
  },
  actions: {},
  modules: {},
  getters: {
    getAllMembers(state) {
      return state.allMembers;
    },
  },
  plugins: [vuexPersist.plugin],
});
