import { useEffect,  useState } from "react";

function Books2() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://www.freetestapi.com/api/v1/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publication Year</th>
            <th>Genre</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publication_year}</td>
              <td>{book.genre.join(', ')}</td>
              <td>{book.description}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Books2;

