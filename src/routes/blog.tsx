import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SiteLayout } from '../components/SiteLayout'

export const Route = createFileRoute('/blog')({ component: BlogLayout })

function BlogLayout() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  )
}
