import { deleteReq, getReq, patchReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETPROFILE,PUTPROFILE,GETENUMS,POSTMYJOB,GETMYJOB,POSTNEXTOF,POSTLANGUAGE,POSTABOUTME,POSTCONTACT,POSTONLINEPRASENCE,POSTLICENSES,POSTSEADETAILS,POSTSEAGOING ,POSTMEDICAL,POSTECDIS } = apiEndPoints


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
        const response = await putReq(POSTMYJOB,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}

// About Me
export const AddAboutMeData = async(data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        const response = await postReq(POSTABOUTME,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
// Contact
export const AddContactData = async(data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        const response = await postReq(POSTCONTACT,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}


// Next of kin Details

export const AddNextOfData = async(data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        const response = await putReq(POSTNEXTOF,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}


//Language

export const AddLanguageData = async(userId:any,data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        const response = await postReq(POSTLANGUAGE,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
  

//Online Presence

export const AddOnlinePresenceData = async(data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        const response = await postReq(POSTONLINEPRASENCE,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}


//Licenses


export const AddLicensesData = async(userId:any,data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        const response = await postReq(POSTLICENSES,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
// Off Shore Requirements

export const AddSeaDetailsData = async(userId:any,data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        const response = await postReq(POSTSEADETAILS,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    } 
}


//ECDIS 
export const AddEcdisData = async(userId:any,data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        const response = await postReq(POSTECDIS,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    } 
}



//medical 

export const AddMedicalData = async(userId:any,data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        const response = await postReq(POSTMEDICAL,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    } 
}



// seagoing experiences
export const AddSeagoingData = async(data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        const response = await postReq(POSTSEAGOING,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}