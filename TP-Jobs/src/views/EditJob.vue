<template>
  <div class="edit-job">
    <div class="edit-header">
      <h2>Edit Job</h2>
      <p class="subtitle">Update the job details below</p>
    </div>
    <form @submit.prevent="updateJob" class="job-form" v-if="job">
      <div class="form-group">
        <label>Titre:</label>
        <input type="text" v-model="job.titre" required placeholder="Enter job title">
      </div>
      <div class="form-group">
        <label>Description:</label>
        <textarea v-model="job.description" required placeholder="Enter job description"></textarea>
      </div>
      <div class="form-group">
        <label>Salaire:</label>
        <input type="text" v-model="job.salaire" required placeholder="Enter salary">
      </div>
      <div class="form-group">
        <label>Date de création:</label>
        <input type="date" v-model="job.date_de_creation" required>
      </div>
      <div class="form-group">
        <label>Années d'expérience:</label>
        <input type="number" v-model="job.experience" required min="0" placeholder="Years of experience">
      </div>
      <div class="form-actions">
        <button type="submit" class="save-btn">
          <i class="fas fa-save"></i> Save Changes
        </button>
        <button type="button" @click="$router.push('/')" class="cancel-btn">
          <i class="fas fa-times"></i> Cancel
        </button>
      </div>
    </form>
    <div v-else class="not-found">
      <i class="fas fa-search"></i>
      <p>Job not found</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditJob',
  props: {
    jobs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      job: null
    }
  },
  created() {
    const jobId = parseInt(this.$route.params.id)
    const foundJob = this.jobs.find(j => j.id === jobId)
    if (foundJob) {
      this.job = { ...foundJob }
    }
  },
  methods: {
    updateJob() {
      this.$emit('update-job', this.job)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.edit-job {
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.edit-header {
  text-align: center;
  margin-bottom: 30px;
}

.edit-header h2 {
  color: #2c3e50;
  font-size: 28px;
  margin: 0;
}

.subtitle {
  color: #718096;
  margin: 10px 0 0;
}

.job-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: 600;
  color: #4a5568;
  font-size: 14px;
}

input, textarea {
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #667eea;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.form-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
}

.save-btn, .cancel-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.save-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.cancel-btn {
  background: #e2e8f0;
  color: #4a5568;
}

.save-btn:hover, .cancel-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.not-found {
  text-align: center;
  padding: 40px;
  color: #718096;
}

.not-found i {
  font-size: 48px;
  margin-bottom: 20px;
  color: #667eea;
}

.not-found p {
  font-size: 18px;
  margin: 0;
}

@media (max-width: 768px) {
  .edit-job {
    margin: 20px;
    padding: 20px;
  }

  .form-actions {
    flex-direction: column;
  }

  .save-btn, .cancel-btn {
    width: 100%;
    justify-content: center;
  }
}
</style> 