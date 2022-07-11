import React from "react";
import Aside from "./aside";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";

const LayoutExample = () => {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout className="hi" style={{ height: '500px' }}>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二/三个例子</h1>
        <Layout className="hi" style={{ height: '500px' }}>
          <Header>header</Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout className="hi" style={{ height: '500px' }}>
          <Aside>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}

export default LayoutExample
