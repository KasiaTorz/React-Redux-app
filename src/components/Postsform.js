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
                        <input type= "text" name="title"/>
                    </div>
                    <div>
                        <label>Body</label><br/>
                        <textarea name="body"/><br/>
                        <button type="submit">Accept</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default Postsform;