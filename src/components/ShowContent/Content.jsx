import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './content.css'


const baseURL = 'https://the-one-api.dev/v2'

const API_KEY = "Bearer your_api_key"

const Content = () => {

    const [elements, setElements] = useState([])

    const headers = {
        'Accept': 'application/json',
        'Authorization': API_KEY
    }

    useEffect(() => {
        axios.get(baseURL + `/character/5cd99d4bde30eff6ebccfc15`, { headers: headers })
            .then(response => {
                const data = response.data.docs
                setElements(data)
                console.log(data)
            }).catch(err => {
                console.log(err)
            })

    }, [])



    return (
        <div className="container">
            <div className="contentBox">
                {elements.map((elem) => {
                    return (
                        <>
                            <div className="nameContent">
                                <h2>{'Nome: ' + elem.name}</h2>
                                <span>{'Aniversario: ' + elem.birth}</span>
                                <span>{'Morte: ' + elem.death}</span>
                                <span>{'Sexo: ' + elem.gender}</span>
                                <span>{'Cabelo: ' + elem.hair}</span>
                                <span>{'Altura: ' + elem.height}</span>
                                <span>{'Link Wiki: ' + elem.wikiUrl}</span>
                                <span>{'Raça: ' + elem.race}</span>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Content