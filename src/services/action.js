import {SIGIN,LOGIN} from './constants'
export const Login=(data)=>{
console.warn("data",data)
return {
    type:LOGIN,
    data:data
}
}
export const SignIn=(data)=>{
    console.warn("signin caled",data)
    return {
        type:SIGIN,
        data:data
    }
    }