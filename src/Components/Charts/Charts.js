import React ,{useState,useEffect}from 'react'
import {FetchDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2'
import Styles from './Charts.module.css'
const Charts= ({Data:{confirmed,recovered,deaths},Country})=>{
    const [dailyData,setDailyData] = useState([])
    useEffect(()=>{
        const FetchApi= async()=>{
            setDailyData(await FetchDailyData())
        }
        FetchApi()
    },[])
   const LineChart = (
       dailyData.length?(
       <Line
       data = {{
           labels:dailyData.map(({date})=>date),
           datasets:[{
               data:dailyData.map(({confirmed})=>confirmed),
               label:'Infected',
               borderColor:'#3333ff',
               fill:true

           },{ data:dailyData.map(({deaths})=>deaths),
           label:'Deaths',
           borderColor:'red',
           backgroundColor:'rgba(255,0,0,0.5)',
           fill:true
         }]

       }} 
       />):null
   )
   const BarChart = (
       confirmed?(
           <Bar
           data = {{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                    label:'People',
                    backgroundColor:[
                        ' rgba(0,0, 255, 0.5)',
                        ' rgba(0,255,0, 0.5)',
                        'rgba(255,0, 0, 0.5)'
                    ],
                    hoverBackgroundColor: [' rgba(0,0, 255, 0.55)',
                    ' rgba(0,255,0, 0.55)',
                    'rgba(255,0, 0, 0.55)'],
                    data:[confirmed.value,recovered.value,deaths.value]
                }]
           }}
           option ={{
               legend :{display:false},
               title :{display:true,text:`Current State In ${Country}`}
           }}
           />

            
       ):null
   )
    return (
    <div className={Styles.container}>
        {Country?BarChart:LineChart}
     
    </div>
    )

}
export default Charts