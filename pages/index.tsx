import Head from 'next/head'

export default function TutorialPage() {
  return (
    <>
      <Head>
        <title>Galgame‑CG 使用教學</title>
        <meta name="description" content="Galgame‑CG 專案操作與部署教學" />
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans‑serif' }}>
        <h1>Galgame‑CG 教學頁面</h1>

        <section>
          <h2>1. 專案架構</h2>
          <ul>
            <li><code>/pages</code>：Next.js 路由與 API</li>
            <li><code>/public/images</code>：存放靜態圖片資源</li>
            <li><code>/styles</code>：CSS 模組</li>
            <li><code>next.config.js</code>：Next.js 設定</li>
            <li><code>.github/workflows/nextjs.yml</code>：CI/CD 部署設定</li>
          </ul>
        </section>

        <section>
          <h2>2. 添加圖片</h2>
          <ol>
            <li>將你的圖片放到 <code>/public/images</code> 目錄。</li>
            <li>支援副檔名：<code>.jpg</code>、<code>.png</code>、<code>.gif</code>、<code>.webp</code>。</li>
            <li>你可以在任何頁面以 <code>&lt;img src="/images/檔名" /&gt;</code> 引用。</li>
          </ol>
        </section>

        <section>
          <h2>3. 本機開發</h2>
          <pre style={{ background: '#f4f4f4', padding: '1rem' }}>
            <code>
npm install{'\n'}
npm run dev
            </code>
          </pre>
          <p>開啟 <code>http://localhost:3000</code> 即可預覽。</p>
        </section>

        <section>
          <h2>4. 部署到 GitHub Pages</h2>
          <p>請確認 <code>.github/workflows/nextjs.yml</code> 中已啟用：</p>
          <pre style={{ background: '#f4f4f4', padding: '1rem' }}>
            <code>
on: [ push ]{'\n'}
jobs:{'\n'}
  build: ...{'\n'}
  deploy: ...
            </code>
          </pre>
          <p>Commit 並推送到 <code>main</code> 分支，GitHub Actions 會自動建置並部署。</p>
        </section>

        <footer style={{ marginTop: '4rem', fontSize: '0.9rem', color: '#666' }}>
          © {new Date().getFullYear()} Galgame‑CG
        </footer>
      </main>
    </>
  )
}