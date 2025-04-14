import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'blue',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
  letra: 'white',
};

//Passo 1 - Variável faladno oque ela vai herdar. No caso vai ser o styled da lib acima . o elemento html que vai ser estilizado e entre cases o estilo igual css
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 6rem;
  height: 2rem;
  border: 0px;
  margin: 10px;
  border-radius: 4px;

  background-color: ${props => props.theme.primary};

  /* ${props =>
    css`
      background-color: ${buttonVariants[props.variant]};
      color: ${buttonVariants.letra};
    `} */
`;
