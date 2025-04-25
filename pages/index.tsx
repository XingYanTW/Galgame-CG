import Head from 'next/head'
import { CodeBlock, dracula } from 'react-code-blocks'
import styles from '../styles/Home.module.css'

const css = `.background {
  background-image: url('https://galgame-cg.vercel.app/api/random-image');
}`

const build1 = `git clone https://github.com/XingYanTW/Galgame-CG.git
cd Galgame-CG
yarn install`

const build2 = `yarn build
yarn start`

export default function Home() {
  return (
    <>
      <Head>
        <title>Galgame CG</title>
        <meta name="description" content="隨機顯示一張 Galgame CG 圖片" />
      </Head>

      <img
        src="github-mark.png"
        alt="GitHub"
        className={styles.githubMark}
        onClick={() => window.open('https://github.com/XingYanTW/Galgame-CG')}
      />

      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Galgame CG</h1>
      </div>

      <div className="main">
        <span className={styles.content}>
          <h1 id='usage'>使用方法</h1>
          <hr />
          <p>HTML範例</p>
          <CodeBlock
            text="<img src='https://galgame-cg.vercel.app/api/random-image'/>"
            language='html'
            showLineNumbers={false}
            theme={dracula}
          />
          <br />
          <p>CSS範例</p>
          <CodeBlock
            text={css}
            language='css'
            showLineNumbers={false}
            theme={dracula}
          />
          <h1 id='build'>開發</h1>
          <hr />
          <p>下載專案</p>
          <CodeBlock
            text={build1}
            language='bash'
            showLineNumbers={false}
            theme={dracula}
          />
          <p>以開發模式啟動</p>
          <CodeBlock
            text='yarn dev'
            language='bash'
            showLineNumbers={false}
            theme={dracula}
          />
          <p>以生產環境啟動</p>
          <CodeBlock
            text={build2}
            language='bash'
            showLineNumbers={false}
            theme={dracula}
          />
          <h1 id='recommendations'>CG 推薦</h1>
          <hr />

          <h3> 1. Fork </h3>

          <p>點擊右上角Fork後將圖片丟進public\images資料夾並提出pull request</p>

          <h3> 2. Issue </h3>
          <p><a href='https://github.com/XingYanTW/Galgame-CG/issues/new'>點擊此連結</a>到達Issue頁面提交新的Issue</p>
        </span>
        <span className={styles.list}>
          <a href="#usage">使用方法</a><br /><br />
          <a href="#build">開發</a><br /><br />
          <a href="#recommendations">CG 推薦</a><br /><br />
        </span>
      </div>

      <div
        className={styles.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src="/arrow.svg" alt="Back to top" />
      </div>

    </>
  )
}
