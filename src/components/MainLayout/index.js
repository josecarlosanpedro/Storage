import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import { Layout, Menu, Icon } from 'antd';
const { Sider, Content } = Layout;

const propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
class MainLayout extends Component {
  render() {
    const { isLoggedIn } = this.props
    return (
      <section className="Layout-section">
        {isLoggedIn ? 
          <Layout>
            <Sider trigger={null} collapsible collapsed={true}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>nav 3</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content>
              <main className="main-content">{this.props.children}</main>
              </Content>
            </Layout>
 
          </Layout>
        :

        <main className="main-content">{this.props.children}</main>
        }
      </section>
    );
  }
}

MainLayout.propTypes = propTypes;
export default MainLayout;
