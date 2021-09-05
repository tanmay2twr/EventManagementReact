import React, { Component } from 'react'

class Signout extends Component {
    componentDidMount() {
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("region")
        window.location.href="/"
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Signout

