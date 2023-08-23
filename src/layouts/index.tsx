/* eslint-disable  */
import { Outlet, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
// import HeaderV1 from 'components/Header/HeaderV1';
// import HeaderV2 from 'components/Header/HeaderV2';

const Layouts = () => {
  return (
    <Layout className="main-layout">
      <Header className="main-header">
        {/* <HeaderV1 /> */}
      </Header>
      <Content className="main-content">
        <Outlet />
      </Content>
    </Layout>
  );
};

const LayoutsV1 = () => {
  return (
    <Layout className="main-layout">
      <Header className="main-header main-header-v2">
        {/* <HeaderV2 /> */}
      </Header>
      <Outlet />
    </Layout>
  );
};

export { LayoutsV1 };

export default Layouts;
