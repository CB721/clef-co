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
        <div className="add-shadow">
            <Card className="card product-card">
                <CardActionArea>
                    <CardMedia
                        className="card-media product-image"
                        image={props.image}
                        title={props.imageTitle}
                        onClick={(event) => {
                            props.action(event, props.id)
                        }}
                    />
                    <div className="product-card-content">
                        <CardContent>
                            <div className="product-card-section">
                                <Textfit
                                    mode="single"
                                    className="purple product-title"
                                    min={10}
                                    max={20}
                                >
                                    {props.cardTitle}
                                </Textfit>
                            </div>
                            <div className="product-card-section">
                                <Textfit
                                    mode="multi"
                                    className="purple product-title"
                                    min={6}
                                    max={9}
                                >
                                    {props.cardDescription}
                                </Textfit>
                            </div>
                            <div className="product-card-section">
                                <Typography gutterBottom variant="h5" className="purple product-title" component="h2">
                                    {"$" + props.price}
                                </Typography>
                            </div>
                            <div className="product-card-section">
                                <CardActions className="product-button">
                                    {props.button}
                                </CardActions>
                            </div>
                        </CardContent>
                    </div>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Product;