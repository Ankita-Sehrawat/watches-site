import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useTheme } from '../../ThemeContext';

export default function Cards() {
    const { ThemedButton } = useTheme();
    return (
        <Card sx={{ maxWidth: 345, marginTop: 3, }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://plus.unsplash.com/premium_photo-1750044337657-b24b56e59d46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ThemedButton variant="contained" color="primary">
                    Share
                </ThemedButton>
            </CardActions>
        </Card>
    );
}
