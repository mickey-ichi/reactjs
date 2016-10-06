import React from 'react';
import './Login.css';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';


class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-12">
                <Paper zDepth={1} className="form-login col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <TextField hintText="e-mail Address" fullWidth={true} type="email"/>
                            </div>
                            <div className="form-group">
                                <TextField type="password" hintText="Password" fullWidth={true}/>
                            </div>
                            <div className="text-center form-group">
                                <RaisedButton
                                    label="Login"
                                    labelPosition="before"
                                    primary={true}
                                    icon={<ChevronRight />}
                                />
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }

}

export default LoginComponent;
