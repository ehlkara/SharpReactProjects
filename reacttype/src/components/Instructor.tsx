import React from 'react'

type instructorProps = {
    instructorNameLastName: {
        firstName: string,
        lastName: string
    }
}

export default function Instructor(props: instructorProps) {
    return (
        <div>{props.instructorNameLastName.firstName} {props.instructorNameLastName.lastName}</div>
    )
}
