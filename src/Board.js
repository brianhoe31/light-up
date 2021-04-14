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
        this.state = { board: this.boardArr(), gameOver: false}
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
        //check if game over 
        let on = 0;
        this.state.board.forEach(e => {
            if(e === "on"){
                on++;
            }
        })

        if(on === 0){
            this.setState(st => ({ gameOver: true}));
        }
    }

    boardArr() {
        let arr = new Array(this.props.nBox);
        let rand = function () {
            return Math.floor(Math.random() * 2);
        }

        for(var i=0; i< arr.length; i++){
            if(rand() === 1){
                arr[i] = "on";
            }else{
                arr[i] = "off";
            }
        }
        return arr;
    }


    createBoard() {
        return this.state.board.map((stat, idx) => (
            <Box light={stat} changeColor={this.changeColor} key={idx} value={idx} />
        ))
    }

    render() {
        console.log(this.state.nOn);
        return (
            <div className="Board">
                <h1>Lights Out</h1>
                <div>{this.state.gameOver ? "Game Over" : this.createBoard()}</div>
            </div>
        )
    }
}

export default Board;