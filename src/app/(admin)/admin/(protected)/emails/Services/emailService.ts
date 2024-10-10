import { deleteReq, getReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETEMAILSLIST,DELETEEMAILSLIST} = apiEndPoints

export const GetEmailsList = async(page:any,pageLimit:any,cb:any)=>{
    try {
        let url = `${GETEMAILSLIST}?page=${page}&size=${pageLimit}&sort=DESC`
        const response = await getReq(url);
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