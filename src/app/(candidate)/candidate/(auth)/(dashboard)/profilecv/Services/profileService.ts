import { deleteReq, getReq, patchReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETPROFILE,PUTPROFILE,GETENUMS,POSTMYJOB,GETMYJOB } = apiEndPoints

export const GetProfileDetail = async(id:any,cb:any)=>{
    try {
        let url = `${GETPROFILE}/${id}`
        console.log('API URL:', url);
        const response = await getReq(url);
        console.log('API response:',response)
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
export const GetDropdownDetails = async(key:any,cb:any)=>{
    try {
        let url = `${GETENUMS}/${key}`
        const response = await getReq(url);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}

export const AddProfileData = async(userId:any,data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        const response = await putReq(PUTPROFILE,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}

export const GetMyjob = async(id:any,cb:any)=>{
    try {
        let url = `${GETMYJOB}/${id}`
        console.log('API URL:', url);
        const response = await getReq(url);
        console.log('API response:',response)
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}

export const AddMyJobData = async(data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        const response = await postReq(POSTMYJOB,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}





