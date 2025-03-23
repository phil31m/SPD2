import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddJob from '../views/AboutView.vue'
import EditJob from '../views/EditJob.vue'
import JobDetail from '../components/JobDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'add-job',
    component: AddJob ,
  },
  {
    path: '/jobs/:id',
    name: 'job-detail',
    component: JobDetail
  },
  {
    path: '/jobs/:id/edit',
    name: 'edit-job',
    component: EditJob
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
