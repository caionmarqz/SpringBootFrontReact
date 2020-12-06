import React, { PureComponent } from 'react'

class HeaderComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return ( 
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div>
                <a href="https://www.linkedin.com/in/caio-marquezini-a315401b0/" className="navbar-brand">Employee Management App</a>
                </div>
                </nav>
            </header>
        </div>
            
        )
    }
}

export default HeaderComponent