//Main content: 你好像來錯地方了，這裡沒有你要的東西！
//一個回去的按鈕
//小小圖片展示區域

export default function Custom404() {
    return (
        <><div className="not-found">
            <h1>你好像來錯地方了，這裡沒有你要的東西！</h1>
            <button onClick={() => window.history.back()}>回去</button>
            <div className="image-container">
                <img src="https://galgame-cg.vercel.app/api/random-image" alt="404" />
            </div>
        </div><style jsx>{`
        .not-found {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
        }
        .image-container {
            margin-top: 20px;
        }
        img {
            width: 500px;
            max-width: 100%;
            height: auto;
            padding: 10px;
            border-color: #ccc;
            border-width: 1px;
            border-style: solid;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease-in-out;
        }

        /* Add a hover effect to the image */
        img:hover {
            transform: scale(1.05);
        }
        /* image popup effect when page load */
        img {
            animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
            
        `}</style>
        <style jsx global>{`
        body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            /* hide scrollbar */
            overflow: hidden;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* Internet Explorer and Edge */
        }
        .not-found p {
            font-size: 24px;
            color: #333;
        }
        .not-found button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            background-color: #0070f3;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .not-found button:hover {
            background-color: #005bb5;
            transform: scale(1.05);
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        /* unhover effect */
        .not-found button:active {
            transform: scale(0.95);
            transition: transform 0.3s ease;
        }
        .not-found button:focus-visible {
            outline: none;
            box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
        }
        .not-found button:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
        }
        `}</style></>
    );
}