import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getList} from './billingCycleActions'

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
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycle)
