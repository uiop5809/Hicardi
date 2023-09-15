import styled from 'styled-components';

import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface HeaderSearchProps {
  searchRange?: string;
  value?: string;
}

const HeaderSearchBlock = styled.header`
  padding: 8rem 0;
  background-color: ${({ theme }) => theme.colors.blue4};
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
`;

const SearchInput = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 500px;
  height: 48px;
  margin: 0 auto;

  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 32px;
    padding: 0 2rem;
    font-size: 1rem;
    box-shadow: 4px 4px 20px 0px #0000001a;
  }

  i {
    position: relative;
    right: 48px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const HeaderSearch = ({ searchRange, value }: HeaderSearchProps) => {
  const navigate = useNavigate();

  return (
    <HeaderSearchBlock>
      {searchRange === 'blog' && <h2>하이카디가 궁금하면 무엇이든 물어보세요</h2>}
      <SearchInput>
        <input type="text" placeholder="키워드를 입력하세요" value={value} />
        <i
          onClick={() => {
            navigate('/search');
          }}
        >
          <FaSearch />
        </i>
      </SearchInput>
    </HeaderSearchBlock>
  );
};

export default HeaderSearch;
