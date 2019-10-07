import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "./style.css";

function Product(props) {
    return (
        <div className="">
            <Card className="card product-card">
                <CardActionArea>
                    <CardMedia
                        className="card-media"
                        image={props.image}
                        title={props.imageTitle}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" className="purple" component="h2">
                            {props.cardTitle}
                        </Typography>
                        <Typography variant="body2" className="purple" component="h6">
                            {props.cardDescription}
                        </Typography>
                        <Typography gutterBottom variant="h5" className="purple" component="h2">
                            {"$" + props.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {props.button}
                </CardActions>
            </Card>
        </div>
    )
}

export default Product;