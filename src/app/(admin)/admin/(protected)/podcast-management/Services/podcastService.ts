import { deleteReq, getReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETPOSDCAST,POSTPODCAST,DELETEPODCAST,PUTPODCAST} = apiEndPoints

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
export const PutPodcastData = async(data:any,cb:any)=>{
    try {
        const response = await putReq(PUTPODCAST,data);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const DeletePodcastData = async(id:any,cb:any)=>{
    try {
        let url = `${DELETEPODCAST}/${id}`
        const response = await deleteReq(url);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}