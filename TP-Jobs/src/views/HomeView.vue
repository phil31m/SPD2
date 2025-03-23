<template>
  <div class="home">
    <div class="hero-section">
      <h1>Find Your Dream Job</h1>
      <p>Discover exciting career opportunities in the tech industry</p>
    </div>
    <FilterNav @filter="filterJobs" />
    <div class="jobs-grid">
      <div v-for="job in filteredJobs" :key="job.id" class="job-card">
        <router-link :to="{ name: 'job-detail', params: { id: job.id }}" class="job-link">
          <div class="job-card-header">
            <h3>{{ job.titre }}</h3>
            <span class="salary-tag">{{ job.salaire }}</span>
          </div>
          <div class="job-card-content">
            <p class="description">{{ job.description }}</p>
            <div class="job-meta">
              <span class="date">
                <i class="fas fa-calendar"></i>
                {{ job.date_de_creation }}
              </span>
              <span class="experience" v-if="job.experience">
                <i class="fas fa-briefcase"></i>
                {{ job.experience }} ans d'expérience
              </span>
            </div>
          </div>
        </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue'

export default {
  name: 'HomeView',
  components: {
    FilterNav
  },
  props: {
    jobs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchQuery: '',
      salaryFilter: ''
    }
  },
  computed: {
    filteredJobs() {
      return this.jobs.filter(job => {
        const matchesSearch = job.titre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            job.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        
        let matchesSalary = true
        if (this.salaryFilter) {
          const salary = parseInt(job.salaire.replace(/[^0-9]/g, ''))
          switch (this.salaryFilter) {
            case '0-30000':
              matchesSalary = salary <= 30000
              break
            case '30000-50000':
              matchesSalary = salary > 30000 && salary <= 50000
              break
            case '50000+':
              matchesSalary = salary > 50000
              break
          }
        }
        
        return matchesSearch && matchesSalary
      })
    }
  },
  methods: {
    filterJobs({ search, salary }) {
      this.searchQuery = search
      this.salaryFilter = salary
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding-bottom: 40px;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 40px;
}

.hero-section h1 {
  font-size: 2.5em;
  margin: 0;
  margin-bottom: 10px;
}

.hero-section p {
  font-size: 1.2em;
  opacity: 0.9;
  margin: 0;
}

.jobs-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.job-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.job-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.job-link {
  text-decoration: none;
  color: inherit;
}

.job-card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  color: white;
}

.job-card-header h3 {
  margin: 0;
  font-size: 1.4em;
  margin-bottom: 10px;
}

.salary-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.9em;
}

.job-card-content {
  padding: 20px;
}

.description {
  color: #4a5568;
  margin: 0 0 15px 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.job-meta {
  display: flex;
  gap: 15px;
  color: #718096;
  font-size: 0.9em;
}

.job-meta span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.job-meta i {
  color: #667eea;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 40px 20px;
  }

  .hero-section h1 {
    font-size: 2em;
  }

  .jobs-grid {
    grid-template-columns: 1fr;
  }
            }
            </style>
