import React from 'react'
import Cell from './table.cell'

class Row extends React.Component {
    render() {
        return (<tr onClick={ e => this.props.onRowClick(this.props.i)}>
                  {this.props.columns.map(column =>
                      <Cell key={column.key} column={column} {...this.props} />
                  )}
            </tr>)
    }
}

export default Row
