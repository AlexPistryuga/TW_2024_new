import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface  Props {
    title: string
    backdropPath: string
    overview: string
}

export default function MovieCustom({ title, overview}: Props) {
    return (
        <Card sx={{ maxWidth: 900 }}>
            <CardMedia
                component="img"
                alt={title}
                height="140"
                image={'dune.jpg'}
            />
            <img src="dune.jpg" alt="asdadasdasdasdas"/>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {overview}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
