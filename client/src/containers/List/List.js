import React, { Component } from 'react';
import Card from '../../components/Card/Card'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import * as phoneActions from '../../store/actions'

export class List extends Component {

  state = {
    loaded: false
  }

  componentDidMount () {
    this.props.onGetPhones()
  }

  selectPhoneHandler(id) {
    this.props.onSelectPhone(id)
    this.props.history.push('phone/' + id)
  }

  render () {
    let products = <p>Cargando..</p>
    if (this.props.phones) {
      products = this.props.phones.map(phone =>{
        return (
          <Card key={phone.id}
                click={() => this.selectPhoneHandler(phone.id)}
                phone={phone}/>
        )
      })
    }
    return (
      <div className="catalog">
        {products}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    phones: state.phones,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetPhones: () => dispatch(phoneActions.getPhones()),
    onSelectPhone: (phoneId) => dispatch(phoneActions.selectPhone(phoneId))
  }

}

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(List))
