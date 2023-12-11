import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material"

export default function Product({item, setProduct}) {

    return (
      <Card className="product" sx={{width: 400, backgroundColor: ""}}>
        <CardActionArea>
          <CardMedia 
            component="img"
            height="300"
            width="197"
            image="../images/208645545_max.jpg"
            alt="product img"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Color: {item.color}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Size: {item.size}
            </Typography>
            <Typography variant="h7">
              Price: €{item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="large" color="primary" onClick={() => setProduct(item)}>
              View
            </Button>
        </CardActions>
      </Card>
    )
  }