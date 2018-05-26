import React, { Component } from 'react'
import './App.css'
import Characters from './components/Characters'

const App = props => (
    <div className="App">
        
        <div className="container-fluid">
            <div className="row center yellow">
                <div className="row center yellow">
                    <div className="jumbotron">
                        <h1>SWAPI <small>The Star Wars API</small></h1>
                            
                    </div>
                </div>
            </div>
        </div>


        <Characters/>
    </div>
)


export default App
