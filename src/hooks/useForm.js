//
import { useState, useEffect } from 'react'

export const useForm = () => {

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

    //ここがポイント！
    return{
        data,
    }

}