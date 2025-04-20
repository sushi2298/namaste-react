import { Component } from 'react';

class UserClass extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     count: 0
        // };
        this.count = 0;
    }

    render() {
        const { name } = this.props;
        
        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <p>Email: sushmitha.g@gmail.com</p>
                <p>Phone: 8989898989</p>
                <button onClick={()=>{this.setState({count: count+1})}}>Add</button>
            </div>
        )
    }
}

export default UserClass;