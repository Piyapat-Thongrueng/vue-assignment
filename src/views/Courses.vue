<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <!-- TODO: แสดงจำนวนคอร์สที่ถูกใจจาก store -->
      <p>❤️ ถูกใจแล้ว 0 คอร์ส</p>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <!-- TODO: v-model username -->
      <input placeholder="กรอกชื่อของคุณ" />
    </div>

    <div class="course-list">
      <!-- TODO: Render CourseCard -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CourseCard from "../components/CourseCard.vue";
// TODO: import axios
// TODO: import { useFavoriteStore } จาก "../stores/favorite"

const courses = ref([]);
// TODO: ดึงข้อมูลจาก API ด้วย axios.get() แล้วเก็บใน courses
// TODO: ใช้ store เพื่อเข้าถึง username และ favorites
</script>

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
