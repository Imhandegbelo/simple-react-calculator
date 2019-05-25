import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";


class App extends Component {
    constructor() {
        super();

        this.state = {
            memory: '',
            result: "",
            Quadmode: false
        }
    }


    onClick = button => {

        if (button === "=") {
            this.calculate()
        }

        else if (button === "C") {
            this.reset()
        }
        else if (button === "CE") {
            this.backspace();
        }
        else if (button === "^") {
            this.power()
        }
        else if (button === "Sqrt") {
            this.squareRoot()
        }
        else if (button === "Sin") {
            this.calcSin()
        }
        else if (button === "Cos") {
            this.calcCos()
        }
        else if (button === "Tan") {
            this.calcTan()
        }
        else if (button === "M") {
            this.setState({
                result: this.state.memory,
                memory: this.state.memory
            })
        }
        else if (button === "M+") {
            this.setState({
                memory: this.state.memory + this.state.result
            })
        }
        else if (button === "M-") {
            this.setState({
                memory: this.state.memory - this.state.result
            })
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    toggleMode = () =>{
        this.setState({
            Quadmode: true
        });
    }


    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--', '+')
        }
        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "Error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    power = () => {
        this.setState({
            result: Math.pow(this.state.result, 2)
        })
    };

    squareRoot = () => {
        this.setState({
            result: Math.pow(this.state.result, 0.5)
        })
    };

    calcSin = () => {
        this.setState({
            result: Math.sin(this.state.result * (Math.PI / 180)).toFixed(14)
        })
    };

    calcCos = () => {
        this.setState({
            result: Math.cos(this.state.result * (Math.PI / 180)).toFixed(14)
        })
    };

    calcTan = () => {
        this.setState({
            result: Math.tan(this.state.result * (Math.PI / 180)).toFixed(14)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1 style={{background: "grey"}}>Simple Calculator</h1>
                    <ResultComponent result={this.state.result} />
                    <KeyPadComponent onClick={this.onClick} />
                </div>
            </div>
        );
    }
}

export default App;
