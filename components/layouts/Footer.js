import { styled, Container } from "@mui/system";


const FooterBackground = styled ('div')({
  backgroundColor: 'blue',
  padding: 8,
});


const Foter = () => {
  return (
    <FooterBackground>
      <Container maxWidth="lg">
        <h1>Footer</h1>
      </Container>
    </FooterBackground>
  );
}

export default Foter;

