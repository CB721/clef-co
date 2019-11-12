import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Textfit } from 'react-textfit';
import "./style.css";

function Product(props) {
    return (
        <div>
            <Card className="card product-card product-shadow">
                <CardActionArea>
                    <CardMedia
                        className="card-media product-image"
                        image={props.image}
                        title={props.imageTitle}
                        onClick={props.action}
                    />
                    <CardContent>
                        <Textfit
                            mode="single"
                            className="purple product-title"
                            min={10}
                            max={20}
                        >
                            {props.cardTitle}
                        </Textfit>
                        <Textfit
                            mode="multi"
                            className="purple product-title"
                            min={6}
                            max={9}
                        >
                            {props.cardDescription}
                        </Textfit>
                        <Typography gutterBottom variant="h5" className="purple product-title" component="h2">
                            {"$" + props.price}
                        </Typography>
                        <CardActions className="product-button">
                            {props.button}
                        </CardActions>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Product;