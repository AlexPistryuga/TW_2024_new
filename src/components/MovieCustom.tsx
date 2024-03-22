import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { IUser } from "../layouts/Main.tsx";

export default function MovieCustom(user: IUser) {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: 'rgb(244, 205, 137)' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="400"
                    image="/src/photo/avatar.jpeg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {user.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}
