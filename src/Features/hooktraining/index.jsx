import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import PostList from './PostList'
import './style.scss'
import Pagination from './pagination/index';
import FormFilter from './formSearch';
import Clock from './clock/index';

function HookComponent() {

    const [response, setResponse] = useState({
        data: [],
        pagination: {
            _page: 1,
            _limit: 10,
            _totalRows: 0,
        },
    })
    // const [posts, setPosts] = useState([])
    // const [pagination, setPagination] = useState({
    //     _page: 1,
    //     _limit: 10,
    //     _totalRows: 0,
    // })
    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 1,
        title_like: '',
    })


    useEffect(() => {
        async function fetchData() {
            const springParams = queryString.stringify(filter)
            console.log(springParams)
            // const response = await fetch(`https://localhost:3001/posts?${springParams}`)
            const posts = await fetch('http://js-post-api.herokuapp.com/api/posts?' + springParams)
                .then(res => res.json())
                .then(dataRes => {
                    // console.log(dataRes)
                    setResponse(dataRes)
                })
            // setPagination(data.pagination)
            // setPosts(data.data)
        }
        fetchData()
    }, [filter])

    const handlefilter = (value) => {
        setFilter({
            ...filter,
            _page: value._page
        })
    }

    const onSubmitFilter = (value) => {
        console.log(value)
        setFilter({
            ...filter,
            _page: 1,
            title_like: value.searchValue,
        })
    }

    return (

        <div className="container-sm">
            <Clock />
            {/* {console.log("hello")} */}
            <FormFilter onSubmitFilter={onSubmitFilter} />
            <Pagination pagination={response.pagination} handlefilter={handlefilter} />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <PostList posts={response.data} />
            </div>
        </div>
    )
}

export default HookComponent
