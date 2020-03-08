import React, { Component } from 'react'

class Search extends Component {

    state = {
        text: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text)
        this.setState({ text: '' })
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" name="text" placeholder="Search users..." value={this.state.text}
                        onChange={this.onChange}></input>
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {this.props.showClear &&
                 <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
                 }
            </div>
        )
    }
}

export default Search