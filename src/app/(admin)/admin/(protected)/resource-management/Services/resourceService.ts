import { deleteReq, getReq, patchReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETRESOURCES,POSTRESOURCES,DELETERESOURCES,PUTRESOURCES,PUBLISHCHNAGERESOURCES} = apiEndPoints

export const GetResourcesList = async(page:any,pageLimit:any,cb:any)=>{
    try {
        let url = `${GETRESOURCES}?page=${page}&size=${pageLimit}&sort=ASC`
        const response = await getReq(url);
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
export const PutResourcesData = async(id:any,data:any,cb:any)=>{
    try {
        let url:any=`${PUTRESOURCES}/${id}`
        const response = await patchReq(url,data);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const PutChnagePublishResourcesData = async(id:any,data:any,cb:any)=>{
    try {
        let url:any=`${PUBLISHCHNAGERESOURCES}/${id}`
        const response = await patchReq(url,data);
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