import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CellHeader extends Component {
    constructor(props) {
        super(props)

        this.dragstart_handler = this.dragstart_handler.bind(this);
        this.drop_handler = this.drop_handler.bind(this);
        this.dragover_handler = this.dragover_handler.bind(this);
        this.mousedown_handler = this.mousedown_handler.bind(this);
        this.mouseclicksort_handler = this.mouseclicksort_handler.bind(this);
        this.mouseclickdelete_handler = this.mouseclickdelete_handler.bind(this);
    }

    mouseclicksort_handler(ev) {
        this.props.updateSort(this.props.gridCol.number);
    }

    mouseclickdelete_handler(ev) {
        this.props.deleteCol(this.props.gridCol.number);
    }

    dragstart_handler(ev) {
        let dragData = {
            colNumber: this.props.gridCol.number
        };

        ev.dataTransfer.setData("text/plain", JSON.stringify(dragData));
        ev.dataTransfer.dropEffect = "copy";
    }

    dragover_handler(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move"
    }

    drop_handler(ev) {
        let dragData = JSON.parse(ev.dataTransfer.getData("text"));
        this.props.updateColOrder(dragData.colNumber, this.props.gridCol.order);
    }

    mousedown_handler(ev) {
        const rect = ev.target.getBoundingClientRect();

        let data = {
            targetid: ev.target.id,
            clientX: ev.clientX,
            width: rect.width,
            isResizing: this.props.onRightEdge(ev)
        };

        this.props.updateClicked(data);
    }

    render() {
        let sortDirection = this.props.gridCol.sort==='a' ?
            <div onClick={this.mouseclicksort_handler}>
                {' ' + this.props.gridCol.header + ' ' } &#708;
            </div>
            : this.props.gridCol.sort==='d' ?
                <div onClick={this.mouseclicksort_handler}>
                    {' ' + this.props.gridCol.header + ' ' } &#709;
                </div>
                : <div onClick={this.mouseclicksort_handler}>
                    {' ' + this.props.gridCol.header}
                </div>;


            return (

                <div id={this.props.gridCol.number + 'header'}
                     className="cell cell-header"
                     draggable="true"
                     onDragStart={this.dragstart_handler}
                     onDrop={this.drop_handler}
                     onDragOver={this.dragover_handler}
                     onMouseDown={this.mousedown_handler}

                >
                    <div onClick={this.mouseclickdelete_handler}>
                         <i className="fa fa-times"/>
                    </div> {sortDirection}

                </div>
            )
    }
}

CellHeader.propTypes = {
    gridCol:PropTypes.object.isRequired,
    updateClicked:PropTypes.func.isRequired,
    onRightEdge:PropTypes.func.isRequired,
    updateColOrder:PropTypes.func.isRequired,
    updateSort : PropTypes.func.isRequired,
    deleteCol : PropTypes.func.isRequired
};


