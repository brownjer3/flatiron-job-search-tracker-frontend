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
        border: 'none',
        minWidth: '300px'
    }
}

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        displayAlert: false,
        error: '',
        logo: '/images/flatiron-jst.png'
    }

    handleOnChange = e => {
        if (!!this.state.displayAlert) {
            this.setState({...this.state, displayAlert: false})
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        let data = {
            email: this.state.email,
            password: this.state.password
        }

        this.handleLogin(data)
    }

    handleLogin = data => {
        let url = 'http://localhost:3000'

        let loginObj = {
            user: {
            email: data.email,
            password: data.password
            }
        }

        let configObj = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(loginObj)
        }

        fetch(url + '/login', configObj)
            .then(res => res.json())
            .then(data => {
            console.log(data)
            if (!!data.error) {
                console.log(data.error)
                this.setState({...this.state, displayAlert: true, error: data.error })
            } else {
                sessionStorage.setItem('jwt', data.jwt)
                this.props.toggleLogin(data.data)
            }
        })
    }

    closeAlert = () => {
        this.setState({...this.state, displayAlert: false })
    }

    render(){
        return(
            <div className="login" style={ style.login }>
                {/* <h3 style={{ textAlign: 'center' }}>Flatiron<br />Job Search Tracker</h3><br /> */}
                <img src={ this.state.logo } alt="Logo" style={{ width: '100%', marginBottom: '10px', maxWidth: '300px' }} />
                <form style={ style.form } onSubmit={ this.handleOnSubmit }>
                    <input type="text" name="email" placeholder="Email" onChange={ this.handleOnChange } /><br />
                    <input type="password" name="password" placeholder="Password" onChange={ this.handleOnChange } /><br />
                    <button type="submit">Login</button>
                    { this.state.displayAlert ? <div className="alert" onClick={ this.closeAlert }>{ this.state.error }</div> : null }
                </form>
            </div>
        )
    }
}

export default Login