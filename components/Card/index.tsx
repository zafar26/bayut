import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: '90vw',
        borderRadius: '10px',
        backgroundColor: '#e7e6e1',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        display: 'flex',
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
