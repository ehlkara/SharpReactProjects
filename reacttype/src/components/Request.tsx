type RequestProps = {
    status: 'loading' | 'success' | 'error';
}

export default function Request(props: RequestProps) {

    let message = "";

    if(props.status === 'loading') {
        message = "Installing"
    }

    if(props.status === 'success') {
        message = "Success"
    }

    if(props.status === 'error') {
        message = "Error"
    }

    return (
        <div>
            {message}
        </div>
    )
}
