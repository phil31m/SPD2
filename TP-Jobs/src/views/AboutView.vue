<template>
  <div class="add-job">
    <div class="add-header">
      <h2>Add New Job</h2>
      <p class="subtitle">Fill in the details below to create a new job posting</p>
    </div>
    <form @submit.prevent="ajouterEmploi" class="job-form">
      <div class="form-group">
        <label>Titre:</label>
        <input 
          type="text" 
          v-model="titre1" 
          required 
          placeholder="Enter job title"
        >
      </div>
      <div class="form-group">
        <label>Description:</label>
        <textarea 
          v-model="desc" 
          required 
          placeholder="Enter job description"
        ></textarea>
      </div>
      <div class="form-group">
        <label>Salaire:</label>
        <input 
          type="text" 
          v-model="sal" 
          required 
          placeholder="Enter salary (e.g., 40000 MAD)"
        >
      </div>
      <div class="form-group">
        <label>Date de création:</label>
        <input 
          type="date" 
          v-model="date1" 
          required
        >
      </div>
      <div class="form-group">
        <label>Années d'expérience:</label>
        <input 
          type="number" 
          v-model="experience" 
          required 
          min="0"
          placeholder="Years of experience"
        >
      </div>
      <div class="form-actions">
        <button type="submit" class="submit-btn">
          <i class="fas fa-plus"></i> Add Job
        </button>
        <button type="button" @click="$router.push('/')" class="cancel-btn">
          <i class="fas fa-times"></i> Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddJob',
  data() {
    return {
      titre1: '',
      desc: '',
      sal: '',
      date1: '',
      experience: 0
    }
  },
  methods: {
    ajouterEmploi() {
      const newJob = {
        id: Date.now(),
        titre: this.titre1,
        description: this.desc,
        salaire: this.sal,
        date_de_creation: this.date1,
        experience: this.experience
      }
      
      this.$emit('add-job', newJob)
      
      // Reset form
      this.titre1 = ''
      this.desc = ''
      this.sal = ''
      this.date1 = ''
      this.experience = 0
      
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.add-job {
  max-width: 800px;
  margin: 40px auto;
                padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.add-header {
  text-align: center;
  margin-bottom: 30px;
}

.add-header h2 {
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

.submit-btn, .cancel-btn {
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

.submit-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.cancel-btn {
  background: #e2e8f0;
  color: #4a5568;
}

.submit-btn:hover, .cancel-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .add-job {
    margin: 20px;
    padding: 20px;
  }

  .form-actions {
    flex-direction: column;
  }

  .submit-btn, .cancel-btn {
    width: 100%;
    justify-content: center;
  }
            }
            </style>

