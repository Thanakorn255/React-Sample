import React, { Component } from 'react'

export default class User extends Component {
    constructor(){
        super();    
        console.log('constuctor');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    onChange = event => {
        console.log(event.target.value);
    }
    render() {
        console.log('render');
        return (
            <div>
                <div><input type="text" onChange = {this.onChange} /></div>
            </div>
        )
    }
}
