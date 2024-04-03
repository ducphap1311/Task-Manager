import React from "react";
import { Layout, Menu, MenuProps, Typography } from "antd";
import { AppstoreAddOutlined, LineChartOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("Add Task", "1", <AppstoreAddOutlined />),
    getItem("All Tasks", "2", <LineChartOutlined />),
];

export const Sidebar = () => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            width={258}
            // collapsible
            // collapsed={collapsed}
            // onCollapse={(value) => setCollapsed(value)}
            style={{
                zIndex: 100,
                // overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                background: "rgb(35, 48, 68)"
            }}
        >
            <div className="demo-logo-vertical">
                <Title
                    style={{
                        color: "white",
                        textAlign: "center",
                        padding: "10px 0",
                    }}
                >
                    Task Manage
                </Title>
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
                style={{ marginTop: "25px" }}
            />
        </Sider>
    );
};
