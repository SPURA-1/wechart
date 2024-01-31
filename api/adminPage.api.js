import service from "@/utils/request"

/**
 * @description 获取状态为1的旅途风景
 * @url  /homePage/getlandscapeImages
 * */
export function getlandscapeImages(params) {
    return service.get('/homePage/getlandscapeImages', params);
}