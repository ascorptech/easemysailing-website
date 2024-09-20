import { getReq, postReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETPOSDCAST,POSTPODCAST} = apiEndPoints

export const GetPodcastList = async(cb:any)=>{
    try {
        const response = await getReq(GETPOSDCAST);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const AddPodcastData = async(data:any,cb:any)=>{
    try {
        const response = await postReq(POSTPODCAST,data);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}