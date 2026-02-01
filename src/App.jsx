import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Chart from './pages/chart'
import NotFound from './pages/notfound'
import Customer from './pages/customer'
import Orders from './pages/orders'
// hooksをインポートします！
import {useForm} from './hooks/useForm'


const App = () => {
  // hooksを使用します！
  const { data } = useForm()
  
  
  return (
    <>
    {/* <h1>データを表示する方法</h1>
    {data.map((item, index) => (
      <div key={index}>
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