import { useEffect, useState } from "react";

function useLocalstorange (key, defaulvalue){

    const[value,setValue]=useState(()=>{
        let currentValue

        try {
            currentValue=JSON.parse(localStorage.getItem(key)|| String(defaulvalue))
        } catch (error) {
            console.log(error)
            currentValue=defaulvalue
        }
        return currentValue
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])

    return [value,setValue]
}

export default useLocalstorange