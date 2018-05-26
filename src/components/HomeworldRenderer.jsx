import React, { Component } from 'react'

class HomeworldRenderer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: props.url,
            name: 'Anon',
            isLoading: false,
            error: null
        }
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({ name: data.name, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }))
    }
    
    render() {
        const { name, isLoading, error } = this.state

        if (error) {
            return <p>{error.message}</p>
        }

        if (isLoading) {
            return <p>Loading ...</p>
        }
  
        return (
            <p className="homeworld">From {name}</p>                               
        )
    }
}

export default HomeworldRenderer