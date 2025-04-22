import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

//Passo 1 - Variável faladno oque ela vai herdar. No caso vai ser o styled da lib acima . o elemento html que vai ser estilizado e entre cases o estilo igual css
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 6rem;
  height: 2rem;
  border: 0px;
  margin: 10px;
  border-radius: 4px;

  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme['white']};
`;
