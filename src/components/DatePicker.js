import React from 'react';
import {connect} from "react-redux";
import {actionCreators} from "../store/Names";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        let dt = new Date();
        this.state = {date: dt.getFullYear() + "-" + ("0" + props.month).slice(-2) + "-" + ("0" + props.day).slice(-2)};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({date: event.target.value});
    }
    
    handleSubmit(event) {
        let dt = new Date(this.state.date);
        this.props.fetchNames(dt.getDate(),dt.getMonth()+1);
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className="form-row align-items-center">
                    <FormGroup className="col-12 col-lg-9 my-1">
                        <Label className="sr-only" for="date">Date</Label>
                        <Input type="date" name="date" id="date" value={this.state.date} onChange={this.handleChange} />
                    </FormGroup>
                    <div className="col-12 col-lg-3 my-1">
                        <Button className="w-100">Najdi</Button>
                    </div>
                </div>         
            </Form>
        );
    }
}

export default connect(
    state => { return { day: state.names.day, month: state.names.month }},
    { fetchNames: actionCreators.fetchNames }
)(DatePicker);