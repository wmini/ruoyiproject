import request from '@/utils/request'

// 查询部门列表
export function listDept(query) {
  return request({
    url: '/system/dept/list',
    method: 'get',
    params: query
  })
}

// 查询部门列表（排除节点）
export function listDeptExcludeChild(deptId) {
  return request({
    url: '/system/dept/list/exclude/' + deptId,
    method: 'get'
  })
}

// 查询部门详细
export function getDept(deptId) {
  return request({
    url: '/system/dept/' + deptId,
    method: 'get'
  })
}

// 新增部门
export function addDept(data) {
  return request({
    url: '/system/dept',
    method: 'post',
    data: data
  })
}

// 修改部门
export function updateDept(data) {
  return request({
    url: '/system/dept',
    method: 'put',
    data: data
  })
}

// 删除部门
/*
export function delDept(deptId) {
  return request({
    url: '/system/dept/' + deptId,
    method: 'delete'
  })
}*/

/*export function delDept(deptId, forceDelete = 0) {
  console.log(1)
  return new Promise((resolve, reject) => {
    console.log(2)
    // 调用删除部门的接口
    request({
      url: '/system/dept?deptId=' + deptId + (forceDelete === 1 ? '&forceDelete=1' : ''),
      method: 'delete'
    }).then(response => {
      console.log(response)
      // 处理接口返回的数据
      if (response.code == 601) {
        console.log(3);
        // 如果返回的错误码为 601，则根据用户选择执行强制删除操作
          this.$modal.confirm('存在下级部门，是否确认删除？').then(function () {
            return this.delDept(deptId, 1);
          }).then(() => {
            // this.getList();
            this.$modal.msgSuccess("删除成功");
          }).catch(() => {
            // 用户选择确认删除，继续调用删除接口，并传递 forceDelete 参数为 1
            // this.delDept(deptId, 1).then(resolve).catch(reject);
            // 用户选择取消删除，拒绝删除操作
            // reject(new Error('取消删除操作'));
            this.$modal.msgSuccess("取消删除");
            console.log('catch')
          })
      } else {
        // 其他错误码或正常情况下，直接resolve
        resolve();
      }
    }).catch(error => {
      console.log(error)
      // 处理请求失败的情况
      reject(error);
    });
  });
}*/

export function delDept(deptId, forceDelete) {
  return request({
    url: '/system/dept?deptId=' + deptId + (forceDelete === 1 ? '&forceDelete=1' : ''),
    method: 'delete'
  })
}

/*
export function delDept(deptId) {
  return request({
    url: '/system/dept/' + deptId,
    method: 'delete'
  })
}*/
