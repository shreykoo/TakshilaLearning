import { data } from './data';
import { makeStyles, Card } from '@material-ui/core';


const WhatWeOffer = () => {

    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className="px-20 py-28 mx-auto ">
                <p className="text-6xl font-bold text-center">What do we offer</p>
                <br />
                <div className={styles.scrollContainer}>
                    {(data.whatWeOffer).map(item => {
                        return (
                            <div
                                key={item.id} 
                                className={styles.card}
                            >
                                <p>{item.value}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#46A573',
        margin: 'auto',
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    scrollContainer: {
        width: '98%',
        margin: 'auto',
        overflow: 'scroll',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'start',
        padding: 10,
    },
    card: {
        minWidth: '250px',
        minHeight: '80px',
        textAlign: 'left',
        backgroundColor: '#F8F8F8',
        padding: 10,
        borderRadius: 8,
        margin: 4,
    }
}))
export default WhatWeOffer;
