import { deleteReq, getReq, patchReq, postReq, putReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const {GETPROFILE,PUTPROFILE,GETENUMS,POSTMYJOB,GETMYJOB,POSTNEXTOF,POSTLANGUAGE,POSTABOUTME,POSTCONTACT,POSTONLINEPRASENCE,POSTLICENSES,POSTSEADETAILS,POSTSEAGOING ,POSTMEDICAL,POSTECDIS,POSTTRAVELDOCUMENT,POSTSTCWTRAINING,POSTPROFESSIONALSKILL,POSTREFERENCE,POSTADDITIIONAL } = apiEndPoints



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
         let url = `${POSTLANGUAGE}/${userId}`
        const response = await postReq(url,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
//Travel Document

export const AddTravelDocumentData = async(userId:any,passportBiometric:any,seamansBookNeverExpires:any,data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        let url = `${POSTTRAVELDOCUMENT}/${userId}/${passportBiometric}/${seamansBookNeverExpires}`
        const response = await postReq(url,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
//STCW Training

export const AddStcwData = async(userId:any,neverExpires:any,data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        let url = `${POSTSTCWTRAINING}/${userId}/${neverExpires}`
        const response = await postReq(url,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
//Professional Skill

export const AddProfessionalSkillData = async(userId:any,metalWorkingCertificateAvailable:any,metalWorkingClassApproved:any,data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        let url = `${POSTPROFESSIONALSKILL}/${userId}/${metalWorkingCertificateAvailable}/${metalWorkingClassApproved}`
        const response = await postReq(url,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}
//References

export const AddReferencesData = async(userId:any,consentGiven:any,data:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        let url = `${POSTREFERENCE}/${userId}/${consentGiven}`
        const response = await postReq(url,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    }
}



//medical 

export const AddMedicalData = async(userId:any,data:any,fitnessNeverExpires:any,drugTestNeverExpires:any,covidVaccineNeverExpires1:any,otherVaccinationNeverExpires:any,flagMedicalNeverExpires:any ,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
        let url = `${POSTMEDICAL}/${userId}/${fitnessNeverExpires}/${drugTestNeverExpires}/${covidVaccineNeverExpires1}/${otherVaccinationNeverExpires}/${flagMedicalNeverExpires}`

        const response = await postReq(url,data)
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
        // let url =`${POSTLICENSES}/${userId}`
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
export const AddEcdisData = async(userId:any,data:any ,neverExpires:any,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
         let url = `${POSTECDIS}/${userId}/${neverExpires}`
        const response = await postReq(url,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    } 
}



//Additional training

export const AddAdditionalData = async(userId:any,data:any ,neverExpires:any,cb:any)=>{
    try {
        console.log('Data to be submitted:', data);
         let url = `${POSTADDITIIONAL}/${userId}/${neverExpires}`
        const response = await postReq(url,data)
        console.log('API response:', response);
        return cb(response)
    } catch (error:any) {
        console.log('err',error)
        return cb(error?.response)
    } 
}
