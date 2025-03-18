import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import Box from "@mui/material/Box";

const products = [
  { id: 1, name: "Bio-Ethanol Amines", category: "Industrial Chemicals", price: 50.99, stock: 100, description: "Used as solvents and surfactants in multiple applications, including personal care and fuel additives." },
  { id: 2, name: "Green Solvents", category: "Environmentally Friendly Solutions", price: 40.99, stock: 80, description: "Biodegradable alternatives to traditional solvents, ideal for paint, coatings, and agrochemicals." },
  { id: 3, name: "Bio-Potash Fertilizer", category: "Agriculture", price: 30.99, stock: 200, description: "FCO-grade potash-rich fertilizer derived from renewable resources, suitable for sustainable farming." },
  { id: 4, name: "Plasticizers", category: "Manufacturing", price: 25.99, stock: 150, description: "Phthalate and non-phthalate additives for making plastics and rubber flexible and durable." },
  { id: 5, name: "C-Smart Surfactants", category: "Personal Care", price: 60.99, stock: 60, description: "Innovative green surfactants made from C-Smart alcohol, reducing reliance on fossil fuel feedstocks." },
];


const EditDeleteProduct = ({ product, onEdit, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    onEdit({ ...product, name, category, price, stock });
    handleClose();
  };

  const handleDelete = () => {
    onDelete(product.id);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Edit/Delete
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit or Delete Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEdit} color="primary">
            Edit
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const AddProduct = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    onAdd({ name, category, price, stock });
    handleClose();
    setName("");
    setCategory("");
    setPrice(0);
    setStock(0);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
          <TextField
            label="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const ProductsManagement = () => {
  const [data, setData] = useState(products);

  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "category",
      label: "Category",
    },
    {
      name: "price",
      label: "Price",
    },
    {
      name: "stock",
      label: "Stock",
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          const product = data[tableMeta.rowIndex];
          return (
            <EditDeleteProduct
              product={product}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    sort: true,
    selectableRows: "none",
  };

  const handleEditProduct = (updatedProduct) => {
    setData(
      data.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleDeleteProduct = (id) => {
    setData(data.filter((product) => product.id !== id));
  };

  const handleAddProduct = (newProduct) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    setData([...data, { id, ...newProduct }]);
  };

  return (
    <div style={{ background: "#eceff1", height:100+"vh" }}>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <MUIDataTable
            title="Products"
            data={data}
            columns={columns}
            options={options}
          />
          <div style={{ marginTop: "20px" }}>
            <AddProduct onAdd={handleAddProduct} />
          </div>
        </Box>
      </Box>    
    </div>
  );
};

export default ProductsManagement;
