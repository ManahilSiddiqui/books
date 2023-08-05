import { useState } from 'react';


export default function BookEdit({ book }) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('New title', title);
    };


    return (

        <div>
            <form onSubmit={handleSubmit} className="book-edit">
                <label> Title </label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button is-primary">
                    Save
                </button>

            </form>
        </div>
    )
}