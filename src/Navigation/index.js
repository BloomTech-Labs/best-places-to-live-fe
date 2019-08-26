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
                <button>Top10</button>
            </Link>
        </Section>
    )
}

export default Navigation