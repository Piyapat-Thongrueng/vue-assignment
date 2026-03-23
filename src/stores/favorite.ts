// TODO1: สร้าง store ชื่อ useFavoriteStore
import { defineStore } from "pinia";

interface Favorite {
  id: number;
  title: string;
  price: number;
}

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    username: "",
    favorites: [] as Favorite[],
  }),
  actions: {
    setUsername(name: string) {
      this.username = name;
    },
    addFavorite(course: Favorite) {
      this.favorites.push(course);
    },
    removeFavorite(course: Favorite) {
      this.favorites = this.favorites.filter((c) => c.id !== course.id);
    },
    clearFavorites() {
      this.favorites = [];
    },
  },
});

