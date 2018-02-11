import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../actions/appActions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
    };

    componentWillMount(){
        this.props.actions.listMembers();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.members !== this.props.members){
            this.setState({members: nextProps.members});
        }
    }

    handleChange(event){
        if(event.target.name === "username"){
            this.setState({searchText: event.target.value});
        }
        else{
            event.target.name === "password"
        }
    };

    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    Test
                </div>
            </div>
        )
    };
}

function mapStateToProps(state, ownProps) {
    return {
        
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);