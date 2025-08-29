// 라우터 설정
import IndexPage from '../pages/IndexPage.jsx';
import BlogPage from '../pages/BlogPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import {createBrowserRouter} from 'react-router-dom';
import RootLayout from '../layouts/RootLayout.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        // custom error page 설정
        errorElement: <ErrorPage/>,
        // children -> Layout의 Outlet 부분을 뭘로 바뀔지 설정
        children: [
            {
                // index: true,
                path: '',
                element: <IndexPage/>,
            },
            {
                path: 'blog',
                element: <BlogPage/>,
            },
            {
                path: 'about',
                element: <AboutPage/>,
            },
        ]
    }

]);
