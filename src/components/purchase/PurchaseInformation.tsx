import styled from 'styled-components';
import Header from '../common/Title/Header';
import Title from '../common/Title/Title';
import Index from './Index';
import Radio from '../common/Input/Radio';
import SubTitle from '../common/Title/SubTitle';
import Input from '../common/Input/Input';
import Address from '../common/Input/Address';
import CheckBox from '../common/Input/CheckBox';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '../common/Box';
import picture from '../../assets/purchase/picture.svg';

const DeliveryAddressBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  span {
    margin: 0 0.5rem;
  }
`;

const WidthInput = styled(Input)`
  width: 100%;
`;

const Check = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 0 3.5rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray1};
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  margin: 3rem 0;
`;

const Button = styled.button`
  padding: 1rem 4rem;
  font-size: 1.2rem;
  font-weight: 800;
  border-radius: 10px;
  border: none;
`;

const GrayButton = styled(Button)`
  background: ${({ theme }) => theme.colors.gray2};
`;

const BlueButton = styled(Button)`
  background: ${({ theme }) => theme.colors.blue1};
  color: ${({ theme }) => theme.colors.white};
`;

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Product = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const ProductName = styled.div`
  font-size: 1.2rem;
`;

const ProductOption = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray3};
`;

const Description = styled.div`
  font-size: 1.2rem;
`;

const OrderAmount = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
`;

const PurchaseInformation = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const handleCancleClick = () => {
    navigate(-1);
  };
  const handleNextClick = () => {
    navigate(`/products/${productId}/purchase/checkPayment`);
  };

  return (
    <>
      <Header>구매정보 입력</Header>
      <Index index={1} />
      <Title>배송지</Title>
      <DeliveryAddressBox>
        <Radio checked={true} name="DeliveryAddress" text="회원 정보와 동일" />
        <Radio name="DeliveryAddress" text="새로운 배송지" />
      </DeliveryAddressBox>
      <Content>
        <SubTitle>받는 사람</SubTitle>
        <WidthInput type="text" placeholder="이름 입력" />
      </Content>
      <Content>
        <SubTitle>주소</SubTitle>
        <Address width={true} />
      </Content>
      <Content>
        <SubTitle>휴대전화</SubTitle>
        <WidthInput type="number" placeholder="" />
      </Content>
      <Content>
        <SubTitle>이메일</SubTitle>
        <WidthInput type="number" placeholder="" />
      </Content>
      <Check>
        <CheckBox /> 기본 배송지로 저장
      </Check>

      <Title>주문상품</Title>
      {/* TODO: theme box 색상 적용하고 싶은데 안 됨 */}
      <Box background="#F8F9FB">
        <Product>
          <img src={picture} alt="picture" />
          <BoxContent>
            <ProductName>하이카디플러스 HiCardi+</ProductName>
            <ProductOption>[옵션: 갤럭시A13 (+275,000)]</ProductOption>
          </BoxContent>
        </Product>
        <div>1</div>
        <OrderAmount>1,000,000</OrderAmount>
      </Box>
      <Box background="#F2F4F6">
        <Description>배송비</Description>
        <OrderAmount>0 원</OrderAmount>
      </Box>
      <Box background="#D3EFFF">
        <Description>주문총액</Description>
        <OrderAmount>1,000,000 원</OrderAmount>
      </Box>

      <ButtonContainer>
        <GrayButton onClick={handleCancleClick}>취소</GrayButton>
        <BlueButton onClick={handleNextClick}>계속 구매하기</BlueButton>
      </ButtonContainer>
    </>
  );
};

export default PurchaseInformation;
