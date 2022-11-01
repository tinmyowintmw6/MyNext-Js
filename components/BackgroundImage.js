import { styled } from "@mui/system";

const BackgroundImage = styled("div")({
  backgroundImage: `url(./slider-bg.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
  zIndex: "-1",
  position: "absolute",
  top: "0",
  left: "0",

});

const MainBackground = () => {
  return ( 
    <div className="slider_bgd">
      <BackgroundImage />
    </div>
   );  
}
 
export default MainBackground
