import { ArrowLeft, ArrowLeftDark } from "@assets/index";
import { Picture } from "@components/header/styles";
import { ProductInfoSection } from "@components/index";
import { Data } from "@store/dummy_data";
import {
  Container,
  SectionContainer,
  SectionProduct,
  TitleInfo,
} from "./styles";

export default function ProductPage(props: any) {
  return (
    <Container>
      <SectionContainer>
        <SectionProduct>
          <TitleInfo>
            {props.themeState ? (
              <Picture src={ArrowLeft} alt="arrow left icon" />
            ) : (
              <Picture src={ArrowLeftDark} alt="arrow left dark" />
            )}
            COLOUR / SIZE / BRAND
          </TitleInfo>
          <Picture
            width="100%"
            height="500px"
            src={Data.product_picture}
            alt="shoes"
          />
        </SectionProduct>
        <ProductInfoSection />
      </SectionContainer>
    </Container>
  );
}
