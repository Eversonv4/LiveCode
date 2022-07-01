import { Button } from "@components/index";
import {
  Container,
  OptionsColors,
  ColorsList,
  PriceSpan,
  TitleProduct,
  TextParagraph,
  ListSize,
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
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
      </ListSize>

      <Button>Add To Cart</Button>
    </Container>
  );
}
