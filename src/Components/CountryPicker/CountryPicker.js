import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import Styles from './CountryPicker.module.css'
import {FetchCountries} from '../../api'
const CountryPicker= ({Picker})=>{
    const [FetchedCountries,setFetchedCountries]=useState([])
    useEffect((()=>{
        const FetchedApi = async()=>{
            setFetchedCountries(await FetchCountries()) 
        }
        FetchedApi()
    }),[setFetchedCountries])
    return (
    <FormControl className={Styles.FormControl}>
        <NativeSelect defaultValue = '' onChange={(event)=>{Picker(event.target.value)}}>
    <option value=''>Global</option>
   {FetchedCountries.length?(FetchedCountries.map((country,i)=><option key ={i} value={country}>{country}</option>)):null}
            </NativeSelect>
    </FormControl>
    )

}
export default CountryPicker