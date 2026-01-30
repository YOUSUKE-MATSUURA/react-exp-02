import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Chart from './pages/chart'
import NotFound from './pages/notfound'
import Customer from './pages/customer'
import Orders from './pages/orders'


const App = () => {
  // useStateを追加します！これはapiのデータを受け取るためです🤗絶対にいります！！
  const[data, setData] = useState([])

  // イベント処理=クリックしたらXXXする,マウスを動かしたらXXXする、マウスが離れたらxxxx,.....
  useEffect(() => {
    // この中に書きます🤗
    console.log("起動しました！！！！！");

    const fetchData = async () => {
      try{
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        )
        console.log(response,'response')
        //ここでjsの形に変換するjson()を行なっています🤗
        const data = await response.json()
        console.log(data, '中身')
        // 取得したjsの形のデータをuseStateの更新の処理で上書きする
        setData(data)
      }catch(error){}
    }
    // fetchDataを以下で動かします🤗
    fetchData()

  },[])
  
  return (
    <>
    {/* <h1>データを表示する方法</h1>
    {data.map((item) => (
      <div>
        <p>{item.id}</p>
        <p>{item.title}</p>
        <p>{item.userId}</p>
      </div>
    ))} */}

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

    </>
  )
}

export default App