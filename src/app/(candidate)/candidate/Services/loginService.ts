import { postReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {LOGIN,FORGOTPASSWORD} = apiEndPoints

export const LoginData = async(data:any)=>{
    try {
        return await postReq(LOGIN,data)
    } catch (error:any) {
        console.log('err',error)
        return error?.response
    }
}
export const forgetPassData = async(data:any,cb:any)=>{
    try {
        const result = await postReq(FORGOTPASSWORD,data)
        return cb(result)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}