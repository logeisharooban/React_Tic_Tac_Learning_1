import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SocialMedia extends React.Component{
    render() {
        return (
            <div className="social-list">
                <h1>Social Media for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>WhatsApp</li>
                </ul>
            </div>
        )
    }
}

class Square extends React.Component {

    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }

    handleClick(i) {

        const squares = this.state.squares.slice();

        calculateWinner(squares);

        squares[i] = (this.state.xIsNext) ? 'X' : '0';
        // alert(this.state.squares);
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick = {() => this.handleClick(i)}
        />;
    }

    render() {

        const winner = calculateWinner(this.state.squares);

        let status;
        if(winner) {
            status = 'Winner is '+winner
        } else {
            status = 'Next player: '+(this.state.xIsNext ? 'X' : '0');
        }
        // const status = 'Next player: '+(this.state.xIsNext ? 'X' : '0');

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    /*calculateWinner(squares) {

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {

            const [a, b, c] = squares[i];

            alert(a);

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;

    }*/
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

ReactDOM.render(
    <div>
        <SocialMedia name="Ado"/>
        <SocialMedia name="Rooban"/>
        <SocialMedia name="Gona"/>
    </div>,
    document.getElementById('content')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        //alert(squares);
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}