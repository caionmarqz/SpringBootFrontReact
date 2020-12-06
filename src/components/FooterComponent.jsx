import React, { PureComponent } from 'react'

class FooterComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <footer className="footer" style={{backgroundColor:"lightyellow", textAlign:"center",width:"100%",position:"fixed", left: 0, bottom: 0}}>
                    <span className="text-muted">caionmarqz@gmail.com</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent