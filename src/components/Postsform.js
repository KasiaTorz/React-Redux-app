import React, { Component } from 'react';


class Postsform extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:'',

        };

        this.onChange= this.onChange.bind(this);
    }

    render() {
     return(
            <div >
                <h1> About Fashon</h1>
                <form>
                    <div>
                        <label>Title</label><br/>
                        <input type= "text" name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label>Body</label><br/>
                        <textarea name="body" onChange={this.onChange} value={this.state.body}/><br/>
                        <button type="submit">Accept</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default Postsform;