import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router/index.js'
const baseURL ='http://localhost:8083'

axios.defaults.withCredentials = true

// VueCookies.use(VueCookies,{expires:'1d'})
export default createStore({
  state: {
    email:'',
    password:'',
    cookie:false
  },
  getters: {
  },
  mutations: {
    setCookie(state,bool){
      state.cookie = bool;
    }
  },
  actions: {
    //registers a user to get a token
    async register(context, userInfo){
      // console.log(data)
      const {data} = await axios.post(baseURL+'/register', userInfo)
      // console.log(login);
      context.commit('setCookie',true)
      alert(data.message)
      router.push('/')      
    },
    //get info once the user has a token
    async getInfo(context){
      const api = await axios.get(baseURL+'/api')
      // console.log(api)
    },
    //logout button
    async logout(){
      console.log('Logout button was clicked:'+ document.cookie);
      const {data} = await axios.delete(baseURL+'/logout')
      alert(data.message)
      console.log(document.cookie)
    }
  },
  modules: {
  }
})
