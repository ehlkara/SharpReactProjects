import { useRef, useEffect } from 'react'

export default function RefExample() {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    );
}
