import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import './style.scss'
import { ListItemButton, ListItemText } from '@mui/material'

TodoList.propTypes = {
    list: PropTypes.array,
    status: PropTypes.string.isRequired,
    onTodoClick: PropTypes.func,
}
TodoList.defaultProps = {
    list: [],
    onTodoClick: null,
}

function TodoList(props) {
    const { list, status, onTodoClick } = props
    return (
        <ul className="todo-list">
            <h4>list of stattus : {status}</h4>
            {list.length !== 0 ? list.map((item, idx) => (
                <li
                    key={idx}
                    className={className({
                        'todo-item': true,
                        complete: item.status === 'complete',
                    })}
                    onClick={() => onTodoClick(item.id)}
                >
                    {item.id} -- {item.title} -- {item.time}
                </li>
                // <ListItemButton component="a" href="#simple-list">
                //     <ListItemText primary="Spam" />
                // </ListItemButton>
            )) : <h3>No items</h3>}

        </ul>
    )
}



export default TodoList
