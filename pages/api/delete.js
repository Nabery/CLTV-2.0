async function deletecall (request,response) {
    const { body } = req;
    
    response.send(body.name)
}

export default deletes