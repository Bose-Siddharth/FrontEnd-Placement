import React from 'react'
import DashboardLayout from '../../layout/DashboardLayout'
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/20/solid'
import DataTable from '../../components/DataTable'

import Notices from '../../components/Notices.jsx'
import Drives from '../../components/Drives.jsx'

const adminNavigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon, current: true },
  { name: 'Profile', href: '/admin/profile', icon: UsersIcon, current: false },
  {
    name: 'Manage Students',
    href: '/admin/students',
    icon: FolderIcon,
    current: false,
  },
  {
    name: 'Manage Staff',
    href: '/admin/staff',
    icon: CalendarIcon,
    current: false,
  },
  {
    name: 'Add Notice',
    href: '/admin/notice',
    icon: InboxIcon,
    current: false,
  },
  { name: 'Add Drive', href: '/admin/drive', icon: InboxIcon, current: false },
  {
    name: 'View Results',
    href: '/',
    icon: ChartBarIcon,
    current: false,
  },
]

const Dashboard = () => {
  return (
    <DashboardLayout title="Admin Dashboard" navigation={adminNavigation}>
      <div className="px-4 py-6 sm:px-0">
        <DataTable  type="admin" />
        {/* show notices */}
        <Notices/>
        <Drives/>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
