import LoggableDirective  from './loggable.directive';

const module = angular.module('loggable', [])
  .directive('loggable', ['FriendService', (FriendService) => new LoggableDirective(FriendService)]);

export default module;
