import {fastify} from 'fastify';
import { DatabassePostegres } from './databasse-memory.js';

const server = fastify()

const database = new DatabassePostegres()


server.post ('/hello', async (request, reply) => {

    const {title, description, duration} = request.body

    await database.create ({
        title,
        description,
        duration,

    })


    return reply.status(201).send()
})

server.get ('/hello', (request) => {

    const search = request.query.search
    const videos = database.list(search)

    return videos
})

server.put ('/hello/:id', async (request, reply) => {
    const videoId = request.params.id
    const {title, description, duration} = request.body

    await database.update(videoId,
        {
            title,
            description,
            duration,
        })
    
    return reply.status(204).send()
})

server.delete ('/hello/:id', (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})

server.listen({
    port:3333,
})