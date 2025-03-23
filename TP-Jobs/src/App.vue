<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add Job</router-link>
    </nav>
    <router-view :jobs="jobs" @add-job="addJob" @update-job="updateJob" @delete-job="deleteJob"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      jobs: [
        {
          id: 1,
          titre: 'Développeur Frontend',
          description: 'Nous recherchons un développeur frontend expérimenté pour rejoindre notre équipe.',
          salaire: '40000 MAD',
          date_de_creation: '2024-03-15',
          experience: 3
        },
        {
          id: 2,
          titre: 'Développeur Backend',
          description: 'Poste de développeur backend avec expertise en Node.js et MongoDB.',
          salaire: '45000 MAD',
          date_de_creation: '2024-03-16',
          experience: 4
        }
      ]
    }
  },
  methods: {
    addJob(job) {
      this.jobs.push(job)
    },
    updateJob(updatedJob) {
      const index = this.jobs.findIndex(job => job.id === updatedJob.id)
      if (index !== -1) {
        this.jobs[index] = updatedJob
      }
    },
    deleteJob(jobId) {
      this.jobs = this.jobs.filter(job => job.id !== jobId)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  color: #2c3e50;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.2;
}

button {
  cursor: pointer;
  font-family: inherit;
}

input, textarea, select {
  font-family: inherit;
}
</style>
