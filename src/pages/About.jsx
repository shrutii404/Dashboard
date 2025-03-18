import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Sidebar from "../component/sidebar";
import Box from "@mui/material/Box";
import Navbar from "../component/Navbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

function About() {
  // Animation for the cards
  const cardAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0%)",
    from: { opacity: 0, transform: "translateY(-50%)" },
    config: { duration: 1000 },
  });

  // Product details
  const products = [
    {
      title: "Green Ethylene Oxide Derivatives",
      description: "Used in detergents, surfactants, and personal care products.",
      color: "#e3f2fd", // Pastel blue
    },
    {
      title: "Specialty Chemicals",
      description: "Performance chemicals for industrial applications.",
      color: "#f1f8e9", // Pastel green
    },
    {
      title: "Natural Gums",
      description: "High-quality gum rosin and turpentine derivatives.",
      color: "#fff3e0", // Pastel orange
    },
    {
      title: "Bio-Based Solvents",
      description: "Eco-friendly solvents for various industries.",
      color: "#e8eaf6", // Pastel lavender
    },
  ];

  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Typography
              variant="h4"
              sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
            >
              Indian Glycols Limited (IGL), Kashipur
            </Typography>

            <Grid container spacing={3} justifyContent="center">
              {/* About IGL Card */}
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <animated.div style={cardAnimation}>
                  <Card
                    sx={{
                      backgroundColor: "#fce4ec", // Pastel pink
                      boxShadow: 3,
                      borderRadius: "16px",
                      width: '100%',
                      height: 300,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                        About IGL Kashipur
                      </Typography>
                      <Typography>
                        Indian Glycols Limited (IGL) is a pioneer in manufacturing sustainable 
                        green chemicals, specialty chemicals, and natural gums. Based in 
                        Kashipur, IGL is dedicated to eco-friendly practices, utilizing renewable 
                        resources for industrial and commercial applications.
                      </Typography>
                    </CardContent>
                  </Card>
                </animated.div>
              </Grid>

              {/* Product Cards */}
              {products.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <animated.div style={cardAnimation}>
                    <Card
                      sx={{
                        backgroundColor: product.color,
                        boxShadow: 3,
                        borderRadius: "16px",
                        width: '100%',
                        height: 300,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                          {product.title}
                        </Typography>
                        <Typography>
                          {product.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </animated.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default About;
