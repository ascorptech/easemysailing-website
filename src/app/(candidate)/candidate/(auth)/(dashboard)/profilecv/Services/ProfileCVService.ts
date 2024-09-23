import { postReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {PROFILE} = apiEndPoints

export const AddProfileData = async(data:any ,cb:any)=>{
    try {
        const response = await postReq(PROFILE,data)
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return error?.response
    }
}