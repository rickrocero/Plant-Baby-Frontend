import React from 'react'
import NavBar from "../NavBar";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PlantCard from "../PlantCard";
import Link from '@material-ui/core/Link';



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Plant Baby
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#e1c0ad",
        paddingTop: theme.spacing(2),
        width: "100%",
        color: "#006a4e"
    },
    creators: {
        padding: "75px",
        color: "#006a4e",
    }
}));



export default function Footer() {
    const classes = useStyles();
    return <footer className={classes.footer}>
        <Typography variant="h6" align="center">
            Created with ❤ By:
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            <Link href="https://github.com/moecory11" target="_blank" color="primary" className={classes.creators}>
                Cory Moe
            </Link>
            <Link href="https://github.com/rickrocero" target="_blank" color="primary" className={classes.creators}>
                Rick Rocero
            </Link>
            <Link href="https://github.com/AmandaNguyenn" target="_blank" color="primary" className={classes.creators}>
                Amanda Nguyen
            </Link>
            <Link href="https://github.com/KKH-pixel" target="_blank" color="primary" className={classes.creators} >
                Kat Hunt
            </Link>
            <Link href="https://github.com/lbalbrecht" target="_blank" color="primary" className={classes.creators}>
                Leighton Albrecht
            </Link>
        </Typography>
        <Copyright />
    </footer>;
}