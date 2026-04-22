import {RouterProvider} from 'react-router'
import {router} from './routers.jsx'
import { AuthProvider } from './features/auth/services/auth.context.jsx'

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    )
}

export default App
