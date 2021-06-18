const theme = {
    container: {
        font: {
            fontFamily: 'Montserrat',
            color: 'red'
        },
        root: {
            display: 'flex',
            justiftContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        header: {
            width: ' 100%',
            display: 'flex',
            justiftContent: 'space-around',
            p: '1em',
            fontSize: '1.2rem',
            background: 'indigo',
            color: '#fff',
            
            a: {
                color: 'darkgrey',
                textDecoration: 'none',
                mx: '1em',
            },

            'a:hover': {
                fontWeight: 'bold',
                color: 'lightgrey'
            }
        },
        footer: {
            p: '1em'
        }
    }
}

export default theme