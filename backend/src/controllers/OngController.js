const  crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; 
            // Pegar o Corpo da Requisição, podemos aons invés de setar
            // diretamente uma variavel para o objeto todo, podemos pegar individual
            // como exemplo da const 
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf
        })

        return response.json({ id });
    } 
}