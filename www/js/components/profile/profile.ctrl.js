class ProfileCtrl {
    constructor($scope, FriendService) {
        this.userName = 'John Doe';
        $scope.friends = FriendService.all();
        console.log("CTRL:",$scope);
    }
}

ProfileCtrl.$inject = ['$scope', 'FriendService'];

export default ProfileCtrl;
