import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const imagesDir = path.join(process.cwd(), 'public', 'images')
  const files = fs
    .readdirSync(imagesDir)
    .filter((name) => /\.(jpe?g|png|gif|webp)$/i.test(name))

  if (files.length === 0) {
    res.status(404).end('No images found')
    return
  }

  const randomName = files[Math.floor(Math.random() * files.length)]
  const filePath = path.join(imagesDir, randomName)
  const ext = path.extname(randomName).substring(1)
  const stat = fs.statSync(filePath)

  res.setHeader('Content-Type', `image/${ext}`)
  res.setHeader('Content-Length', stat.size.toString())
  fs.createReadStream(filePath).pipe(res)
}