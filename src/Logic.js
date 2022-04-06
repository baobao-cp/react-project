import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import List from './List';

// const data = [
//     {
//         id: 1,
//         name: "lesson 1",
//         comment: []
//     },
//     {
//         id: 2,
//         name: "lesson 2",
//         comment: []
//     },
//     {
//         id: 3,
//         name: "lesson 3",
//         comment: []
//     }
// ]


function Logic() {
    const [lessons, setLessons] = useState(1)
    const [listComponents, setList] = useState([]);
    const dataAPI = useRef([
        {
            id: 1,
            name: "lesson 1",
            comment: []
        },
        {
            id: 2,
            name: "lesson 2",
            comment: []
        },
        {
            id: 3,
            name: "lesson 3",
            comment: []
        }
    ]);


    useEffect(() => {
        console.log("loding....")
        const handlers = (e) => {
            // dataAPI.current[lessons - 1].comment = e.detail;
            dataAPI.current[lessons - 1].comment.push(e.detail);
            let newList = [...dataAPI.current[lessons - 1].comment]
            setList(newList)
        }

        window.addEventListener(`event${lessons}`, handlers)

        return () => {
            window.removeEventListener(`event${lessons}`, handlers)
            console.log("removed event" + lessons)
        }
    }, [lessons])


    return (
        <div>
            <ul>
                {dataAPI.current.map(item =>
                    <button
                        key={item.id}
                        style={{
                            color: lessons === item.id ? 'red' : 'black'
                            , cursor: 'pointer'
                        }}
                        onClick={() => setLessons(item.id)}
                    >
                        {item.name}
                    </button>)}
                {console.log("loding2....")}
                <hr></hr>
                <h1>{dataAPI.current[lessons - 1].comment.length} Comments</h1>
                <h2>event of lession {lessons} is render ...</h2>
                <hr></hr>
                <List list={dataAPI.current[lessons - 1].comment} />
                {/* <ul>
                    {dataAPI.current[lessons - 1].comment.map((item, i) =>
                        <li
                            key={i}>{item}
                        </li>)}
                </ul> */}
                {/* <List todos={data[lessons - 1].comment} /> */}
            </ul>
        </div>

    )
}

export default Logic;
