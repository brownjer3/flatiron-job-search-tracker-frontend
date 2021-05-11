import React from 'react'

const style = {
    login: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
    },
    form: {
        border: 'none'
    }
}

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.handleLogin(this.state)
    }

    render(){
        return(
            <div className="login" style={ style.login }>
                <h3 style={{ textAlign: 'center' }}>Flatiron<br />Job Search Tracker</h3><br />
                <form style={ style.form } onSubmit={ this.handleOnSubmit }>
                    <input type="text" name="email" placeholder="Email" onChange={ this.handleOnChange } /><br />
                    <input type="password" name="password" placeholder="Password" onChange={ this.handleOnChange } /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login