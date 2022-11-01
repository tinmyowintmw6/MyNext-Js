import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/system";
import Typography from "@mui/material/typography";
import Image from "next/image";
import Rating from "../components/Rating";

export default function OnTVSlider ({ theaterSlideData }) {
  console.log('data', theaterSlideData)
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
        {theaterSlideData?.data?.map((item, post) => (
          <div key={post}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.backdrop_path}`} alt="Interstellar" width={274} height={420} />
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
        {/* <Box sx={{ width: "100%", height: "100%" }}>
            <Image src="/slider2.jpg" alt="Interstellar" width={274} height={420} />
            <Typography
              sx={{
                display: 'inline', color: '#fff', backgroundColor: '#f5b50a', borderRadius: '5px', padding: '5px',
              }}
              fontSize="12px"
              color="#fff"
              position="relative"
              bottom="10rem"
              left="1rem"

            >
              ACTION
            </Typography>
            <Typography
              noWrap
              component="a"
              href="/interstellar"
              sx={{
                display: 'block',
                color: '#fff',
                '&:hover': {
                  color: '#dcf836',
                },
                fontWeight: 'bold',
                textDecoration: 'none'
              }}
              color="#fff"
              position="relative"
              bottom="9rem"
              left="19px"



            >
              INTERSTELLAR
            </Typography>
            <Box sx={{ position: "relative", bottom: "8rem", left: "1rem" }}>
              <Rating />
            </Box>
          </Box>

          <Box sx={{ width: "100%", height: "100%" }}>
            <Image src="/slider3.jpg" alt="Interstellar" width={274} height={420} />
            <Typography
              sx={{
                display: 'inline', color: '#fff', backgroundColor: '#a6bb16', borderRadius: '5px', padding: '5px',
              }}
              fontSize="12px"
              color="#fff"
              position="relative"
              bottom="10rem"
              left="1rem"


            >
              COMEDY
            </Typography>
            <Typography
              noWrap
              component="a"
              href="/interstellar"
              sx={{
                display: 'block',
                color: '#fff',
                '&:hover': {
                  color: '#dcf836',
                },
                fontWeight: 'bold',
                textDecoration: 'none'
              }}
              color="#fff"
              position="relative"
              bottom="9rem"
              left="19px"


            >
              INTERSTELLAR
            </Typography>
            <Box sx={{ position: "relative", bottom: "8rem", left: "1rem" }}>
              <Rating />
            </Box>
          </Box>

          <Box sx={{ width: "100%", height: "100%" }}>
            <Image src="/slider4.jpg" alt="Interstellar" width={274} height={420} />
            <Typography
              sx={{
                display: 'inline', color: '#fff', backgroundColor: '#ec5a1a', borderRadius: '5px', padding: '5px',
              }}
              fontSize="12px"
              color="#fff"
              position="relative"
              bottom="10rem"
              left="1rem"

            >
              ADVENTURE
            </Typography>
            <Typography
              noWrap
              component="a"
              href="/interstellar"
              sx={{
                display: 'block',
                color: '#fff',
                '&:hover': {
                  color: '#dcf836',
                },
                fontWeight: 'bold',
                textDecoration: 'none'
              }}
              color="#fff"
              position="relative"
              bottom="9rem"
              left="19px"



            >
              INTERSTELLAR
            </Typography>
            <Box sx={{ position: "relative", bottom: "8rem", left: "1rem" }}>
              <Rating />
            </Box>
          </Box>

          <Box sx={{ width: "100%", height: "100%" }}>
            <Image src="/slider3.jpg" alt="Interstellar" width={274} height={420} />
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
              sx={{
                display: 'block',
                color: '#fff',
                '&:hover': {
                  color: '#dcf836',
                },
                fontWeight: 'bold',
                textDecoration: 'none'
              }}
              color="#fff"
              position="relative"
              bottom="9rem"
              left="19px"



            >
              INTERSTELLAR
            </Typography>
            <Box sx={{ position: "relative", bottom: "8rem", left: "1rem" }}>
              <Rating />
            </Box>
          </Box> */}

      </Slider>
    </div>
  );
}
