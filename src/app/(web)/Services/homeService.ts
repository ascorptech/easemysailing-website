import { getReq, postReq } from "@/RootServices";
import apiEndPoints from "./apiEndPoints";

const { GETRECENTPODCAST, GETRECENTRESOURCE, ADDSUBSCRIBE } = apiEndPoints

export const GetRecentPodcast = async (cb: any) => {
    try {
        const result = await getReq(GETRECENTPODCAST)
        return cb(result)
    } catch (error: any) {
        console.log('err', error)
        return cb(error?.response)
    }
}
export const GetRecentResources = async (cb: any) => {
    try {
        const result = await getReq(GETRECENTRESOURCE)
        return cb(result)
    } catch (error: any) {
        console.log('err', error)
        return cb(error?.response)
    }
}
export const AddSubscribe = async (data: any, cb: any) => {
    try {
        const result = await postReq(ADDSUBSCRIBE, data)
        return cb(result)
    } catch (error: any) {
        console.log('err', error)
        return cb(error?.response)
    }
}  // eslint-disable-line