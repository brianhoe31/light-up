import React, {Component} from 'react';
import './Box.css'

class Box extends Component {
    static defaultProps = {
        light: "off"
    }

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.changeColor(this.props.value);
    }

    render(){ 
        return(
            <div className={this.props.light + " Box"} onClick={this.handleClick}></div>
        )
    }
}

export default Box;