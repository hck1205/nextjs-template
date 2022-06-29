import { LayoutWrapper } from './styles';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

type Props = {
  header?: React.ReactNode;
  searchBar?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  slideSideNav?: React.ReactNode;
  sideMenu?: React.ReactNode;
};

function LayoutComponent({ children }: Props) {
  return (
    <LayoutWrapper>
      <Layout>
        <Header className="layout-header">
          <div className="logo" style={{ color: '#fff' }}>
            LOGO
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </LayoutWrapper>
  );
}

export default LayoutComponent;
