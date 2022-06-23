var crudApp = angular.module("crudApp",[])

crudApp.controller('crudController', function($scope){
    
    $scope.records = [
        {"name":"pankaj","age":21},
        {"name":"Rishov","age":22},
        {"name":"Sayan","age":23},
        {"name":"avik","age":24}
    ];

    $scope.delete = function(){
        var index = this.$index;
        $scope.records.splice(index,1); // splice method takes the starting index, and upto how many data from the index
    }

    $scope.addUser = function(){
        userName = $scope.data.name
        userAge = $scope.data.age

        $scope.records.push({"name":userName, "age": userAge})
    }

    $scope.edit = function(){

        $scope.x = {
            "display":"block"
        }
        let index = this.$index
        $scope.edit.index = index
       $scope.edit.updateName = $scope.records[index].name
        $scope.edit.updateAge =  $scope.records[index].age
    }

    $scope.updateUser =  function() {

        let index = $scope.edit.index
        userName = $scope.edit.updateName
        userAge = $scope.edit.updateAge

        $scope.records[index] = {"name":userName, "age": userAge}
       
    }

   
}); 