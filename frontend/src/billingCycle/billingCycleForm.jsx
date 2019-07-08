import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {init} from './billingCycleActions'
import IconButton from '../common/button/iconButton'


class BillingCycleForm extends Component{

    changeButton() {
        switch(this.props.selected) {
            case 'tabDelete':
                return <button type='submit' className='btn btn-danger'>Excluir</button>
            case 'tabUpdate':
                    return <button type='submit' className='btn btn-warning'>Alterar</button>
            case 'tabCreate':
                    return <button type='submit' className='btn btn-success'>Criar</button>                             
            default:
                <button type='submit' className='btn btn-success'>Criar</button>
        } 

    }

    render() {
        const {handleSubmit, readOnly} = this.props
          return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component ={labelAndInput} readOnly = {readOnly}
                            label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component ={labelAndInput} readOnly = {readOnly}
                           label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field name='year' component ={labelAndInput} readOnly = {readOnly}
                           label='Ano' cols='12 4' placeholder='Informe o ano'/>
                </div>
                <div className='box-footer'>
                    {this.changeButton()}
                    <button type='button' className='btn btn-default'
                            onClick={this.props.init}>Cancelar</button>

                </div>
            </form>


        )
    }
}
BillingCycleForm = reduxForm({form:'billingCycleForm',destroyOnUnmount: false})(BillingCycleForm)
const mapStateToProps = state => ({selected: state.tab.selected})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)
