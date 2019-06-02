const messages = {
    empty: {
        restauranteId: 'Escolha um restaurante para utilizar',
        usuarioId: 'Usuário deslogado, faça login para continuar',
        token: 'Token de autenticação não encontrado'
    },
    invalid: {
        token: 'O token não é válido',
        utilizations: 'O restaurante não permite mais utilizações'
    },
    notFound: {
        historic: 'Histórico não encontrado',
        historics: 'Nenhuma utilização encontrada'
    },
    serverError: 'Ocorreu um erro inesperado, tente novamente',
    useRestaurantError: 'Ocorreu um erro ao utilizar o restaurante',
    waitTime: 'Você deve esperar 5 minutos para reutilizar'
};

module.exports = messages;