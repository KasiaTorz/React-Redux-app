import React, { Component } from 'react';


class Posts extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }

    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data=>this.setState({posts:data}));
    }
    render() {
        const postsItems= this.state.posts.map(post=> (<div key={post.id}></div>));
        return (
            <div >
                <h1> Newest posts from fashon world</h1>
            </div>
        );
    }
}

export default Posts;