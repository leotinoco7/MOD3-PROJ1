const personagens = [
    {
        id: 1,
        nome: '',
        desc: '',
        habilidade: '',
        foto: '',
    },
    {
        id: 2,
        nome: '',
        desc: '',
        habilidade: '',
        foto: '',
    },
    {
        id: 3,
        nome: '',
        desc: '',
        habilidade: '',
        foto: '',
    },
    {
        id: 4,
        nome: '',
        desc: '',
        habilidade: '',
        foto: '',
    },
    {
        id: 5,
        nome: '',
        desc: '',
        habilidade: '',
        foto: '',
    },
    {
        id: 6,
        nome: '',
        desc: '',
        habilidade: '',
        foto: '',
    },
]

const findPersonagensService = () => {
    return personagens;
}

const findPersonagemByIdService = id => {
    return personagens.find(personagem >= personagem.id == id);
}

const addPersonagemService = personagem => {
    personagens.push(personagem);
    return 'adicionado com sucesso';
}

const updatePersonagemService = (id, personagemEdited) => {
    personagemEdited['id'] = id;
    const personagemIndex = personagens.findIndex(personagens => personagem.id == id);
    personagens[personagemIndex] = personagemEdited
    return personagemEdited;
}

const deletePersonagemService = id => {
    const personagemIndex = personagens.findIndex(personagem => personagem.id == id);
    return personagens.splice(personagemIndex, 1);
}

module.exports = {
    findPersonagensService,
    findPersonagemByIdService,
    addPersonagemService,
    updatePersonagemService,
    deletePersonagemService,
};
