import React from 'react';
import MainPhoto from './MainPhoto';
import MainBar from './MainBar';

class Connect extends React.Component {
    
    componentDidMount() {
        
    }

    render() {
        return(
            <div>
                <MainPhoto />
                <MainBar />
                <button>NO</button><button>Yes</button>
            </div>
        );
    }
}

export default Connect;