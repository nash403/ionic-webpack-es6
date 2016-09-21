import FriendService  from './friend.service';

const module = angular.module('friend', [])
  .service('FriendService', FriendService);

export default module;
