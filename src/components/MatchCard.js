import React from 'react'
import {Link} from 'react-router-dom'

export default class MatchCard extends React.Component {
    render() {
        console.log(this.props.matchee)
        return(
            <div>
                 <h2>photo card1</h2>
                <Link to='/profile'>Visit Profile</Link>
                <Link to='/messages'>Send Message</Link>
                <h2>photo card2</h2>
                <Link to='/profile'>Visit Profile</Link>
                <Link to='/messages'>Send Message</Link>
                <h2>photo card3</h2>
                <Link to='/profile'>Visit Profile</Link>
                <Link to='/messages'>Send Message</Link>
                <h2>etc..</h2>
                <br></br>
            </div>
        )
    }
}