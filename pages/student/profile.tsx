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
import Profile from '../../components/Profile'
import { useRouter } from 'next/router'

const studentNavigation = [
  { name: 'Dashboard', href: '/student', icon: HomeIcon, current: true },
  {
    name: 'Profile',
    href: '/student/profile',
    icon: UsersIcon,
    current: false,
  },
  { name: 'Notice', href: '/student/notice', icon: FolderIcon, current: false },
  { name: 'Drive', href: '/student/drive', icon: CalendarIcon, current: false },
  {
    name: 'View Results',
    href: '/student/results',
    icon: ChartBarIcon,
    current: false,
  },
]

const Dashboard = (props: any) => {
  const router = useRouter()

  return (
    <DashboardLayout title="Profile" navigation={studentNavigation}>
      <div className="px-4 py-6 sm:px-0">
        <Profile />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
