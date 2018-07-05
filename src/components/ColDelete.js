import React, { Component } from 'react';

class ColDelete extends Component {
    constructor(props) {
        super(props);
        this.deleteRow = this.deleteRow.bind(this);
    }

    deleteRow(rowNumber){
        this.props.deleteRow(rowNumber);
    }

    render() {
        return (
            <div className="grid-col"
                 style={{order: 999, right: 0, position: 'sticky', backgroundColor: 'white'}}
            >
                <div className="cell cell-header"/>
                {this.props.gridData.map((item, index) => {
                    return (
                        <div key={index}
                             onClick = {()=>this.deleteRow(index)}>
                                <i className = "grid-coledit fa fa-trash"/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ColDelete;
