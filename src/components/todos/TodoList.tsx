import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, List } from "antd";
import { useTranslation } from "react-i18next";

export const TodoList = (props: any) => {
    const { t } = useTranslation();
    
    return (
        <List
            className="list-items"
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xl: 3,
                xxl: 4,
            }}
            itemLayout="horizontal"
            dataSource={props.todos}
            renderItem={(item: any) => (
                <List.Item>
                    <Card
                        title={
                            <p
                                style={{
                                    color: "white",
                                    textTransform: "capitalize",
                                }}
                            >
                                {item.title}
                            </p>
                        }
                        style={{
                            background: "rgb(35, 48, 68)",
                            border: "none",
                        }}
                    >
                        <div>
                            <p
                                style={{
                                    color: "white",
                                    textTransform: "capitalize",
                                    fontSize: "16px",
                                    marginRight: "10px",
                                    marginBottom: "15px",
                                }}
                            >
                                {t("status")}:{" "}
                                <span
                                    style={{
                                        color: item.completed
                                            ? "yellow"
                                            : "rgb(255, 1, 79)",
                                    }}
                                >
                                    {String(item.completed)}
                                </span>
                            </p>
                            {/* <div style={{display: 'flex', alignItems: 'center'}}> */}
                            <Button
                                type="primary"
                                className="button__status__edit"
                                style={{
                                    marginRight: "10px",
                                    background: "rgb(76, 175, 80)",
                                    marginBottom: "10px",
                                }}
                                icon={<EditOutlined />}
                                onClick={() => props.setFormData(item.id)}
                            >
                                {t("edit")}
                            </Button>
                            <Button
                                icon={<DeleteOutlined />}
                                type="primary"
                                danger
                                onClick={() => {
                                    props.deleteTask(item.id);
                                }}
                            >
                                {t("delete")}
                            </Button>

                            {/* </div> */}
                        </div>
                    </Card>
                </List.Item>
            )}
        />
    );
};
