import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='text-red-500 text-3xl'>Error!</h1>
            <Link to="/" > Back To Home</Link>
        </div>
    );
};

export default ErrorPage;