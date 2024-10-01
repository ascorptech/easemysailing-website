import { deleteReq, getReq, patchReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETPOSDCAST,POSTPODCAST,DELETEPODCAST,PUTPODCAST} = apiEndPoints

export const GetPodcastList = async(page:any,pageLimit:any,cb:any)=>{
    try {
        let url = `${GETPOSDCAST}?page=${page}&size=${pageLimit}&sort=ASC`
        const response = await getReq(url);
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
export const PutPodcastData = async(id:any,data:any,cb:any)=>{
    try {
        let url:any=`${PUTPODCAST}/${id}`
        const response = await patchReq(url,data);
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