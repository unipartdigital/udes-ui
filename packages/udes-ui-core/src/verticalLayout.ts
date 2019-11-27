import styled from "styled-components";

interface Props {
  /**
   * Vertical spacing between children, as a multiple of the theme's base
   * spacing.
   *
   * @default 2
   */
  spacing?: number;
}

/** Stacks all children vertically, with spacing between them. */
export const VerticalLayout = styled.div<Props>`
  & > * {
    display: block;
  }

  & > :not(:last-child) {
    margin-bottom: ${(props): string =>
      props.theme.spacing(props.spacing ?? 2)}px;
  }
`;

export default VerticalLayout;
