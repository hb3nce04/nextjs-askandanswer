import { prisma } from '/prisma/client.js'

export default async function handler(req, res) {
    const categoryId = parseInt(req.query.categoryId)
    const categories = await prisma.Topic.findMany({where: {categoryId: categoryId}})
    res.status(200).json(categories)
}
