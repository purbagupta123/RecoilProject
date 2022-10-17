import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fontSize } from "../state";


const Home = () => {
    const [size, setSize] = useRecoilState(fontSize);

    return (
        <>
            <h1 style={{ fontSize: size }}>
                Home
            </h1>

            <button onClick={() => setSize(size + 10)}>
                Increase
            </button>

            <button onClick={() => setSize(size - 10)}>
                Decrease
            </button>

        </>
    )
}

export default Home;