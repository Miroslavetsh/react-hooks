import React from 'react'
import {useAlert} from './alert/AlertContext'

export default function Main() {
    const {show} = useAlert()
    return (
        <>
            <h1>Hello context</h1>
            <button className="btn btn-success" onClick={() => show('Text from Main.js')}>Alert</button>
        </>
    )
}