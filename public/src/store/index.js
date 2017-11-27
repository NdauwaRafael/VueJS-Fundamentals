import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


const state = {
  services: [],
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
store.commit('GET_SERVICES');
export default store;
