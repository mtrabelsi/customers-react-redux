import React from 'react'
import Moment from 'moment'
import 'moment/locale/de'

const DATE = 'date';
const COMPLEX = 'complex'
const DELETE = 'delete'

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.customers = [
          {
              "customerID": 1,
              "name": {
                  "first": "Peter",
                  "last": "Smith"
              },
              "birthday": "1996-10-12",
              "gender": "m",
              "lastContact": "2017-06-01T23:28:56.782Z",
              "customerLifetimeValue": 191.12
          },
          {
              "customerID": 2,
              "name": {
                  "first": "Anna",
                  "last": "Hopp"
              },
              "birthday": "1987-05-03",
              "gender": "w",
              "lastContact": "2017-07-08T13:18:56.888Z",
              "customerLifetimeValue": 50.99
          },
          {
              "customerID": 3,
              "name": {
                  "first": "Christian",
                  "last": "Cox"
              },
              "birthday": "1991-02-21",
              "gender": "m",
              "lastContact": "2017-08-01T11:57:47.142Z",
              "customerLifetimeValue": 0
          },
          {
              "customerID": 4,
              "name": {
                  "first": "Roxy",
                  "last": "Fox"
              },
              "birthday": "1979-06-30",
              "gender": "w",
              "lastContact": "2017-01-2-29T21:08:50.700Z",
              "customerLifetimeValue": 213.12
          },
          {
              "customerID": 5,
              "name": {
                  "first": "Eric",
                  "last": "Adam"
              },
              "birthday": "1969-11-21",
              "gender": "m",
              "lastContact": "2017-03-18T12:20:06.702Z",
              "customerLifetimeValue": 1019.91
          }
      ]
    }
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
              {this.customers.map((dataRow, i) =>
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
