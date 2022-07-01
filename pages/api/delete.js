async function deletecall (request,response) {
    const { body } = request;

    response.send(body.name)
}

export default deletes