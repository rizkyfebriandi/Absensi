import ApiManager from "./ApiManager";

export const user_login = async data => {
    try {
        const result = await ApiManager("https://farhancollection.id/rest_api/",{
            method:'POST',
            headers:{
                'content-type':"apllication/json"
            },
            data:data
        });
        return result;
    }catch{
        return error.response.data
    }
}
