import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import { DropOption } from '../../components'
const confirm = Modal.confirm

function actions({ selected, deleteSystemRestore }) {
  const handleMenuClick = (event, record) => {
    switch (event.key) {
      case 'delete':
        confirm({
          title: `Are you sure you want to delete System Restore ${record.name} ?`,
          onOk() {
            deleteSystemRestore(record)
          },
        })
        break
      default:
    }
  }

  const availableActions = [
    { key: 'delete', name: 'Delete' },
  ]

  return (
    <DropOption menuOptions={availableActions}
      onMenuClick={(e) => handleMenuClick(e, selected)}
    />
  )
}

actions.propTypes = {
  selected: PropTypes.object,
  deleteSystemRestore: PropTypes.func,
}

export default actions
