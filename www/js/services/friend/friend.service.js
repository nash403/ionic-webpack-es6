export default class FriendService {
  constructor() {
    this.friends = [
      'Alba Ivanov',
      'Jame Debouzze',
      'Waly Dia'
    ];
  }

  all() {
    return this.friends;
  }
}
