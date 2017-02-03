/**
 * 
 * @authors chenshw (chenshw@seaway.net.cn)
 * @date    2016-11-22 15:03:19
 * @version $Id$
 * @description 
 * @update [user] [date] [instruction]
 */

const state = {
    user: {
        img: "images/head.png",
        account: "211233122",
        name: "csw1221",
        phone: "186****7527",
        assets:"21122121"
    },
    isLogin: true
}

const mutations = {
    UPDATE_USER(state, user) {
        state.user = user;
    },
    UPDATE_ISLOGIN(state, islogin) {
        state.isLogin = islogin;
    }
}
const actions = {
    LOGIN({ commit, state }, user) {
        commit("UPDATE_USER", user);
        commit("UPDATE_ISLOGIN", true);
    },
    LOGOUT({ commit, state }) {
        commit("UPDATE_ISLOGIN", false);
     
    }
}

export default {
    state,
    mutations,
    actions
}
