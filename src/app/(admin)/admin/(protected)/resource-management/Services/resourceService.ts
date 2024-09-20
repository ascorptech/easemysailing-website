import { getReq, postReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETRESOURCES,POSTRESOURCES} = apiEndPoints

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