import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import Styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
const Cards= ({Data:{confirmed,recovered,deaths,lastUpdate}})=>{
   if(!confirmed)
   {
       return 'loading ............'
   }

    return (
    <div className={Styles.container}>
        <Grid container spacing ={3} justify='center'>
        <Grid item component={Card} xs={12} md={3} className={cx(Styles.Card,Styles.Infected)}>
            <CardContent>
                <Typography color = 'textSecondary' gutterBottom>Infected</Typography>
                <Typography varaint= 'h5'>
                    <CountUp
                    start =  {0}
                    end={confirmed.value}
                    duration={3}
                    separator=','/>
                </Typography>
    <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography varaint= 'body2'>Number of active cases of COVID-19</Typography>
            </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(Styles.Card,Styles.Recovered)}>
            <CardContent>
                <Typography color = 'textSecondary' gutterBottom>Recovered</Typography>
                <Typography varaint= 'h5'><CountUp
                    start =  {0}
                    end={recovered.value}
                    duration={3}
                    separator=','/></Typography>
                <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography varaint= 'body2'>Number of recoveries from COVID-19</Typography>
            </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(Styles.Card,Styles.Deaths)}>
            <CardContent>
                <Typography color = 'textSecondary' gutterBottom>Deaths</Typography>
                <Typography varaint= 'h5'><CountUp
                    start =  {0}
                    end={deaths.value}
                    duration={3}
                    separator=','/></Typography>
                <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                <Typography varaint= 'body2'>Number of deaths Caused by COVID-19</Typography>
            </CardContent>
        </Grid>
        </Grid>
        
    </div>
    )

}
export default Cards