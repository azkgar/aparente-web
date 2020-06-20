import {basePath, apiVersion} from "./config";

export function suscribeNewsletterApi(email) {
    const url = `${basePath}/${apiVersion}/suscribe-newsletter/${email.toLowerCase()}`;
    const params = {
        method: "POST",

    }

    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    });
}

export function suscribeMailchimpApi(email) {
    const url = `https://${process.env.MAILCHIMP_REGION}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST}`;
    const params = {
        method: "POST",
        auth: `${process.env.MAILCHIMP_USER}:${process.env.MAILCHIMP_API_KEY}`,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(email)

    }

    return fetch(url, params).then(response => {
        return response.json();
    }).then(result => {
        return result;
    }).catch(err => {
        return err;
    });
}