import React, { Component } from 'react';

require('dotenv').config()

export default class Counter extends Component {
    state = {
        error: null,
        count: 0,
        isLoaded: false
    };
    componentDidMount() {
        // console.log(process.env.BACKEND_HOSTNAME + '/counter')
        fetch("/counter", {
            method: 'get'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        count: result.web_counter
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            console.log(error)
            return null
        }
        else if (isLoaded) {
            return (
                <div>
                    <span className={this.getCounterClasses()}>{this.formatCount()}</span>
                    <button className="btn btn-secondary btn-sm m-2" onClick={this.handleClick}>Increment</button>
                    <button className="btn btn-secondary btn-sm m-2" onClick={this.handleClickClear}>Clear</button>
                </div>
            );
        } else {
            return null
        }
    }
    handleClickClear = () => {
        fetch("/counter", {
            method: 'delete'
        }).then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    count: 0
                });
            },
            (error) => {
                console.log(error)
            }
        )
    }
    handleClick = () => {
        fetch("/counter", {
            method: 'post'
        }).then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    count: this.state.count + 1
                });
            },
            (error) => {
                console.log(error)
            }
        )
    }
    getCounterClasses() {
        let classes = "badge m-2 badge-"
        classes += this.state.count == 0 ? "warning" : "primary"
        return classes
    }

    formatCount() {
        return (this.state.count === 0 ? "Zero" : this.state.count);
    }
}
