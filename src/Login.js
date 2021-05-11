import React from 'react'

const style = {
    login: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
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
        }, ()=>console.log(this.state))
    }

    handleOnSubmit = e => {

    }

    render(){
        return(
            <div className="login" style={ style.login }>
                <form style={ style.form } onSubmit={ this.handleOnSubmit }>
                    <input type="text" name="email" placeholder="Email" onChange={ this.handleOnChange } /><br />
                    <input type="text" name="password" placeholder="Password" onChange={ this.handleOnChange } />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login