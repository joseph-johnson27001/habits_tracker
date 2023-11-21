import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userName: "Joe Johnson",
    userTitle: "Productivity Wizard",
    selectedHabitData: {},
    isLoading: false,
    selectedUserName: null,
    selectedUserTitle: null,
    selectedUser: false,
    activeChallenge: "",
  },
});

export default store;
