import { ArrowLeft } from "@assets/index";
import { Picture } from "@components/header/styles";
import { ProductInfoSection } from "@components/index";
import { Data } from "@store/dummy_data";
import {
  Container,
  SectionContainer,
  SectionProduct,
  TitleInfo,
} from "./styles";

export default function ProductScreen() {
  return (
    <Container>
      <SectionContainer>
        <SectionProduct>
          <TitleInfo>
            <Picture src={ArrowLeft} alt="arrow left icon" />
            COLOUR / SIZE / BRAND
          </TitleInfo>
          <Picture
            width="100%"
            height="466px"
            src={Data.product_picture}
            alt="shoes"
          />
        </SectionProduct>
        <ProductInfoSection />
      </SectionContainer>
    </Container>
  );
}
