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
import NoticeUpload from '../../components/NoticeUpload'
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
    href: '/staff/results',
    icon: ChartBarIcon,
    current: false,
  },
]


const notice = () => {
  return (
    <DashboardLayout title="Add Notice" navigation={staffNavigation}>
      <div className="px-4 py-6 sm:px-0">
        <NoticeUpload/>
      </div>
    </DashboardLayout>
  )
}

export default notice
