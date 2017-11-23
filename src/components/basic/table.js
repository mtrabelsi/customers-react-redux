import React from 'react'
import Moment from 'moment'
import 'moment/locale/de'

const DATE = 'date';
const COMPLEX = 'complex'
const DELETE = 'delete'

class Table extends React.Component {
    render() {
        return (<div>
          <table>
            <thead>
              <tr>
                {this.props.columns.map(column =>
                  <th key={column.key}>
                    {column.label}
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((dataRow, i) =>
                <tr key={i}>
                  {this.props.columns.map(column =>
                    <td key={column.key}>
                        {(() => {
                          switch (column.type) {
                              case COMPLEX: // complex json objects
                                  return column.compute(dataRow[column.key])
                              case DATE: // date
                                  const date = Moment(dataRow[column.key])
                                  return date.isValid() ? date.format(column.locale) : column.erroMsg
                              case DELETE: // delete action
                                  return <span onClick={ e => this.props.onRowClick(i) }
                                               style={{ color: 'red' }}>
                                               Delete
                                        </span>
                              default : // default: string or number..
                                  return dataRow[column.key]
                          }
                        })()}
                    </td>
                  )}
                </tr>
               )}
            </tbody>
          </table>
        </div>)
    }
}

export default Table
