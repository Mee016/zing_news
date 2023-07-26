import request from "../utils/request";
export const loginService = (data) => {
    return request("https://api-uat-anzen-tms.azurewebsites.net/api/Account/login", {
        method: 'POST',
        data
    })
}