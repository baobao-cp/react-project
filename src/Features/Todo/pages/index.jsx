import { TextField } from '@mui/material';
import React, { useState, useEffect, useRef, useLayoutEffect, useMemo } from 'react'
import TodoList from '../Components/TodoList'
import TodoForm from './../Components/TodoForm/index';
import './style.scss'


function TodoFeature() {
    const [list, setList] = useState([])
    const [filter, setFilter] = useState('all')
    const sort = useRef('ASC')


    const handleData = (data) => {
        const newList = [...list, data]
        setList(newList)
    }
    const renderList = useMemo(() => {
        console.log('renderList')
        return list.filter(item => filter === 'all' || filter === item.status)
    }, [list, filter])


    const handlefilter = (filterOption) => {
        setFilter(filterOption)
    }

    const handledata = (id) => {
        const newList = list.map(item => {
            if (item.id === id) {
                item.status = item.status === 'new' ? 'complete' : 'new'
            }
            return item
        })
        setList(newList)
    }

    const sortByDate = () => {
        const newlist = [...list]
        switch (sort.current) {
            case 'ASC': {
                newlist.sort((a, b) => new Date(a.time) - new Date(b.time))
                sort.current = 'DESC'
                break;
            }
            case 'DESC': {
                newlist.sort((a, b) => new Date(b.time) - new Date(a.time))
                sort.current = 'ASC'
                break;
            }
            default: {
                break;
            }
        }
        console.log(newlist)
        setList(newlist)
    }
    return (
        <div className="container">
            <h1>Todo Feature</h1>

            <TodoForm onSubmit={handleData} />
            <button onClick={() => sortByDate()}>Sort by Date</button>
            <TodoList list={renderList} onTodoClick={handledata} status={filter} />
            <button onClick={() => handlefilter("all")} >Show ALl</button>
            <button onClick={() => handlefilter("complete")} >Show Complete</button>
            <button onClick={() => handlefilter("new")} >Show New</button>
        </div>
    )
}

export default TodoFeature