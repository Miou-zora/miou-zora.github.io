import React from 'react';

export default function NavBar() {
    return (
        <>
            <nav style={styles.nav}>
                <ul style={styles.ul}>
                    <li style={styles.li}>
                        <a href="/" style={styles.a}>Home</a>
                    </li>
                    <li style={styles.li}>
                        <a href="/todo" style={styles.a}>To Do List</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

const styles = {
    nav: {
        backgroundColor: 'blue',
        color: 'white',
        // padding: '1rem',
    },
    ul: {
        display: 'flex',
        justifyContent: 'space-around',
        listStyle: 'none',
    },
    li: {
        padding: '0.5rem',
    },
    a: {
        color: 'white',
        textDecoration: 'none',
    },
};
