import { postReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {SIGNUP} = apiEndPoints

export const SignupData = async(data:any)=>{
    try {
        return await postReq(SIGNUP,data)
    } catch (error:any) {
        console.log('err',error)
        return error?.response
    }
}