import axios from 'axios'
//import JwtService from "@/core/services/JwtService";
//import {useRouter} from "vue-router";
import router from "../../router";
import {nextTick} from "vue";
//import {useAuthStore} from "@/stores/auth";

// create an axios instance
const service = axios.create({
    //  withCredentials: true,
    baseURL: import.meta.env.VITE_APP_API_URL, // base_url
    timeout: 100000 // request timeout
})
service.defaults.headers.common['Accept'] = "application/json";

// request interceptor
service.interceptors.request.use(
    config => {
        // Do something before request is sent
       // if (JwtService.getToken()) {
            //config.headers['Authorization'] = 'Bearer ' + JwtService.getToken()
           // config.headers.authorization = 'Bearer' //+ JwtService.getToken()
            //config.headers['X-Token'] = 'Bearer ' + JwtService.getToken()
        //}
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    config => {
        // if (JwtService.getToken()) {
        //     //config.headers['Authorization'] = 'Bearer ' + JwtService.getToken()
        //     config.headers.authorization = 'Bearer ' + JwtService.getToken()
        //     //config.headers['X-Token'] = 'Bearer ' + JwtService.getToken()
        // }
        return config
    },
    async error => {
        console.log(error.response)
        if(error.response.data.message === 'Unauthenticated.'){
            //JwtService.destroyToken();


        }


        if (error.response.status !== 422 && error.response.status !== 403 && error.response.status !== 401) {

        }

        if (error.response.status === 403) {

        }

        if (error.response.status === 401) {
            //const store = useAuthStore();
            // if (JwtService.getToken()) {
            //     await store.logoutUser();
            // }

            //JwtService.destroyToken();
            //store.user.role='guest'
            // if(import.meta.env.VITE_APP_SITE==='false'){
            //     router.push({ path: "/qr" })
            // }else{
            //     router.push({name:'login'})
            // }

            // emitter.emit('checkRole')
            // await nextTick()
            //token.value = JwtService.getToken()
            //const router = useRouter()
           // console.log(router)
            //console.log( this.$router)
            //router.push({name:'login'})
            //router.push({name:'main'})
            //this.$router.push({name:'sign-in'})
            //router.push({name:'sign-in'})

        }
        return Promise.reject(error)
    }
)

export default service
