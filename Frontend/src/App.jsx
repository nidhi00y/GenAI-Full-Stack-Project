import {RouterProvider} from 'react-router'
import {router} from './routers.jsx'
import { AuthProvider } from './features/auth/services/auth.context.jsx'
import { InterviewProvider } from './features/ai/services/interview.context.js'

function App() {
    return (
        <AuthProvider>
            <InterviewProvider>
                <RouterProvider router={router}/>
            </InterviewProvider>
        </AuthProvider>
    )
}

export default App
