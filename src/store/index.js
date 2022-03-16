import {
    createStore
} from 'vuex'

import VueJwtDecode from 'vue-jwt-decode'
import axios from 'axios'

export default createStore({
    state: {
        news: [],
        singleNews: [],
        singleNewsId: "",
        url: 'http://localhost:3030/api',
        login: false,
        user: [],
    },
    mutations: {
        getNews(state, news) {
            state.news = news
        },
        getSingleNews(state, singleNews) {
            state.singleNews = singleNews
        },
        getInfos(state, user) {
            state.user = user
        },
    },
    actions: {
        getNewsAction({
            commit
        }) {
            axios.get(this.state.url + '/news').then(res => {
                commit('getNews', res.data)
            })
        },
        getSingleNewsAction(id, {
            commit
        }) {
            axios.get(this.state.url + '/news/' + id).then(res => {
                commit('getSingleNews', res.data)
            })
        },
        getUserInfos({
            commit
        }) {
            let user = JSON.parse(localStorage.getItem('user'));
            if (user == null) {
                this.state.login = false;
            } else {
                console.log(user);
                const infoUser = VueJwtDecode.decode(user.token);
                commit('getInfos', infoUser);
                console.log(infoUser);
                this.state.login = true;
            }
        },
    },
    modules: {}
})