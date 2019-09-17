import React from 'react';
import {connect} from "react-redux";
import { Table, Alert, Spinner } from 'reactstrap';

const Names = (props) => {
    if (props.error) {
        return <Alert color="danger">Došlo k chybě</Alert>;
    }
    else if (props.busy)
    {
        return <div className="text-center m-3"><Spinner /></div>;
    } 
    else if (props.name_us !== "" ) {
        return (
            <>
            <p>Na <b>{props.day}. {props.month}.</b> připadají následující svátky:</p>
            <Table responsible="true">
                <tbody>
                    <tr>
                        <th>Česko</th>
                        <td>{props.name_cz}</td>
                    </tr>
                    <tr>
                        <th>Francie</th>
                        <td>{props.name_fr}</td>
                    </tr>
                    <tr>
                        <th>Chorvatsko</th>
                        <td>{props.name_hr}</td>
                    </tr>
                    <tr>
                        <th>Itálie</th>
                        <td>{props.name_it}</td>
                    </tr>
                    <tr>
                        <th>Maďarsko</th>
                        <td>{props.name_hu}</td>
                    </tr>
                    <tr>
                        <th>Německo</th>
                        <td>{props.name_de}</td>
                    </tr>
                    <tr>
                        <th>Polsko</th>
                        <td>{props.name_pl}</td>
                    </tr>
                    <tr>
                        <th>Rakousko</th>
                        <td>{props.name_at}</td>
                    </tr>                   
                    <tr>
                        <th>Slovensko</th>
                        <td>{props.name_sk}</td>
                    </tr>                    
                    <tr>
                        <th>Spojené státy americké</th>
                        <td>{props.name_us}</td>
                    </tr>                  
                    <tr>
                        <th>Španělsko</th>
                        <td>{props.name_es}</td>
                    </tr>
                    <tr>
                        <th>Švédsko</th>
                        <td>{props.name_se}</td>
                    </tr>
                </tbody>
            </Table>
            </>
        );
    }
    else
    {
        return <Alert color="primary">Vyberte datum</Alert>
    }
    
}

export default connect(
    state => { 
        return { 
            name_us: state.names.name_us, 
            name_cz: state.names.name_cz,
            name_sk: state.names.name_sk, 
            name_fr: state.names.name_fr,
            name_hu: state.names.name_hu,
            name_hr: state.names.name_hr,
            name_se: state.names.name_se,
            name_at: state.names.name_at,
            name_it: state.names.name_it, 
            name_de: state.names.name_de,
            name_es: state.names.name_es,
            name_pl: state.names.name_pl,        
            day: state.names.day, 
            month: state.names.month,
            error: state.names.error,
            busy: state.names.busy
        }
    },
    { }
)(Names);