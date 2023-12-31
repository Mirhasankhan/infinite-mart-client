import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            <Sidebar />
            <div className='flex-1'>
                <div className='p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout