import React, { Component } from 'react'
import CreatedDateRenderer from './CreatedDateRenderer'
import EditedDateRenderer from './EditedDateRenderer'
import HomeworldRenderer from './HomeworldRenderer'

const API = 'https://swapi.co/api/people'

class Characters extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: [],
            isLoading: true,
            error: null
        }
    }

    componentDidMount() {

        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ people: data.results, count: data.count, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }))
    }
    
    render() {
        const { people, isLoading, count,  error } = this.state

        if (error) {
            return <p>{error.message}</p>
        }

        if (isLoading) {
            return <p>Loading ...</p>
        }
  
        return (
            <div className="main">
          
                <h1>People from the API <span className="badge badge-secondary">total of {count} / page 1</span></h1>
          
                <div className="list-group">
                    {people.map(person=> 

                        <div key={person.url}  className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="name">{person.name}</h4>
                                <CreatedDateRenderer date={person.created}/>
                                <br/>
                                <EditedDateRenderer date={person.edited}/>
                            </div>
                            <HomeworldRenderer url={person.homeworld}/>
                            <dl className="dl-horizontal">
                                <dt>Name of the character</dt><dd>{person.name}</dd>
                                <dt>Height (cm)</dt><dd>{person.height}</dd>
                                <dt>Weight (kg)</dt><dd>{person.mass}</dd>
                                <dt>Hair color</dt> <dd>{person.hair_color}</dd>
                                <dt>Skin color</dt> <dd>{person.skin_color}</dd>
                                <dt>Eye color</dt> <dd>{person.eye_color}</dd>
                                <dt>Year born</dt><dd>{person.birth_year}</dd>
                                <dt>Gender.</dt><dd>{person.gender}</dd>
                            </dl>

                        </div>
                    )}
                </div>
            </div>

        )
    }
}

export default Characters