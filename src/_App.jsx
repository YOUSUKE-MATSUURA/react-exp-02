import { useState, useEffect } from 'react'
import './App.css'
import News from './components/News'

function App() {
  // inputが2個あるので、入力したものを保持するためにstateを2つ用意する
  const [name, setName] = useState("名前入力");
  const [email, setEmail] = useState("メルアドレス入力");

  //イベント処理＝クリックしたら「名前はXXXです」「メルアドレスはXXXです」と表示する

  const handleNameChange = (e) => {
    //処理を書く
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    //処理を書く
    setEmail(e.target.value);
  };

  
  useEffect(() => {
    //この中に書きます
    console.log("起動しました！！！！！");
    
    //この下は書かない
  },[])
  //useEffectの前に追加でコンソールログを以下に書きます。
  console.log("順番の確認");
  
  return (
    <>
      {/*  */}
      <News />
       <div>
        <p>名前が入ります</p>
        <input 
        type="text" 
        placeholder='名前を入力してください' 
        value={name} onChange={handleNameChange}
        />
       </div>
       <div>
        <p>メルアドレスが入ります</p>
        <input 
        type="text" 
        placeholder='メルアドレスを入力してください' 
        value={email} 
        onChange={handleEmailChange}
        />
       </div>
      {/*  */}
    </>
  )
}

export default App
