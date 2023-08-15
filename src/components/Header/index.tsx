import logo from "../../assets/logo.svg";
import { Container, Content, TitleHeader, TitleHeaderWithLogo } from "./styles";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}
export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <TitleHeaderWithLogo >
           <img src={logo} alt="controle financeiro" />
           <TitleHeader>Controle de Finance</TitleHeader>
        </TitleHeaderWithLogo>
        
        <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  );
}
