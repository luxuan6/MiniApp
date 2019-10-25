import { code2session, fingerVerify, decryptPhone } from '../../service'

const state = {
    openid: '',
    phone: ''
};

const mutations = {
    updateOpenid(state, payload) {
        state.openid = payload;
    }
};

const actions = {
    async login({ commit }, params) {
        let data = await code2session(params);
        // console.log('data...', data);
        if (data.openid) {
            commit('updateOpenid', data.openid);
        }
    },

    async fingerVerify({ state: { openid } }, params) {
        params.openid = openid;
        let data = await fingerVerify(params);
        return data && data.code;
    },

    async decryptPhone({ commit }, params) {
        let data = await decryptPhone(params);
        console.log('data...', data);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}