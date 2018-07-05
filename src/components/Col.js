import React, { Component } from 'react';
import CellHeader from './CellHeader';
import Editable from './Editable'

class Col extends Component {
    constructor(props) {
        super(props)

        this.getColStyle = this.getColStyle.bind(this);
    }

    getColStyle() {
        return {
            width: this.props.gridCol.width + 'px',
            order: this.props.gridCol.order
        }
    }

    render() {
        return (
            <div className="grid-col"
                style={this.getColStyle()}
            >

                <CellHeader 
                    gridCol={this.props.gridCol}
                    clicked={this.props.clicked}
                    updateClicked={this.props.updateClicked}
                    onRightEdge={this.props.onRightEdge}
                    updateColOrder={this.props.updateColOrder}
                    updateSort = {this.props.updateSort}
                    deleteCol = {this.props.deleteCol}

                />
                {this.props.gridData.map((item,index)=>{
                    return(
                    <Editable
                        inputClassName="input"
                        key={this.props.gridCol.number + '_' + index}
                        colNumber={this.props.gridCol.number}
                        gridCol={this.props.gridCol}
                        rowNumber={index}
                        value = {item[this.props.gridCol.header]}
                        updateCell = {this.props.updateCell}
                    >

                    </Editable>
                    )
                })}

            </div>
        );
    }
}

export default Col;
