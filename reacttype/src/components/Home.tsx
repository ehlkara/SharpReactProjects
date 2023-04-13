import React from 'react'

type DataComing = {
    name: string
}

export default function Home(props: DataComing) {
    return (
        <div>{props.name}</div>
    )
}
