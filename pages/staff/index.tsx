import {
  ChartBarIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/20/solid'
import React from 'react'
import DataTable from '../../components/DataTable'
import Drives from '../../components/Drives'
import Notices from '../../components/Notices'
import DashboardLayout from '../../layout/DashboardLayout'

const staffNavigation = [
  { name: 'Dashboard', href: '/staff', icon: HomeIcon, current: true },
  { name: 'Profile', href: '/staff/profile', icon: UsersIcon, current: false },
  {
    name: 'Add Notice',
    href: '/staff/notice',
    icon: InboxIcon,
    current: false,
  },
  { name: 'Add Drive', href: '/staff/drive', icon: InboxIcon, current: false },
  {
    name: 'View Results',
    href: '/',
    icon: ChartBarIcon,
    current: false,
  },
]

const Dashboard = () => {
  return (
    <DashboardLayout title="Staff Dashboard" navigation={staffNavigation}>
      <div className="px-4 py-6 sm:px-0">
        <DataTable type="admin" />
        <Notices />
        <Drives />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
