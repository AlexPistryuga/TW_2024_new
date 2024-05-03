import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';

interface  Props {
    id: string
    title: string
    backdropPath: string
    overview: string
    slogan: string
    director: string
}

export default function MovieCustom({ title, backdropPath, overview, id, slogan, director }: Props) {
    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt={title}
                height="140"
                image={backdropPath}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {director}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {slogan}
                </Typography>
                {overview}

            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => navigate(id)} >Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}