<script setup>
import { ref, computed, onMounted } from "vue";
import CourseCard from "../components/CourseCard.vue";
// TODO: import axios
import axios from "axios";
// TODO: import { useFavoriteStore } จาก "../stores/favorite"
import { useFavoriteStore } from "../stores/favorite";

const courses = ref([]);
// TODO: ดึงข้อมูลจาก API ด้วย axios.get() แล้วเก็บใน courses
const fetchCourses = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  courses.value = response.data;
};
onMounted(fetchCourses);
// TODO: ใช้ store เพื่อเข้าถึง username และ favorites
const favoriteStore = useFavoriteStore();
const username = computed({
  get: () => favoriteStore.username,
  set: (value) => favoriteStore.setUsername(value),
});
const favorites = computed(() => favoriteStore.favorites);
</script>

<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <!-- TODO: แสดงจำนวนคอร์สที่ถูกใจจาก store -->
      <p>❤️ ถูกใจแล้ว {{ favorites.length }} คอร์ส</p>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <!-- TODO: v-model username -->
      <input v-model="username" placeholder="กรอกชื่อของคุณ" />
    </div>

    <div class="course-list">
      <!-- TODO: Render CourseCard -->
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.course-list {
  margin-top: 24px;
}
</style>
