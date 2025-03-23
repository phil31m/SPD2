<template>
  <div class="filter-nav">
    <div class="filters">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search jobs..."
          @input="filterJobs"
        >
      </div>
      <div class="filter-box">
        <i class="fas fa-filter"></i>
        <select v-model="salaryFilter" @change="filterJobs">
          <option value="">All Salaries</option>
          <option value="0-30000">0 - 30,000 MAD</option>
          <option value="30000-50000">30,000 - 50,000 MAD</option>
          <option value="50000+">50,000+ MAD</option>
        </select>
      </div>
      <button @click="$router.push('/add')" class="add-job-btn">
        <i class="fas fa-plus"></i>
        Add New Job
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterNav',
  data() {
    return {
      searchQuery: '',
      salaryFilter: ''
    }
  },
  methods: {
    filterJobs() {
      this.$emit('filter', {
        search: this.searchQuery,
        salary: this.salaryFilter
      })
    }
  }
}
</script>

<style scoped>
.filter-nav {
  background: white;
  padding: 20px;
  margin: -30px 20px 30px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.filters {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}

.search-box, .filter-box {
  flex: 1;
  min-width: 200px;
  position: relative;
}

.search-box i, .filter-box i {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #667eea;
}

input, select {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

input:focus, select:focus {
  outline: none;
  border-color: #667eea;
}

.add-job-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.add-job-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .filter-nav {
    margin: -20px 10px 20px;
    padding: 15px;
  }

  .filters {
    flex-direction: column;
    gap: 15px;
  }

  .search-box, .filter-box {
    width: 100%;
  }

  .add-job-btn {
    width: 100%;
    justify-content: center;
  }
}
</style> 