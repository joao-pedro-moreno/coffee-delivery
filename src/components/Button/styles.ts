import { styled } from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${({ theme }) => theme.colors['base-white']};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors['brand-yellow']};
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  line-break: 1.3rem;
  margin-top: 0.7rem;
  transition: all 0.4s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled) {
    background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`
