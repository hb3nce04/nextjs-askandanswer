import { prisma } from '/prisma/client.js'

export default async function handler(req, res) {
    const id = parseInt(req.query.id)
    const categories = await prisma.Topic.findMany({where: {id: id}})
    res.status(200).json(categories)
}
