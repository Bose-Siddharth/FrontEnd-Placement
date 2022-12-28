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
    href: '/admin/results',
    icon: ChartBarIcon,
    current: false,
  },
]



const notice = () => {
  return (
    <DashboardLayout title="Add Notice" navigation={adminNavigation}>
      <div className="px-4 py-6 sm:px-0">
        <NoticeUpload/>
      </div>
    </DashboardLayout>
  )
}

export default notice
