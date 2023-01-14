import styled from "styled-components";

export const Highlight = styled.span`
  font-weight: 700;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;
