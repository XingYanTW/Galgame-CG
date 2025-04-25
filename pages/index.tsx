import build from 'next/dist/build'
import Head from 'next/head'
import { CodeBlock, dracula } from 'react-code-blocks'

const css = `.background {
    background-image: url('https://galgame-cg.vercel.app/api/random-image');
  }
`
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
      <div>
        <img
          src="github-mark.png"
          alt="GitHub"
          className="github-mark"
          onClick={() => window.open('https://github.com/XingYanTW/Galgame-CG')}
        />

      </div>
      <div className="header-container">
        <h1 className="title">Galgame CG</h1>
      </div>
      <div className="main">
        <span className="content">
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
        <span className="list">
          <a href="#usage">使用方法</a><br /><br />
          <a href="#build">開發</a><br /><br />
          <a href="#recommendations">CG 推薦</a><br /><br />
        </span>
      </div>
      {/* Button to the top */}
      <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src="/arrow.svg" alt="Back to top" />
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
    .list {
      display: none;
    }
  }
      .github-mark {
        background-color: #fff;
        position: fixed;
        right: 10px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        z-index: 100;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        transition: transform 0.3s ease-in-out;
      }
      .github-mark:hover {
        transform: scale(1.1);
      }

      .back-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #fff;
          border-radius: 50%;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          padding: 10px;
          z-index: 100;
        }
        .back-to-top img {
          width: 30px;
          height: 30px;
        }
        .header-container {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: top 0.3s ease-in-out;
          z-index: 10;
        }
        .header-container::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: url("/api/random-image");
          background-size: cover;
          background-position: center;
          filter: blur(5px);
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
          z-index: -1;
        }
        .title {
          margin: 0;
          padding: 30px 50px;
          color: #fff;
          font-size: 2.5rem;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 1;
        }
        .content {
          /*height: 200vh;*/
          background-color: #ffffff;
          margin: 8px;
          padding: 20px;
          position: absolute;
          width: 78%;
        }
        .list {
          height: 109%;
          background-color: #ffffff;
          margin: 8px;
          padding: 20px;
          position: absolute;
          width: 15%;
          right: 0;
          border-left: 1px solid #ccc;
        }
        .list a {
          font-size: 1.2rem;
          color: #333;
          underline: none;
          text-decoration: none;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        /* 啟用 Anchor 錨點平滑滾動 */
        html {
          scroll-behavior: smooth;
       }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  )
}
