import React from 'react'

type DataComing = {
    name: string;
    courseNumber: number;
    isBest: boolean;
}

export default function Home(props: DataComing) {
    return (
        <div>
            {props.name}. Course number: {props.courseNumber}
             {props.isBest ? <p>The best react course is this course</p> : <p>The worst react course is this course</p>}
            </div>
    )
}
