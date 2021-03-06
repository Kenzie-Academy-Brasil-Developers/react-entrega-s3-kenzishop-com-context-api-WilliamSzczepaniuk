import Box from "@mui/material/Box";
import { CardComponent } from "../Card";
const ListProducts = ({ products, cartItem }) => {
  return (
    <Box flexWrap={"wrap"} display={"flex"}>
      {products.map((product) => (
        <CardComponent
          cartItem={cartItem}
          key={product.id}
          product={product}
        ></CardComponent>
      ))}
    </Box>
  );
};
export default ListProducts;
