var alertCtrl1=['$scope','wiAlert',function ($scope,wiAlert){
    $scope.info=function(){
        wiAlert.info("请选择要操作的数据!");
    }
    $scope.warn=function(){
        wiAlert.warn("该条数据已经被更新,请刷新列表获取最新数据!");
    }
    $scope.error=function(){
        wiAlert.error("数据删除失败!");
    }
    $scope.success=function(){
        wiAlert.success("删除数据成功!")
            .yes(function(){
                wiAlert.info("点击了确定按钮！！！");
            })
    }
    $scope.confirm=function(){
        wiAlert.confirm("确定要删除该条数据吗？")
            .yes(function(){
                wiAlert.success("删除数据成功!");
            })
            .no(function(){
                wiAlert.info("您取消了本次操作!");
            })
    }
}];
angular.module('ui.wisoft').controller('alertCtrl1',alertCtrl1);