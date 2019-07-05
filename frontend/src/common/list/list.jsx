import React, {Component} from 'react'

class List extends Component {
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

export default List