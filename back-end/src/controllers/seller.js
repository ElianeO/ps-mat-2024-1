// Importando o Prisma Client
import prisma from '../database/client.js'

const controller = {} // Objeto vazio

// Criando um novo cliente
controller.create = async function (req, res) {
    try {
        await prisma.seller.create({ data: req.body })

        // HTTP 201: Created
        res.status(201).end()
    }
    catch (error) {
        console.log(error)

        // HTTP 500: Internal Server Error
        res.status(500).end()
    }
}
controller.retrieveAll = async function (req, res) {
    try {

        const result = await prisma.seller.findMany()

        // HTTP 200: OK (ímplicto)
        res.send(result)

    }
    catch (error) {
        console.log(error)

        // HTTP 500: Internal Server Error
        res.status(500).end()
    }
}
controller.retrieveOne = async function (req, res) {
    try {

        const result = await prisma.seller.findUnique({
            where: { id: Number(req.params.id) }
        })

        // Encontrou: retorna o HTTP 200: OK
        if (result) res.send(result)

        // Não encontrou retorna o HTTP 404: Not Found
        else res.status(404).end()

    }
    catch (error) {
        console.log(error)

        // HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

controller.retrieveOne = async function (req, res) {
    try {

        const result = await prisma.seller.findUnique({
            where: { id: Number(req.params.id) }
        })

        // Encontrou: retorna o HTTP 200: OK
        if (result) res.send(result)

        // Não encontrou retorna o HTTP 404: Not Found
        else res.status(404).end()

    }
    catch (error) {
        console.log(error)

        // HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

controller.update = async function (req, res) {
    try {
        const result = await prisma.seller.update({
            where: { id: Number(req.params.id) },
            data: req.body
        })

        // Encontrou e atualizou: retorna o HTTP 204: No Content
        if (result) res.send(result)

        // Não encontrou (e não atualizou): retorna o HTTP 404: Not Found
        else res.status(404).end()

    }
    catch (error) {
        console.log(error)

        // HTTP 500: Internal Server Error
        res.status(500).end()
    }
}

controller.delete = async function (req, res) {
    try{
        const result = await prisma.seller.delete({
            where : { id: Number(req.params.id)}
        })
    
    // Encontrou e excluiu -> HTTP 204: No content
    if(result) res.status(204).end()
    // Não encontrou (e não excluiu) -> HTTP 404: Not found
    else res.status(404).end()
    }
    catch(error){
        console.log(error)

    // HTTP 500: Internal Service Error
    res.status(500).end()
    }
}

export default controller

