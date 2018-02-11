import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../actions/appActions';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          members: this.props.members,
          searchText: ""
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
        this.setState({searchText: event.target.value});
    };

    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <ListGroup>
                        {this.state.members.map((member, i) => 
                            <ListGroupItem key={i}>{member.name}</ListGroupItem>
                        )}
                    </ListGroup>
                </div>
            </div>
        )
    };
}

function mapStateToProps(state, ownProps) {
    return {
        members: state.members
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Members);