import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";
import './TodoForm.scss'

const {Title} = Typography
const {Option} = Select
export const TodosForm = (props: any) => {
    const {t} = useTranslation()

    return (
        <Form
            form={props.form}
            onFinish={props.onFinish}
            name="trigger"
            className="form-container"
            layout="vertical"
            autoComplete="off"
        >
            <Title level={2} className="form-container-title">Add Task</Title>
            <div className="form-items-container">
                <Form.Item
                    hasFeedback
                    label={t("title")}
                    name="title"
                    validateDebounce={1000}
                    rules={[{ max: 150, required: true, message: t("please_input_your_title") }]}
                    className="form-item"
                >
                    <Input
                        placeholder={t("title")}
                        className="form-item-input"
                    />
                </Form.Item>
                <Form.Item
                    label={t("choose status")}
                    name="completed"
                    rules={[{ required: true, message: t("please_input_your_status") }]}
                    className="form-item"
                >
                    <Select defaultValue="False">
                        <Option value="false">False</Option>
                        <Option value="true">True</Option>
                    </Select>
                </Form.Item>
                {props.isEdited ? (
                    <Button
                        className="form-button form-button-edit"
                        type="primary"
                        htmlType="submit"
                        icon={<EditOutlined />}
                        loading={props.loadingButton}
                    >
                        {t("edit")}
                    </Button>
                ) : (
                    <Button
                        className="form-button form-button-add"
                        type="primary"
                        htmlType="submit"
                        loading={props.loadingButton}
                        icon={<PlusOutlined />}
                    >
                        {t("add")}
                    </Button>
                )}
            </div>
        </Form>
    );
};
