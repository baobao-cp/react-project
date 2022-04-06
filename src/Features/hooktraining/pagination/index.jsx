import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    handlefilter: PropTypes.func,
}

Pagination.default = {
    handlefilter: null,
}
function Pagination(props) {
    const { pagination, handlefilter } = props
    const maxPage = Math.ceil(pagination._totalRows / pagination._limit)
    // console.log("render.....")
    // console.log(pagination)
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <button className="btn"
                    disabled={pagination._page <= 1}
                    onClick={() => handlefilter({ ...pagination, _page: pagination._page - 1 })}
                >
                    Previous
                </button>
                {
                    Array.from({ length: maxPage }, (_, i) => i + 1).map(page => (
                        <li key={page} className={page === pagination._page ? 'page-item active' : 'page-item'}>
                            <button className="btn"
                                onClick={() => handlefilter({ ...pagination, _page: page })}
                            >
                                {page}
                            </button>
                        </li>
                    ))
                }

                <button className="btn"
                    disabled={pagination._page >= maxPage}
                    onClick={() => handlefilter({ ...pagination, _page: pagination._page + 1 })}
                >Next
                </button>
            </ul>
        </nav>
    )
}



export default Pagination
