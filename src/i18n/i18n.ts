import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import APP_EN from '../locales/en/app.json'
// import COUNT_EN from '../locales/en/count.json'
// import APP_VI from '../locales/vi/app.json'
// import COUNT_VI from '../locales/vi/count.json'

export const locales = {

}

export const resources = {
    en: {
        //goi la namespace
        translation: {
            'title': 'Title',
            'choose status': 'Choose status',
            'add': 'Add',
            'edit': 'Edit',
            'delete': 'Delele',
            'add task': 'Add Task',
            'status': 'Status',
            'please_input_your_title': 'Please input your title!',
            'please_input_your_status': 'Please input your status!'
        }
        // app: APP_EN,
        // count: COUNT_EN
    },
    vi: {
        translation: {
            'title': 'Tên',
            'choose status': 'Chọn trạng thái',
            'add': 'Thêm',
            'edit': 'Chỉnh Sửa',
            'delete': 'Xóa',
            'add task': 'Thêm Danh Mục',
            'status': 'Trạng thái',
            'please_input_your_title': 'Hãy điền tên task!',
            'please_input_your_status': 'Hãy điền trạng thái task!'
        }
        // app: APP_VI,
        // count: COUNT_VI
    }
}

// const defaultNS = 'app'

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    // ns: ['app', 'count'],
    fallbackLng: 'en',
    // defaultNS,
    interpolation: {
        escapeValue: false
    }
})


