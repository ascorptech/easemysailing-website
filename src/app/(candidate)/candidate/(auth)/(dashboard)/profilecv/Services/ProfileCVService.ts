import { postReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETPROFILE} = apiEndPoints

export const AddProfileData = async(data:any ,cb:any)=>{
    try {
        const response = await postReq(GETPROFILE,data)
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return error?.response
    }
}