import { deleteReq, getReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETEMAILSLIST,DELETEEMAILSLIST} = apiEndPoints

export const GetEmailsList = async(cb:any)=>{
    try {
        const response = await getReq(GETEMAILSLIST);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const DeleteEmailData = async(id:any,cb:any)=>{
    try {
        let url = `${DELETEEMAILSLIST}/${id}`
        const response = await deleteReq(url);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}