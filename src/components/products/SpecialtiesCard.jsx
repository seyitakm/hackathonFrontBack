import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/SpecialtiesContextProvider";

export default function SpecialtiesCard({ item }) {
  const { deleteProduct } = useProducts();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={item.image} alt="doctor" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.first_name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.last_name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.number}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.adress}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.experience}
        </Typography>
        <Typography variant="caption" color="error">
          {item.categories}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
