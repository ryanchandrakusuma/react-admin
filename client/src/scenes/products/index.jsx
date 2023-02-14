import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  UseMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from "../../state/api";
import Header from "../../components/Header";

const Products = () => {
  return (
    <Box>
      <Header title="Products" subtitle="See your list of products" />
    </Box>
  );
};

export default Products;
