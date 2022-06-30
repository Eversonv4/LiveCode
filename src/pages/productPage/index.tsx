import { Picture } from "@components/header/styles";
import ProductInfoSection from "@components/ProductInfoSection";
import { Data } from "@store/dummy_data";
import { Container } from "./styles";
import { SectionContainer } from "./styles";

export default function ProductScreen() {
  return (
    <Container>
      <SectionContainer>
        <Picture
          width="200px"
          height="200px"
          src={Data.product_picture}
          alt="shoes"
        />
      </SectionContainer>
      <ProductInfoSection />
    </Container>
  );
}
