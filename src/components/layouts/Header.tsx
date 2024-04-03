import { Layout, Tabs } from "antd";
import { useTranslation } from "react-i18next";

const { Header } = Layout;

export const Head = () => {
    const { i18n } = useTranslation();

    const onChange = (key: string) => {
        if (key === "1") {
            i18n.changeLanguage("en");
        } else {
            i18n.changeLanguage("vi");
        }
    };
    return (
        <Header
            style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%",
                background: 'rgb(27, 38, 53)'
            }}
        >
            <Tabs
                defaultActiveKey="1"
                indicator={{ size: () => 0 }}
                onChange={onChange}
                items={[
                    {
                        key: "1",
                        label: "EN",
                    },
                    {
                        key: "2",
                        label: "VN",
                    },
                ]}
            />
        </Header>
    );
};
