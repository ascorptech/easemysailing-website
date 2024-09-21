import { deleteReq, getReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETPODCASTS} = apiEndPoints

export const GetPodcastList = async(cb:any)=>{
    try {
        const response = await getReq(GETPODCASTS);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}