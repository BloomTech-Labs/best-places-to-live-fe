import React from 'react';
import { Link } from "react-router-dom";
import { Button, Section } from "./styled";



const Navigation = () => {
    return (
        <Section>
            <Link to= '/'>
                <Button>Home</Button>
            </Link>
            <Link to= '/Topten'>
                <Button>Top10</Button>
            </Link>
            <Link to = ''>
                <Button> Login</Button>
            </Link>
        </Section>
    )
};

export default Navigation