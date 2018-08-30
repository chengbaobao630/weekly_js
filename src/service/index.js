import fetch from 'dva/fetch';


function requestOrigin(url, options) {
    return fetch(url,options);
}

export default async function request(url, options) {
    console.dir(options)
    // return new Promise( (resolve, reject) => {

    // });
    // let config = getConfig();
    // if (!config) {

    // } else {

    // }
    let headers={}
    headers['Content-Type']= 'application/json';
    options = {
        method:"POST",
        body: options,
        headers:headers
    }
    console.dir(options)
    options.credentials= 'include';
    return requestOrigin(url, options);
}
