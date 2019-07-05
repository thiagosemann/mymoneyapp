import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {showUpdate,getList} from './billingCycleActions'

class BillingCycle extends Component {
    componentWillMount() {
        this.props.getList()
    }
    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                </td>
            </tr>
        ))
    }
    renderHeadRows() {
        const headList = this.props.headList || []
           return(
            <tr>
                <th>{headList[0]}</th>
                <th>{headList[1]}</th>
                <th>{headList[2]}</th>
                <th>{headList[3]}</th>
            </tr>
           )
    }
   
    render () {
         return (
            <div>
                <table className='table'>
                    <thead>
                        {this.renderHeadRows()}
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList,showUpdate}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycle)
