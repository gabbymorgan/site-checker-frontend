import React, { Component } from 'react';

class Searchbar extends Component {
    state = {
        search: '',
        data: {}
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.search(this.state.search);
    }

    render() {
        return (
            <div>
                <h1>Enter stuff.</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input name='search' type='text' placeholder='www.mysite.com'
                     onChange={this.handleChange.bind(this)}/>
                     <button value='Submit'>Dude!</button>
                </form>
                </div>
        );
    }
}

export default Searchbar;