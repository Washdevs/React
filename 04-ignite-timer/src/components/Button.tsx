import { ButtonContainer, ButtonVariant } from './Button.styles';
//passo 2 - Chamar a var ButtonContainer como componente ou modulo e colocar ela no lugar o elemento Button

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Criar</ButtonContainer>;
}
