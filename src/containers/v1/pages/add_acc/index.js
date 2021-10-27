import React, { Component } from 'react'
import { connect } from 'react-redux'

import { useDispatch } from 'react-redux'

import {
    Button
} from 'antd'

import {moveToPage,goBackToPrev,} from '../../service/navigation/services'

const Test = props => {

    const dispatch = useDispatch()

    return (
        <div>
            <h1>Hello</h1>
            <Button 
                style={{width:200}}
                onClick = {() => {
                    dispatch(moveToPage("/Add"))
                }}
            >Test</Button>
            <Button 
                style={{width:200}}
                onClick = {() => {
                    dispatch(goBackToPrev())
                }}
            >Go back</Button>
        </div>
    )
    
}


export default Test
