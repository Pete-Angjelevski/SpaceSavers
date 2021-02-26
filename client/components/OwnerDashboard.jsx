import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateOwnerBalance } from '../actions/owner'

function OwnerDashboard(props) {
  // const [balance, setBalance] = useState(0)
  let { owner } = props

  useEffect(() => {
    console.log('effect running')
    updateOwnerBalance(props.dispatch)
  }, [])

  return (
    <div className='owner-dashboard'>
      <div>dashboard component</div>
      <div>Account Balance: ${owner.balance} </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    owner: state.owner
  }
}

export default connect(mapStateToProps)(OwnerDashboard)