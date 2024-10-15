import { deleteReq, getReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETRESOURCES,GETRESOURCEDETAIL,GETRECENTRESOURCEBYID} = apiEndPoints

export const GetResourcesList = async(page:any,pageLimit:any,cb:any)=>{
    try {
        let url = `${GETRESOURCES}?page=${page}&size=${pageLimit}&sort=createdDate,desc`
        const response = await getReq(url);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const GetResourceDetail = async(id:any,cb:any)=>{
    try {
        let url = `${GETRESOURCEDETAIL}/${id}`
        const response = await getReq(url);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const GetResourcesExcludeList = async(id:any,cb:any)=>{
    try {
        let url = `${GETRECENTRESOURCEBYID}/${id}`
        const response = await getReq(url);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}