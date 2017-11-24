import React from 'react'
import { Link } from 'react-router'
import Table from './basic/table'

const DATE = 'date'
const COMPLEX = 'complex'
const DELETE = 'delete'

class CustomersList extends React.Component {
    constructor(props) {
        super(props)
        this.onRowClick = this.onRowClick.bind(this)
        this.onRowRemove =  this.onRowRemove.bind(this)
    }
    onRowClick(index) {
        this.props.router.push(`/customer/${index}`)
    }
    onRowRemove(index) {
        this.props.removeCustomer(index)
    }
    render() {
        return (<div>
            <Table
                className={null}
                uniqueKey='customerID' // mandatory props for React performance/stability
                columns={[{
                  key: 'customerID',
                  label: 'ID'
                }, {
                  key: 'name',
                  label: 'Full Name',
                  type: COMPLEX,
                  compute: name => `${name.first} ${name.last}`
                }, {
                  key: 'birthday',
                  label: 'Birthday',
                  type: DATE,
                  locale: 'LL',
                  erroMsg: 'Ops something wrong..'
                }, {
                  key: 'gender',
                  label: 'Gender'
                }, {
                  key: 'lastContact',
                  label: 'Last Contact',
                  type: DATE,
                  locale: 'LLLL',
                  erroMsg: 'Ops something wrong..'
                }, {
                  key: 'customerLifetimeValue',
                  label: 'Customer Value'
                }, {
                  key: 'delete',
                  label: '',
                  type: DELETE
                }]}
                data={this.props.customers}
                onRowClick={this.onRowClick}
                onRowRemove={this.onRowRemove}
            />
        </div>)
    }
}

export default CustomersList;
