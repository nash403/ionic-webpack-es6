export default class LoggableDirective {
  constructor(FriendService) {
    this.restrict = 'A';
    this.scope = {
      loggable: '=',
      index: '='
    };
    this.link = (scope, element) => {
      scope.friends = FriendService.all();
      element.bind('click',(event) => {
        console.log(`I am task ${scope.index}: '${scope.loggable}' and all friends are: ${scope.friends}`);
      });
    }
  }
}
