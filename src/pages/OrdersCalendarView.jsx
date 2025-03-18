import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import Box from "@mui/material/Box";
import MUIDataTable from "mui-datatables";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../style.css";

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

// Updated product details related to Indian Glycols Limited (IGL)
const products = [
  {
    id: 1,
    name: "Green Ethylene Oxide Derivatives",
    description: "Used in detergents, surfactants, and personal care products.",
    customer: "Industry Client 1",
    deliveryDate: new Date(currentYear, currentMonth, 15),
  },
  {
    id: 2,
    name: "Specialty Chemicals",
    description: "Performance chemicals for various industrial applications.",
    customer: "Industry Client 2",
    deliveryDate: new Date(currentYear, currentMonth, 18),
  },
  {
    id: 3,
    name: "Natural Gums",
    description: "High-quality gum rosin and turpentine derivatives.",
    customer: "Industry Client 3",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 4,
    name: "Bio-Based Solvents",
    description: "Eco-friendly solvents for various industries.",
    customer: "Industry Client 4",
    deliveryDate: new Date(currentYear, currentMonth, 22),
  },
];

const TileContent = ({ date, view }) => {
  if (view === "month") {
    const productsByDate = products.filter(
      (product) => product.deliveryDate.toDateString() === date.toDateString()
    );
    return (
      <div className="tile-content">
        {productsByDate.length > 0 && <p>{productsByDate.length} products</p>}
      </div>
    );
  }
  return null;
};

const ProductsCalendarView = () => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "name",
      label: "Product Name",
    },
    {
      name: "description",
      label: "Description",
    },
    {
      name: "deliveryDate",
      label: "Delivery Date",
      options: {
        customBodyRender: (value) => {
          return new Date(value).toDateString();
        },
      },
    },
  ];

  const productsByDate = products.filter(
    (product) => product.deliveryDate.toDateString() === date.toDateString()
  );

  const data = productsByDate.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    deliveryDate: product.deliveryDate,
  }));

  const options = {
    filter: true,
    search: false,
    selectableRows: "none",
    print: false,
    download: false,
    viewColumns: false,
    setTableProps: () => ({
      style: {
        minWidth: "95vh",
        minHeight: "100px",
      },
    }),
  };

  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div className="products-calendar-view">
              <Calendar onChange={onChange} value={date} tileContent={TileContent} />
              <div className="products-list-container">
                <h3>Products for {date.toDateString()}</h3>
                <Grid container spacing={3} justifyContent="center">
                  {productsByDate.length > 0 ? (
                    productsByDate.map((product) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card sx={{ backgroundColor: "#e3f2fd", boxShadow: 3 }}>
                          <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                              {product.name}
                            </Typography>
                            <Typography sx={{ mb: 1 }}>
                              <strong>Description:</strong> {product.description}
                            </Typography>
                            <Typography>
                              <strong>Client:</strong> {product.customer}
                            </Typography>
                            <Typography>
                              <strong>Delivery Date:</strong>{" "}
                              {product.deliveryDate.toDateString()}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  ) : (
                    <Typography variant="h6" sx={{ color: "gray" }}>
                      No products for this date.
                    </Typography>
                  )}
                </Grid>
                <MUIDataTable title={"Products"} data={data} columns={columns} options={options} />
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default ProductsCalendarView;
