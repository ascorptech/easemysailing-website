import { postReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {LOGIN} = apiEndPoints

export const LoginData = async(data:any)=>{
    try {
        return await postReq(LOGIN,data)
    } catch (error:any) {
        console.log('err',error)
        return error?.response
    }
}