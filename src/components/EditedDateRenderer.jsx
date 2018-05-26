import React, { Component } from 'react'
import moment from 'moment'

class DateRenderer extends Component {
    constructor(props) {
        super(props)
        const timeAgo = moment(props.date).fromNow()
        this.state = {
            date: props.date,
            timeAgo
        }
    }

    render() {
        const { timeAgo } = this.state

        return (
            <small>Edited {timeAgo}</small>
        )
    }
}

export default DateRenderer