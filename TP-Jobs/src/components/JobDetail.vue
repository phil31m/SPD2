<template>
  <div class="job-detail" v-if="job">
    <div class="job-header">
      <h2>{{ job.titre }}</h2>
      <span class="salary-badge">{{ job.salaire }}</span>
    </div>
    <div class="job-info">
      <div class="info-group">
        <label>ID:</label>
        <span>{{ job.id }}</span>
      </div>
      <div class="info-group">
        <label>Description:</label>
        <p class="description">{{ job.description }}</p>
      </div>
      <div class="info-group">
        <label>Date de création:</label>
        <span>{{ job.date_de_creation }}</span>
      </div>
      <div class="info-group" v-if="job.experience">
        <label>Années d'expérience:</label>
        <span>{{ job.experience }} ans</span>
      </div>
    </div>
    <div class="actions">
      <button @click="editJob" class="edit-btn">
        <i class="fas fa-edit"></i> Edit Job
      </button>
      <button @click="confirmDelete" class="delete-btn">
        <i class="fas fa-trash"></i> Delete Job
      </button>
    </div>
  </div>
  <div v-else class="not-found">
    <i class="fas fa-search"></i>
    <p>Job not found</p>
  </div>
</template>

<script>
export default {
  name: 'JobDetail',
  props: {
    jobs: {
      type: Array,
      required: true
    }
  },
  computed: {
    job() {
      const jobId = parseInt(this.$route.params.id)
      return this.jobs.find(job => job.id === jobId)
    }
  },
  methods: {
    editJob() {
      this.$router.push(`/jobs/${this.job.id}/edit`)
    },
    confirmDelete() {
      if (confirm('Are you sure you want to delete this job?')) {
        this.$emit('delete-job', this.job.id)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.job-detail {
  max-width: 800px;
  margin: 20px auto;
  padding: 30px;
  border-radius: 12px;
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e0e0e0;
}

.job-header h2 {
  color: #2c3e50;
  margin: 0;
  font-size: 28px;
}

.salary-badge {
  background: linear-gradient(145deg, #42b983, #3aa876);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px;
}

.job-info {
  margin: 20px 0;
  text-align: left;
}

.info-group {
  margin: 15px 0;
}

.info-group label {
  display: block;
  color: #666;
  font-size: 14px;
  margin-bottom: 5px;
}

.info-group span {
  color: #2c3e50;
  font-size: 16px;
}

.description {
  color: #2c3e50;
  line-height: 1.6;
  margin: 10px 0;
}

.actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
}

.edit-btn, .delete-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.edit-btn {
  background: linear-gradient(145deg, #42b983, #3aa876);
  color: white;
}

.delete-btn {
  background: linear-gradient(145deg, #ff4444, #ff3333);
  color: white;
}

.edit-btn:hover, .delete-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.not-found {
  text-align: center;
  padding: 40px;
  color: #666;
}

.not-found i {
  font-size: 48px;
  margin-bottom: 20px;
  color: #42b983;
}

.not-found p {
  font-size: 18px;
  margin: 0;
}
</style> 