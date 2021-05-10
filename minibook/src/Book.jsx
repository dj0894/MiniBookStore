import './index.css';
const Book = (props) => {
    const { id, img, title, author, price } = props.book;
    return (
        <article className="book" >
            <img src={img} alt=''></img>
            <h1>{title}</h1>
            <p>{author}</p>
            <p className="book-price">{price}</p>

        </article>
    )
}
export default Book;