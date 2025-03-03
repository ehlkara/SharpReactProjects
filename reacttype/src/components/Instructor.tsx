import { instructorProps } from './propstypes';

export default function Instructor(props: instructorProps) {
    return (
        <div>{props.instructorNameLastName.firstName} {props.instructorNameLastName.lastName}</div>
    )
}
