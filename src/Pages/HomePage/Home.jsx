import Hero from '../../Components/Hero/Hero';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../../Components/BookCard/BookCard';

const Home = () => {
    const books = useLoaderData()
    console.log(books);
    return (
        <div>
            <Hero></Hero>
            
            <h1 className='text-center mt-14 playFair font-bold text-4xl'>Books</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Home;