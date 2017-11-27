import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


const state = {
  services: JSON.parse(localStorage.getItem('servicelist')),
};

const getters = {
  services: state => {
    return state.services
  }
};

const mutations = {
  GET_SERVICES(state) {
    state.services = JSON.parse(localStorage.getItem('servicelist'));
  }
};

const actions = {

};


const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
