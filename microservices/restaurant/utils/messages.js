const messages = {
    empty: {
        nome: 'Favor informar o nome do restaurante',
        utilizacoes: 'Favor informar a quantidade de utilizações',
        token: 'Token de autenticação não encontrado'
    },
    invalid: {
        token: 'O token não é válido'
    },
    notFound: {
        restaurant: 'Restaurante não encontrado',
        restaurants: 'Não foi encontrado nenhum restaurante nesta busca'
    },
    createRestaurantError: 'Erro ao cadastrar restaurante',
    serverError: 'Ocorreu um erro inesperado, tente novamente',
    useRestaurantError: 'Não foi possível utilizar este restaurante'
}

module.exports = messages;