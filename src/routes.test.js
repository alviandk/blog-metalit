import Articles from "./containers/Article";
import Article from "./containers/Article";
import Category from "./containers/Category";
import React from 'react';
import { shallow, mount } from 'enzyme';
import Routes, { Home, News, NoMatch } from './Routes';
import { MemoryRouter
} from 'react-router'
import { Route } from 'react-router-dom';

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Routes/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })
  it('should show Home component for / router (getting array of routes)', () => {

    expect(pathMap['/']).toBe(Articles);
  })
  it('should show News Feed component for /news router', () => {
    expect(pathMap['/article']).toBe(Article);
  })
  it('should show News Feed component techdomain for /news router', () => {
    expect(pathMap['/category']).toBe(Category);
  })
})
