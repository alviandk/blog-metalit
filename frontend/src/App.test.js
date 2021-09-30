import React from 'react';
import App from './containers/App';
import Navig from "./components/Nav";
import Footer from "./components/Footer";
import Articles from "./containers/Article";
import Article from "./containers/Article";
import Category from "./containers/Category";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./components/Navig');
jest.mock('./components/Footer');
jest.mock('./containers/Article');
jest.mock('./containers/Articles');
jest.mock('./containers/Category');

describe("Tests for App Router", () => {
  test("Should render page header and HomePage on default route", () => {
    // Arrange
    Nav.mockImplementation(() => <div>NavPageMock</div>);
    Articles.mockImplementation(() => <div>HomePageMock</div>);
    Footer.mockImplementation(() => <div>FooterPageMock</div>);

    // Act
    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("NavPageMock")).toBeInTheDocument();
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
    expect(screen.getByText("FooterPageMock")).toBeInTheDocument();
  });

  test("Should render page header and ArticlePage for article route", () => {
    // Arrange
    Nav.mockImplementation(() => <div>NavPageMock</div>);
    Article.mockImplementation(() => <div>ArticlePageMock</div>);
    Footer.mockImplementation(() => <div>FooterPageMock</div>);

    // Act
    render(
      <MemoryRouter initialEntries={['/article/what-s-inside-a-black-hole']}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("NavPageMock")).toBeInTheDocument();
    expect(screen.getByText("ArticlePageMock")).toBeInTheDocument();
    expect(screen.getByText("FooterPageMock")).toBeInTheDocument();
  });

  test("Should render page header and AuthorPage for author route", () => {
    // Arrange
    Nav.mockImplementation(() => <div>NavPageMock</div>);
    Category.mockImplementation(() => <div>CategoryPageMock</div>);
    Footer.mockImplementation(() => <div>FooterPageMock</div>);

    // Act
    render(
      <MemoryRouter initialEntries={['/author/1']}>
        <App/>
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("NavPageMock")).toBeInTheDocument();
    expect(screen.getByText("CategoryPageMock")).toBeInTheDocument();
    expect(screen.getByText("FooterPageMock")).toBeInTheDocument();
  });
});