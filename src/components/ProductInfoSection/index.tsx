import { Button } from "@components/index";
import { DeliveryIcon, FavoriteIcon } from "@assets/index";
import { Picture } from "@components/header/styles";

import {
  Container,
  OptionsColors,
  ColorsList,
  PriceSpan,
  TitleProduct,
  TextParagraph,
  ListSize,
  SpanDelivery,
  ContainerButton,
  SelectedNumber,
} from "./styles";

export default function ProductInfoSection() {
  return (
    <Container>
      <TitleProduct>ADIDAS</TitleProduct>
      <PriceSpan>$100</PriceSpan>

      <ColorsList>
        <li>
          <OptionsColors bgColor="#CDC509" />
        </li>
        <li>
          <OptionsColors bgColor="#555700" />
        </li>
        <li>
          <OptionsColors bgColor="#455E64" />
        </li>
      </ColorsList>

      <TextParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TextParagraph>

      <ListSize>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>
          10
          <SelectedNumber />
        </li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
      </ListSize>

      <SpanDelivery>
        <Picture
          height="45px"
          width="45px"
          src={DeliveryIcon}
          alt="delivery icon"
        />
        Free delivery all over Brazil
      </SpanDelivery>

      <ContainerButton>
        <Button>Add To Cart</Button>
        <Picture src={FavoriteIcon} alt="favorite icon" />
      </ContainerButton>
    </Container>
  );
}
