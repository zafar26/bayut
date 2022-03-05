import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: '90vw',
        borderRadius: '10px',
        backgroundColor: '#e7e6e1',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    ammount: {
        fontSize: 'large',
        padding: '2px 15px',
        borderRadius: '10px',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
    },
});

export default function DashboardCard({ text, secondaryText, ammount }: any) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent className={classes.content}>
                    <div>
                        <Typography style={{ fontSize: '16px' }}>
                            {text}
                        </Typography>
                    </div>
                    <div className={classes.ammount}>
                        <Typography color={ammount < 0 ? 'error' : 'primary'}>
                            {ammount}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

DashboardCard.getInitialProps = async (props: any) => {
    return {
        text: props.text,
        secondaryText: props.secondaryText,
        ammount: props.ammount,
    };
};
