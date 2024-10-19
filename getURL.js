var url=import('url')
const getpath=(req)=>{
    return req.url;
}
const getparamsURL=(req)=>{
    let urlData = url.parse(req.url,true);
    return JSON.stringify(urlData.query);
}
module.exports={getpath,getparamsURL}

