import {
    createStore
} from 'vuex'

import VueJwtDecode from 'vue-jwt-decode'
import axios from 'axios'

export default createStore({
    state: {
        news: [],
        singleNews: [],
        adminInfos: [],
        singleNewsId: "",
        // url: 'http://localhost:3030/',
        url: 'https://celine-chogan-backend.herokuapp.com/',
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
        getUserInfos(state, user) {
            state.user = user
        },
        getAdminInfos(state, adminInfos) {
            state.adminInfos = adminInfos;
            console.log(state.adminInfos)
        },
    },
    actions: {
        getNewsAction({
            commit
        }) {
            axios.get(this.state.url + 'api/news').then(res => {
                commit('getNews', res.data)
            })
        },
        getSingleNewsAction(id, {
            commit
        }) {
            axios.get(this.state.url + 'api/news/' + id).then(res => {
                commit('getSingleNews', res.data)
            })
        },
        getUserInfosAction({
            commit
        }) {
            let user = JSON.parse(localStorage.getItem('user'));
            if (user == null) {
                this.state.login = false;
            } else {
                console.log(user);
                const infoUser = VueJwtDecode.decode(user.token);
                commit('getUserInfos', infoUser);
                console.log(infoUser);
                this.state.login = true;
            }
        },
        getAdminInfosAction({
            commit
        }) {
            axios
                .get(this.state.url + "api/infos/")
                .then((res) => {
                    commit('getAdminInfos', res.data)
                    console.log(res.data)
                })
        },
    },
    modules: {}
})