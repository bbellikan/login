import React from 'react';
import PropTypes from 'prop-types';

export default class Editable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: this.props.isEditing || false
        };

        this.onblur_handler = this.onblur_handler.bind(this);
        this.onchange_handler = this.onchange_handler.bind(this);
    }

    onblur_handler() {
        this.setState({
            isEditing: !this.state.isEditing,
        });
    }

    onchange_handler() {

        let value = this.props.gridCol.inputType === 'checkbox' ? this.inputControl.checked : this.inputControl.value;
        this.props.updateCell(this.props.rowNumber, this.props.gridCol.header, value);
    }

    render() {
        let input = this.props.gridCol.inputType === 'checkbox'
            ? <label className='containerLabel'>
                <input id = {this.props.gridCol.number + '_' + this.props.rowNumber}
                       type='checkbox'
                       ref={(input) => {
                           this.inputControl = input;
                       }}
                       onChange={this.onchange_handler}
                       checked={this.props.value ? 'checked' : ''}
                />
                <span className='checkmark'
                      onBlur={this.onblur_handler}
                      autoFocus
                ></span>
            </label>
            : <input type={this.props.gridCol.inputType}
                     className='input'
                     ref={(input) => {
                         this.inputControl = input;
                     }}
                     value={this.props.value}
                     onChange={this.onchange_handler}
                     onBlur={this.onblur_handler}
                     autoFocus/>;

        if (this.state.isEditing) {

            return <div
                className='cell'
            >
                {input}
            </div>;
        }

        return <div
            className='cell'
            onClick={this.onblur_handler}
        >
            {this.props.gridCol.inputType === 'checkbox' ? input :this.props.value}
        </div>;
    }
}

Editable.propTypes = {
    gridCol:PropTypes.object.isRequired,
    rowNumber: PropTypes.number.isRequired,
    value:PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number]),
    updateCell:PropTypes.func.isRequired
};
