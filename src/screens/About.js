// import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fontSize } from "../state";

const About = () => {
    const [size, setSize] = useRecoilState(fontSize);

    return(
        <h1 style={{ fontSize: size }}>
            About
        </h1>
    )
}

export default About;