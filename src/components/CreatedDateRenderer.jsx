import React, { Component } from 'react'
import moment from 'moment'

class DateRenderer extends Component {
    constructor(props) {
        super(props)
        const timeOn = moment(props.date).format('MMMM Do YYYY, h:mm:ss a')
        this.state = {
            date: props.date,
            timeOn
        }
    }

    render() {
        const { timeOn } = this.state

        return (
            <small>Created on {timeOn}</small>
        )
    }
}

export default DateRenderer