import React, { Component } from 'react';
import Box from './Box';
import './Board.css';
import {swap} from './helper';

class Board extends Component {
    static defaultProps = {
        nBox: 25
    }

    constructor(props) {
        super(props);
        this.state = { board: new Array(this.props.nBox).fill("off") }
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(val) {
        const original = this.state.board;

        this.setState(st => ({
            board: st.board.map((n, idx) => {
                if (val % 5 === 4) {
                    if (idx === val || idx === val - 1 || idx === val + 5 || idx === val - 5) {
                        return swap(original[idx]);
                    }else {
                        return original[idx];
                    }
                } else if(val % 5 === 0){
                    if (idx === val || idx === val + 1 || idx === val + 5 || idx === val - 5) {
                        return swap(original[idx]);
                    }else {
                        return original[idx];
                    }
                } else if (idx === val || idx === val - 1 || idx === val + 1 || idx === val + 5 || idx === val - 5) {
                    return swap(original[idx]);
                } else {
                    return original[idx];
                }
            })
        }))
    }

    createBoard() {
        return this.state.board.map((stat, idx) => (
            <Box light={stat} changeColor={this.changeColor} key={idx} value={idx} />
        ))
    }

    render() {
        return (
            <div className="Board">
                <h1>Lights Out</h1>
                <div>{this.createBoard()}</div>
            </div>
        )
    }
}

export default Board;