import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

export default function Product({item}) {

    return (
      <Card sx={{maxWidth: 400, backgroundColor: ""}}>
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
            <Typography variant="body2">
              Color: {item.color}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>


      // <div className="product">
      //   <img src="../images/208645545_max.jpg" width={'197px'}></img>
      //   <h2>{item.name}</h2>
      // </div>
    )
  }