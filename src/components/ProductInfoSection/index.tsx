import { Container, OptionsColors, ColorsList } from "./styles";

export default function ProductInfoSection() {
  return (
    <Container>
      <h1>ADIDAS</h1>
      <span>$100</span>

      <ColorsList>
        <li>
          <OptionsColors bgColor="red" />
        </li>
        <li>
          <OptionsColors bgColor="red" />
        </li>
        <li>
          <OptionsColors bgColor="red" />
        </li>
      </ColorsList>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <ul>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
      </ul>
    </Container>
  );
}
