import {basePath, apiVersion} from "./config";

export function getCategoriesApi() {
    const url = `${basePath}/${apiVersion}/get-categories`;

    return fetch(url).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err.message;
    });
}

export function updateMenuApi(token, menuId, data) {
    const url = `${basePath}/${apiVersion}/update-menu/${menuId}`;

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(data)
    }

    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result.message;
    }).catch(err => {
        return err.message;
    });
}

export function activateMenuApi(token, menuId, status) {
    const url = `${basePath}/${apiVersion}/activate-menu/${menuId}`;

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({active: status})
    }

    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result.message;
    }).catch(err => {
        return err.message;
    });

}

export function addMenuApi(token,menu) {
    const url = `${basePath}/${apiVersion}/add-menu/`;

    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(menu)
    }

    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result.message;
    }).catch(err => {
        return err.message;
    });
}

export function deleteMenuApi(token,menuId) {
    const url = `${basePath}/${apiVersion}/delete-menu/${menuId}`;

    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    }

    return fetch(url,params).then(response => {
        return response.json();
    }).then(result => {
        return result.message;
    }).catch(err => {
        return err.message;
    });
}

export function uploadAvatarApi(token,avatar,userId){
    const url = `${basePath}/${apiVersion}/upload-avatar/${userId}`;
    const formData = new FormData();
    
    formData.append("avatar", avatar, avatar.name);

    const params = {
        method: "PUT",
        body: formData,
        headers: {
            "Authorization": token
        }
    }

    return fetch(url, params).then(response => {
        return response.json()
    }).then(result => {
        return result;
    }).catch(err => {
        return err.message;
    });
}

export function getAvatarApi(avatarName){
    const url = `${basePath}/${apiVersion}/get-avatar/${avatarName}`;

    return fetch(url).then( response => {
        return response.url;
    }).catch(err => {
        return err.message;
    });
}