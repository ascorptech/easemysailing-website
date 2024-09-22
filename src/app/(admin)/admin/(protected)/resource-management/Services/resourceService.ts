import { deleteReq, getReq, patchReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETRESOURCES,POSTRESOURCES,DELETERESOURCES,PUTRESOURCES} = apiEndPoints

export const GetResourcesList = async(cb:any)=>{
    try {
        const response = await getReq(GETRESOURCES);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const AddResourcesData = async(data:any,cb:any)=>{
    try {
        const response = await postReq(POSTRESOURCES,data);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const PutResourcesData = async(data:any,cb:any)=>{
    try {
        const response = await patchReq(PUTRESOURCES,data);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const DeleteResourcesData = async(id:any,cb:any)=>{
    try {
        let url = `${DELETERESOURCES}/${id}`
        const response = await deleteReq(url);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}