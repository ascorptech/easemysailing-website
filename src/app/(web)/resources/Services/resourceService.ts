import { deleteReq, getReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETRESOURCES,GETRESOURCEDETAIL} = apiEndPoints

export const GetResourcesList = async(cb:any)=>{
    try {
        const response = await getReq(GETRESOURCES);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const GetResourceDetail = async(id:any,cb:any)=>{
    try {
        let url = `${GETRESOURCES}/${id}`
        const response = await getReq(url);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}