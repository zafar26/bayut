import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    return (
        <div>
            {/* Home */}
            <button onClick={() => router.push('/corporate/login')}>
                Go To Agent Login Page
            </button>
        </div>
    );
};

export default Home;
