import React, {Component} from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import {selectTab, showTabs} from '../common/tab/tabActions'
import {create} from './billingCycleActions'
import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {
    componentWillMount (){
        const tabsToShow = ['tabList','tabCreate']
        this.props.selectTab(tabsToShow[0])             // Seleciona a tabList como Inicial
        this.props.showTabs(...tabsToShow)              // Seleciona as Tabs que serão exibidas
    }

    render() {
        const headList = ['Nome','Mês','Ano','Ações']
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                               <List headList={headList}/>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form />
                            </TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs,create}, dispatch)
export default connect(null,mapDispatchToProps)(BillingCycle)
