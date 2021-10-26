import React, { Component } from "react";

class Main extends Component {
    state = {
        counter: 0,
    };

    addHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    addFiveHandler = () => {
        this.setState({
            counter: this.state.counter + 5
        });
    };

    removeHandler = () => {
        if (this.state.counter !== 0){
        this.setState({
            counter: this.state.counter - 1
            });
        };
    };

    removeFiveHandler = () => {
        if (this.state.counter !== 0){
        this.setState({
            counter: this.state.counter - 5
            });
        };
    };

    resetHandler = () => {
        this.setState({
            counter: 0
        });
    };

    render() {
        let circleClass = "";

        this.state.counter === 0
        ? (circleClass = "circle")
        : this.state.counter % 2 === 0
        ? (circleClass = "circle even")
        : (circleClass = "circle odd");

    return (
        <main>
            <div className="circlecontainer">
                <div className={circleClass}>{this.state.counter}</div>
            </div>
        
            <div className="buttoncontainer">
            <button className="button1" onClick={this.addHandler}>Add one</button>
            <button className="button1" onClick={this.addFiveHandler}>Add five</button>
            <button className="button2" onClick={this.removeHandler}>Remove one</button>
            <button className="button2" onClick={this.removeFiveHandler}>Remove Five</button>
            <button className="button3" onClick={this.resetHandler}>Reset</button>
            </div>
        </main>
    );
};
}

export default Main;
