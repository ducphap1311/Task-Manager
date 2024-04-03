import React, { useState, useEffect } from "react";
import { Form, MenuProps } from "antd";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "antd";
import { Sidebar } from "./components/layouts/Sider";
import { Head } from "./components/layouts/Header";
import { TodosForm } from "./components/todos/TodoForm/TodoForm";
import { TodoList } from "./components/todos/TodoList";
import { getAll } from "./api services/getService";
import { deleteService } from "./api services/deleteService";
import { createService } from "./api services/createService";
import { updateService } from "./api services/updateService";
import { Paginate } from "./components/layouts/Paginate";
const { Content } = Layout;

type todo = {
    userId: number;
    id?: number;
    title: string;
    completed: boolean;
};

const App: React.FC = () => {
    const [todos, setTodos] = useState<todo[]>([]);
    const [show, setShow] = useState<todo[]>([])
    const [form] = Form.useForm();
    const [isEdited, setIsEdited] = useState<boolean>(false);
    const [idUpdated, setIdUpdated] = useState<boolean>();
    const [loadingButton, setLoadingButton] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10)

    const onFinish = async (values: { title: string; completed: string }) => {
        setLoadingButton(true)
        if (!isEdited) {
            const result = await createService({
                title: values.title,
                completed: JSON.parse(values.completed),
            });
            setLoadingButton(false)
            setTodos([...todos, result]);
            toast("Add task successfully!", {
                type: "success",
                position: "top-center",
                draggable: true,
                theme: "dark",
            });
        } else {
            const result = await updateService(idUpdated, {
                title: values.title,
                completed: JSON.parse(values.completed),
            });
            setLoadingButton(false)
            setTodos(
                todos.map((todo) => {
                    if (todo.id === idUpdated) {
                        return result;
                    }
                    return todo;
                })
            );
            setIsEdited(false);
            form.setFieldsValue({ title: "", completed: "" });
            toast("Update task successfully!", {
                type: "success",
                position: "top-center",
                draggable: true,
                theme: "dark",
            });
        }
    };

    const deleteTask = async (id: any) => {
        const result = await deleteService(id); 
        const newData = todos.filter((item) => item.id !== id);
        setTodos(newData);
        toast("Delete task successfully!", {
            type: "success",
            position: "top-center",
            draggable: true,
            theme: "dark",
        });
    };

    const setFormData = (id: any) => {
        const item = todos.filter((todo) => todo.id === id)[0];
        form.setFieldsValue({
            title: item.title,
            completed: String(item.completed),
        });
        setIsEdited(true);
        setIdUpdated(id);
    };
    
    const changePage = (page: number, pageSize: number) => {        
        setPage(page)
        setPageSize(pageSize)
        const start = (page-1) * pageSize
        const end = start + pageSize
        setShow(todos.slice(start, end))
    }

    const fetchAPI = async () => {
        const result = await getAll();
        setTodos(result);
        setShow(result.slice(0, 10))
    };

    useEffect(() => {
        const start = (page - 1)*pageSize
        const end = start + pageSize
        setShow(todos.slice(start, end))
    }, [todos])

    useEffect(() => {        
        fetchAPI();
    }, []);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sidebar />
            <Layout style={{ background: "#18212e" }}>
                <Head />
                <Content
                    style={{
                        padding: "30px 70px",
                        background: "rgb(27, 38, 53)",
                        paddingLeft: 288,
                    }}
                    className="header-content"
                >
                    <TodosForm
                        onFinish={onFinish}
                        isEdited={isEdited}
                        form={form}
                        loadingButton={loadingButton}
                    />
                    <div
                        style={{
                            color: "white",
                            marginBottom: "20px",
                            fontWeight: "500",
                            fontSize: "16px",
                        }}
                    >
                        {todos.length} tasks
                    </div>
                    <TodoList
                        todos={show}
                        setFormData={setFormData}
                        deleteTask={deleteTask}
                    />
                <Paginate total={todos.length} changePage={changePage} />
                </Content>
            </Layout>
            <ToastContainer />
        </Layout>
    );
};

export default App;
