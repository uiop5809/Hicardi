import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  active?: boolean;
}

const Button = ({ children, active }: ButtonProps) => {
  return <ButtonStyle active={active}>{children}</ButtonStyle>;
};

export default Button;

const ButtonStyle = styled.button<{ active?: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 32px;
  padding: 0.5rem 1rem;
  box-shadow: 0px 0px 10px 3px #0000001a;
  cursor: pointer;
  background-image: ${({ active }) => (active ? 'linear-gradient(180deg, #4fd1ff 0%, #20c5ff 100%)' : 'none')};
  color: ${({ active, theme }) => (active ? theme.colors.white : '#000')};
`;
