import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserHistory } from '../actions/user'

function ParkerHistory (props) {
  const { history } = props.user
  console.log(history)

  useEffect(() => {
    // user id 1 hardcoded in for now
    getUserHistory(4)
  }, [])
  return (
    <div className='xl:mx-32'>
      <h2 className='pt-20 pb-5 text-center text-4xl font-black uppercase font-work'>My Parking History</h2>
      <div className='flex flex-col my-5 lg:w-3/4 m-auto'>
        <div className='my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-blue-500'>
                  <tr>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                    Park
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                    Length
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                    Status
                    </th>
                    <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                    Cost
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>

                  { history.map((transaction) => {
                    return (
                      <tr key={transaction.id} >

                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm font-medium text-gray-900'>{transaction.parkName}</div>
                          <div className='text-sm text-gray-500'>{transaction.parkAddress}</div>
                        </td>

                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm font-medium text-gray-900'>Start: {transaction.startTime}</div>
                          <div className='text-sm font-medium text-gray-900'>End:   {transaction.endTime}</div>
                        </td>

                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm font-medium text-gray-900'>{transaction.finished ? 'Complete' : 'Incomplete'}</div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm font-medium text-gray-900'>${transaction.cost} </div>
                        </td>
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(ParkerHistory)
