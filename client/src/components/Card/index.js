import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Textfit } from 'react-textfit';
import "./style.css";

function ProductCard(props) {
    return (
        <div>
            <Card className="card">
                <CardActionArea>
                    <CardMedia
                        className="card-media"
                        image={props.image}
                        title={props.imageTitle}
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
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" className="purple">
                        View
                    </Button>
                    <Button size="small" className="purple">
                        Purchase
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProductCard;