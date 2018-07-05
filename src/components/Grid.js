import React, { Component } from 'react';
import Col from './Col';
import ColDelete from './ColDelete';
import PropTypes from 'prop-types';

class Grid extends Component {
    constructor(props) {
        super(props)
        this.MARGINS = 8;
        this.MIN_WIDTH = 40;

        this.updateClicked = this.updateClicked.bind(this);
        this.mouseup_handler = this.mouseup_handler.bind(this);
        this.mousemove_handler = this.mousemove_handler.bind(this);
        this.onRightEdge = this.onRightEdge.bind(this);

        this.state = {
            clicked: {}
        }
    }
    componentDidMount() {
        this.panes = [...document.getElementsByClassName("cell-header")];
        document.addEventListener("mouseup", this.mouseup_handler);
        document.addEventListener("mousemove", this.mousemove_handler);
    }
    componentWillUnmount(){
        document.removeEventListener("mouseup", this.mouseup_handler,false);
        document.removeEventListener("mousemove", this.mousemove_handler,false);
    }

    updateClicked(data) {
        this.setState({...this.state, clicked : data});
    }

    mouseup_handler(e) {
        this.updateClicked({});
    }
    onRightEdge(e) {
        const rect = e.target.getBoundingClientRect();
        return e.clientX - rect.left >= rect.width - this.MARGINS;
    }

    mousemove_handler(e) {
        if (this.panes.includes(document.getElementById(e.target.id))) {
            this.pane = document.getElementById(e.target.id);
        }else{
            this.pane = null;
        }

        if(!this.pane) return;

        if (this.state.clicked && this.state.clicked.isResizing) {
            e.preventDefault();
        }

        if (this.state.clicked && this.state.clicked.isResizing) {
            this.pane.style.cursor = 'ew-resize';
        } else if (this.onRightEdge(e)) {
            this.pane.style.cursor = 'ew-resize';
        } else {
            this.pane.style.cursor = 'default';
        }

        if (this.state.clicked && this.state.clicked.isResizing) {
            let colNumber = parseInt(this.state.clicked.targetid,10);
            let newWidth = this.state.clicked.width + (e.clientX - this.state.clicked.clientX);
            newWidth = Math.max(this.MIN_WIDTH, newWidth);
            this.props.updateColWidth(colNumber, newWidth);
        }
    }
    render() {
        return (
            <div className = 'grid-container' >
                <div className = 'grid'>
                        {Object.keys(this.props.gridCols).map((item, index) => {
                            return (
                                <Col
                                    key= {'gridCols' + index}
                                    gridCol= {this.props.gridCols[item]}
                                    gridData= {this.props.gridData}
                                    updateClicked= {this.updateClicked}
                                    onRightEdge= {this.onRightEdge}
                                    updateColOrder= {this.props.updateColOrder}
                                    updateCell = {this.props.updateCell}
                                    updateSort = {this.props.updateSort}
                                    deleteCol = {this.props.deleteCol}
                                />)
                            }
                        )}
                        <ColDelete
                            gridData = {this.props.gridData}
                            deleteRow = {this.props.deleteRow}
                        />
                </div>

            </div>
        );
    }
}

export default Grid;

Grid.propTypes = {
    gridCols:PropTypes.object.isRequired,
    updateColOrder:PropTypes.func.isRequired,
    updateColWidth:PropTypes.func.isRequired,
    deleteRow:PropTypes.func.isRequired,
    updateCell:PropTypes.func.isRequired,
    updateSort : PropTypes.func.isRequired,
    deleteCol : PropTypes.func.isRequired
};

