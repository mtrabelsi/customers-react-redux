import React from 'react'
import Moment from 'moment'
import 'moment/locale/de'

const DATE = 'date';
const COMPLEX = 'complex'
const DELETE = 'delete'

class Cell extends React.Component {
    render() {
        return (<td className='table__td'>
                  {(() => {
                    switch (this.props.column.type) {
                        case COMPLEX: // complex json objects
                            return this.props.column.compute(this.props.dataRow[this.props.column.key])
                        case DATE: // date
                            const date = Moment(this.props.dataRow[this.props.column.key])
                            return date.isValid() ? date.format(this.props.column.locale) : this.props.column.erroMsg
                        case DELETE: // delete action
                            return <span onClick={ e => this.props.onRowRemove(e, this.props.i) }
                                         className='table__td-label table__td-label--red'>
                                         Delete
                                  </span>
                        default : // default: string or number..
                            return this.props.dataRow[this.props.column.key]
                    }
                  })()}
          </td>)
    }
}

export default Cell
