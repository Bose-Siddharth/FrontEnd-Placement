import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/20/solid'
import React from 'react'
import DataTable from '../../components/DataTable'
import Drives from '../../components/Drives'
import Notices from '../../components/Notices'
import Stats, { IStatProps } from '../../components/Stats'
import DashboardLayout from '../../layout/DashboardLayout'

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
    href: '/',
    icon: ChartBarIcon,
    current: false,
  },
]

const statData: IStatProps[] = [
  {
    name: 'Drives',
    stat: '1,234',
  },
  {
    name: 'Notices',
    stat: '1,234',
  }
]

const Dashboard = () => {
  return (
    <DashboardLayout title="Student Dashboard" navigation={studentNavigation}>
      <div className="px-4 py-6 sm:px-0">
        <Stats stats={statData} />
      </div>
      <div className="px-4 py-6 sm:px-0">
        {/* <DataTable /> */}
        <Notices />
        <Drives />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
