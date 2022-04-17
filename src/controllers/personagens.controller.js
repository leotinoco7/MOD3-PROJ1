const personagenservice = require('../services/personagens.service');

const homePersonagemController = (req, res) => {
    res.send('index');
};

const findPersonagensController = (req, res) => {
    const allPersonagens = personagenService.findPersonagensController();
    res.send(allPersonagens);
}

const findPersonagemByIdController = (req, res) => {
    const idParam = req.params.id;
    const chosenPersonagem = personagenService.findPersonagemByIdController(idParam);
    res.send(chosenPersonagem);
}

const addPersonagemController = (req, res) => {
    let retorno;

    if (req.body.id) {
        retorno = personagenService.addPersonagemService(req.body);
    } else {
        res.send({ erro: 'must send id'});
    } 
    if (retorno == 'ok') {
        res.send ({ message: 'cadastrado com sucesso'});
    } else {
        res.send('erro')
    }
}

const updatePersonagemController = (req, res) => {
    const idParam = +req.params.id;
    const personagemEdit = req.body;
    const updatedPersonagem = personagensService.updatePersonagemService(
        idParam,
        personagemEdit,
    );
    res.send(updatedPersonagem);
};

const deletePersonagemController = (req, res) => {
    const idParam = req.params.id;
    personagensService.deletePersonagensService(idParam);
    res.send({ message: 'deletado com sucesso!' });
};
module.exports = {
    homePersonagemController,
    findPersonagensController,
    findPersonagemByIdController,
    addPersonagemController,
    updatePersonagemController,
    deletePersonagemController,
};
