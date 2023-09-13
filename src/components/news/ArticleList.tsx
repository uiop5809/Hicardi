import { Link } from 'react-router-dom';
import styled from 'styled-components';

import articleList from '../../datas/news.json';

const ArticleListBlock = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 5rem;
`;

const ArticleTable = styled.div`
  margin-bottom: 3rem;
`;

const ArticleTableHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 2fr;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray4};
  color: ${({ theme }) => theme.colors.blue1};
  font-weight: 500;
`;

const ArticleTableBody = styled.div``;

const ArticleTableRow = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 2fr;
  text-align: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray4};

  span {
    color: ${({ theme }) => theme.colors.gray3};
  }
`;

const ArticleTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  b {
    font-weight: 600;
    text-align: start;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;

  img {
    height: 1rem;
  }
`;

const ArticleList = () => {
  return (
    <ArticleListBlock>
      <ArticleTableHead>
        <span>번호</span>
        <span>일시</span>
        <span>제목</span>
        <span>언론사</span>
      </ArticleTableHead>
      <ArticleTable>
        <ArticleTableBody>
          {articleList.map((article, index) => {
            return (
              <ArticleTableRow key={article.id} to={`/news/article/${article.id}`}>
                <span>{index + 1}</span>
                <span>{article.date}</span>
                <ArticleTitle>
                  <b>{article.title}</b>
                </ArticleTitle>
                <span>{article.press}</span>
              </ArticleTableRow>
            );
          })}
        </ArticleTableBody>
      </ArticleTable>
      <Pagination>
        <img src="/images/icons/left-arrow.svg" alt="왼쪽 화살표" />
        <span>1 / 5</span>
        <img src="/images/icons/right-arrow.svg" alt="오른쪽 화살표" />
      </Pagination>
    </ArticleListBlock>
  );
};

export default ArticleList;
