import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/system";
import Typography from "@mui/material/typography";
import Image from "next/image";
import Rating from "../components/Rating";

export default function HeaderSlide({ homeSlideData }) {

  var settings = {

    infinite: false,
    draggable: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        {homeSlideData.map((item, post) => (
          <div key={post}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.backdrop_path}`} alt="images" width={274} height={420} />
              <Typography
                sx={{
                  display: 'inline', color: '#fff', backgroundColor: '#1692bb', borderRadius: '5px', padding: '5px',
                }}
                fontSize="12px"
                color="#fff"
                position="relative"
                bottom="10rem"
                left="1rem"
              >
                SCI-FI
              </Typography>

              <Typography
                noWrap
                component="a"
                href="/interstellar"
                color="#fff"
                position="relative"
                bottom="9rem"
                left="19px"
                width="80%"
                sx={{
                  display: 'block',
                  color: '#fff',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#dcf836',
                  }
                }}
              >
                {item.title}
              </Typography>
              <Box sx={{ position: "relative", bottom: "8rem", left: "1rem" }}>
                <Rating rating={item.vote_average} />
              </Box>
            </Box>
          </div>
        ))}
      </Slider>
    </div>
  )
}
