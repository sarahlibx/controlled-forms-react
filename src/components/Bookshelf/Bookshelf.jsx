import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        {title: 'Fourth Wing', author: 'Rebecca Yarros'}, 
        {title: 'Kingdom of Ash', author: 'Sarah J Maas'}
    ]);

    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });

    const handleChange = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks([ ...books, newBook ]);
        setNewBook({
            title: '',
            author: ''
        });
    };

return (
    <div className="bookshelfDiv">
    <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input 
                id='title'
                name='title'
                value={newBook.title} 
                onChange={handleChange}
            />
            <label htmlFor="author">Author: </label>
            <input 
                id='author'
                name='author'
                value={newBook.author} 
                onChange={handleChange}
            />
            <button>Add Book!</button>
        </form>
    </div>
    <div className="bookCardsDiv">
        {books.map((book, index) => (
            <div key={index} className='bookCard'>
                <h4>{book.title}</h4>
                <p>by {book.author}</p>
            </div>
        ))}
    </div>
    </div>
    );
};

export default Bookshelf;