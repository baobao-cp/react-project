import React from 'react'
import PropTypes from 'prop-types'

List.propTypes = {
    list: PropTypes.array,
}

// List.defaultProps = {
//     items: [],
// }
function List(props) {
    const { list } = props

    return (
        <div>
            <h1>{list.length}</h1>
            <ul>
                {list.map((item, i) =>
                    <li
                        key={i}>{item}
                    </li>)
                }
            </ul>
        </div>
    )
}



export default List
