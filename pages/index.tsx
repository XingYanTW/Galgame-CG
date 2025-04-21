import { GetServerSideProps } from 'next'
import fs from 'fs'
import path from 'path'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const imagesDir = path.join(process.cwd(), 'public', 'images')
  const files = fs
    .readdirSync(imagesDir)
    .filter((name) => /\.(jpe?g|png|gif|webp)$/i.test(name))

  if (files.length === 0) {
    res.statusCode = 404
    res.end('No images found')
    return { props: {} }
  }

  const randomName = files[Math.floor(Math.random() * files.length)]
  const filePath = path.join(imagesDir, randomName)
  const ext = path.extname(randomName).substring(1)
  const stat = fs.statSync(filePath)

  res.setHeader('Content-Type', `image/${ext}`)
  res.setHeader('Content-Length', stat.size.toString())
  fs.createReadStream(filePath).pipe(res)

  // 因為已經用 pipe(res) 回傳檔案了，不要再輸出任何 HTML
  return { props: {} }
}

export default function Index() {
  return null
}