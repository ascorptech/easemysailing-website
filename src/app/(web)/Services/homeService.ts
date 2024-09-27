import { getReq, postReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETRECENTPODCAST,GETRECENTRESOURCE,GETRECENTRESOURCEBYID} = apiEndPoints

export const GetRecentPodcast = async(cb:any)=>{
    try {
        const result = await getReq(GETRECENTPODCAST)
        return cb(result)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const GetRecentResources = async(cb:any)=>{
    try {
        const result = await getReq(GETRECENTRESOURCE)
        return cb(result)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}