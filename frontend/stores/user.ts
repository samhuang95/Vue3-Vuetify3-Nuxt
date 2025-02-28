import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '小明',
    userAge: 25,
    users: [
      { id: 1, name: '小明' },
      { id: 2, name: '小華' },
      { id: 3, name: '小李' },
    ],
  }),
  actions: {
    updateUsername(name: string) {
      this.username = name;
    },
    addUser(user: { id: number; name: string }) {
      this.users.push(user);
    },
  },
});
