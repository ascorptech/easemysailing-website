import { deleteReq, getReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETPODCASTS} = apiEndPoints

export const GetPodcastList = async(page:any,pageLimit:any,cb:any)=>{
    try {
        let url = `${GETPODCASTS}?page=${page}&size=${pageLimit}&sort=createdDate,desc`
        const response = await getReq(url);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}