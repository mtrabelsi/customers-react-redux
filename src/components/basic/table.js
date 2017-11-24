import React from 'react'
import Row from './table.row'
import CellMobile from './table.cell.mobile'

class Table extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (<div>
          <div className='table-mobile'>
                {this.props.data.map((dataRow, i) =>
                    <div className='table-mobile__cell' key={dataRow[this.props.uniqueKey]}>
                        {this.props.columns.map(column =>
                            <CellMobile key={column.key} dataRow={dataRow} column={column} {...this.props} />
                        )}
                    </div>
                )}
          </div>

          <table className='table'>
            <thead className='table__head'>
              <tr>
                {this.props.columns.map(column =>
                  <th className='table__th' key={column.key}>
                      {column.label}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((dataRow, i) =>
                  <Row key={dataRow[this.props.uniqueKey]}
                       dataRow={dataRow}
                       i={i}
                       {...this.props}
                  />
              )}
            </tbody>
          </table>
        </div>)
    }
}

export default Table
