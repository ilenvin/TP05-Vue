import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            user: {
                name:'ei',
                gender: 'F',
                phone: '012345678',
                id: 'basdfa-asdfa-asdfad'
            },
            posts: [
            {
                title: "New Title",
                content: "blah blah ... of the new title",
                postedAt: "09/04/2021 15:55:20",
                postedBy: "basdfa-asdfa-asdfad",
                id: "asdfa-asdfa-asdfa"
            },
            {
                title: "New Title 1",
                content: "blah blah ... of the new title 1",
                postedAt: "09/04/2021 15:55:20",
                postedBy: "basdfa-asdfa-asdfad",
                id: "asdfb-asdfa-asdfa"
            }
            ],
            comments: [
            {
                content: "wow ... amazing ...",
                commentedAt: "09/04/2021 15:57:20",
                commentedBy: "asdfa-asdfa-asdfa",
                postId: "asdfa-asdfa-asdfa",
                id: "ueueus-owiiw-iwiww"
            },
            {
                content: "Another comment",
                commentedAt: "09/04/2021 15:57:20",
                commentedBy: "asdfa-asdfa-asdfa",
                postId: "asdfa-asdfa-asdfa",
                id: "ueueus-owiiw-iwiww"
            },
            {
                content: "wow ... amazing ...111",
                commentedAt: "09/04/2021 15:57:20",
                commentedBy: "asdfa-asdfa-asdfa",
                postId: "asdfb-asdfa-asdfa",
                id: "ueueuy-owiiw-iwiww"
            }
            ]
        }
    },
    mutations: {

    },
    actions: {
  
    },
    getters: {
        getPosts(state) {
        return state.posts
    },
    getComments(state) {
        return state.comments
    },
    getCommentsByPost: (state) => (postId) => {
        return state.comments.filter(comment => comment.postId == postId)
    }
    }
})

const app = createApp(App)
app.use(store)
app.mount('#app')
