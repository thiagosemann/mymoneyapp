import React, {Component} from 'react'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {init} from './billingCycleActions'
import CreditList from './creditList'

class BillingCycleForm extends Component{

    changeButton() {
        switch(this.props.tab.selected) {
            case 'tabDelete':
                return <button type='submit' className='btn btn-danger'>Excluir</button>
            case 'tabUpdate':
                    return <button type='submit' className='btn btn-info'>Alterar</button>
            case 'tabCreate':
                    return <button type='submit' className='btn btn-primary'>Criar</button>                             
            default:
                <button type='submit' className='btn btn-success'>Criar</button>
        } 

    }

    render() {
        const {handleSubmit, readOnly, credits} = this.props
          return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component ={labelAndInput} readOnly = {readOnly}
                            label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component ={labelAndInput} readOnly = {readOnly}
                           label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field name='year' component ={labelAndInput} readOnly = {readOnly}
                           label='Ano' cols='12 4' placeholder='Informe o ano'/>
                    <CreditList cols='12 6' list={credits} readOnly={readOnly}></CreditList>
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
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({tab:state.tab, credits:selector(state,'credits')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)
