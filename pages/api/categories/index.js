import { prisma } from '/prisma/client.js'

export default async function handler(req, res) {
    const categories = await prisma.Category.findMany()
    res.status(200).json(categories)
}
