import React, { Component } from 'react';


class Postsform extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:'',

        }

    }

    render() {
     return(
            <div >
                <h1> About Fashon</h1>
                <form>
                    <div>
                        <label>Title</label><br/>
                        <input type= "text" name="title" value={this.state.title}/>
                    </div>
                    <div>
                        <label>Body</label><br/>
                        <textarea name="body" value={this.state.value}/><br/>
                        <button type="submit">Accept</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default Postsform;