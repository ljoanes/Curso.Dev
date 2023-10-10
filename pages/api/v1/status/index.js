function status(request, response) {
  response.status(200).send({ chave: 'valor', Nome: 'Leonardo Joanes, o SwordDreamer' });
}

export default status;
