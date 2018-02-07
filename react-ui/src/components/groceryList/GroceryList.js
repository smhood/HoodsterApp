import React from 'react';
import {ListGroup, ListGroupItem, FormControl, Button} from 'react-bootstrap';

class GroceryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          groceryList: [],
          newItem: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
    };

    addItem(){
        let groceryList = Object.assign([], this.state.groceryList);

        groceryList.push(this.state.newItem);
        this.setState({newItem: "", groceryList: groceryList});
    };

    handleChange(event){
        this.setState({newItem: event.target.value});
    };

    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    {this.state.groceryList.map((item,i) => <li key={i}>{item}</li>)}
                    <FormControl
                        type="text"
                        value={this.state.newItem}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <Button onClick={() => this.addItem()}>Add Item</Button>
                </div>
            </div>
        )
    };
}

export default GroceryList;