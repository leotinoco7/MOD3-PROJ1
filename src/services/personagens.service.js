const personagens = [
    {
        id: 1,
        nome: 'Ahri',
        desc: 'Com uma conexão inata com o poder latente de Runeterra, Ahri é uma vastaya capaz de transformar magia em orbes de pura energia.',
        habilidade: 'Impeto Espiritual',
        foto: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1259276b6d1efa78/5db05fa86e8b0c6d038c5ca2/RiotX_ChampionList_ahri.jpg?quality=90&width=250',
    },
    {
        id: 2,
        nome: 'Ekko',
        desc: 'Um prodígio das ruas violentas de Zaun, Ekko manipula o tempo para reverter qualquer situação a seu favor.',
        habilidade: 'Cronoquebra',
        foto: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf22ba7e6328e4376/5db05fbd242f426df132f963/RiotX_ChampionList_ekko.jpg?quality=90&width=250',
    },
    {
        id: 3,
        nome: 'Vayne',
        desc: 'Shauna Vayne é uma caçadora de monstros demaciana mortal e implacável que dedicou sua vida a encontrar e destruir o monstro que assassinou sua família.',
        habilidade: 'Hora Final',
        foto: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9eaabc908956c8b0/5db060146af83b6d7032c90a/RiotX_ChampionList_vayne.jpg?quality=90&width=250',
    },
    {
        id: 4,
        nome: 'Vex',
        desc: 'Em meio à escuridão das Ilhas das Sombras, uma solitária yordle se move com pesar, abrindo caminho pela névoa espectral, satisfeita em viver nas trevas.',
        habilidade: 'Onda Sombria',
        foto: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltad313195d6b48daa/614e702764c8007a9bdec6b2/RiotX_ChampionList_vex.jpg?quality=90&width=250',
    },
    {
        id: 5,
        nome: 'Vex',
        desc: 'Em meio à escuridão das Ilhas das Sombras, uma solitária yordle se move com pesar, abrindo caminho pela névoa espectral, satisfeita em viver nas trevas.',
        habilidade: 'Onda Sombria',
        foto: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltad313195d6b48daa/614e702764c8007a9bdec6b2/RiotX_ChampionList_vex.jpg?quality=90&width=250',
    },
    {
        id: 6,
        nome: 'Tristana',
        desc: 'Apesar de muitos outros yordles focarem sua energia em descobertas, invenções ou simplesmente travessuras, Tristana sempre se inspirou nas aventuras de grandes guerreiros. Ela ouviu muito sobre Runeterra, suas facções e suas guerras, ',
        habilidade: 'Tiro Destruidor',
        foto: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfbbc3205edf5207a/5db0600bdc674266df3d5d50/RiotX_ChampionList_tristana.jpg?quality=90&width=250',
    },
    
]

const findPersonagensService = () => {
    return personagens;
}

const findPersonagemByIdService = id => {
    return personagens.find(personagem => personagem.id == id);
}

const addPersonagemService = personagem => {
    personagens.push(personagem);
    return 'ok';
}

const updatePersonagemService = (id, personagemEdited) => {
    personagemEdited['id'] = id;
    const personagemIndex = personagens.findIndex(personagem => personagem.id == id);
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
