import React from 'react';
import LoginForm from '../forms/LoginForm.jsx';

export default class LoginPage extends React.Component {
    loginWithPassword(e) {
        e.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val();
        Meteor.loginWithPassword(email, password, (error) => {
            if(error) { console.log('Error : ' + error.reason) }
            else { FlowRouter.go('/') }
        });
    }

    render() {
        return (
            <div className='row col-xs-6 col-md-offset-3'>
                <h1>Login</h1>
                <LoginForm submitAction={this.loginWithPassword} />
            </div>
        )
    }
}
