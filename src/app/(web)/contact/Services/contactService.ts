import { deleteReq, getReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {POSTCONTACT,POSTCAPTCHA} = apiEndPoints

export const AddContactData = async(data:any,cb:any)=>{
    try {
        const response = await postReq(POSTCONTACT,data);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const verifyRecaptchaData = async(data:any,cb:any)=>{
    try {
        const response = await postReq(POSTCAPTCHA,data);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}