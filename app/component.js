//component.js

'use strict'
import React from 'react'
export class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:props.initialcount || 0}
    }
    tick(){
        this.setState({count: this.state.count + 1});
    }
    render(){
        return(
            <div onClick={this.tick.bind(this)}>
                Clicks: {this.state.count}
            </div>
        );
    }
}
