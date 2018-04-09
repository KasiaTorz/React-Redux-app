import React, { Component } from 'react';


class Posts extends Component {
    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
    }
    render() {
        return (
            <div >
                <h1> Newest posts from fashon world</h1>
            </div>
        );
    }
}

export default Posts;