import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
    }

    componentDidMount() {
      this.inputRef.current.focus();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        className="App-logo"
                        alt="logo"
                    />
                    <form>
                        <div className="form-input">
                            <input type="text" ref={this.inputRef}/>
                            <div className="icon-search">
                                <svg
                                    fill="#aaa"
                                    focusable="false"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="btn-group">
                            <button>Tìm với Google</button>
                            <button>Xem trang đầu tiên tìm được</button>
                        </div>
                    </form>
                </header>
            </div>
        );
    }
}

export default App;
