// 获取列表数据的方法封装

export function getDate(root, url, params) {
  root.service
    .get(url, { params: params || {} })
    .then((res) => {
      if (res.data.status === 200) {
        root.tableData = res.data.data;
        root.total = res.data.total;
      }
    })
    .catch((err) => {
      throw err;
    });
}

// 新增和修改方法的封装
import qs from "qs";
export function changeInfo(root, method, url, form, callback) {
  let data = qs.stringify(form);
  root.service[method](url, data)
    .then((res) => {
      if (res.data.status === 200) {
        callback(root, url);
        root.dialogFormVisible = false;
        root.$refs["form"].resetFields();
        root.$message({ type: "success", message: res.data.message });
      }
    })
    .catch((err) => {
      throw err;
    });
}

// 删除方法的封装
export function deleteInfo(root, url, id, callB) {
  root.$alert("确定要删除吗？", "提示", {
    confirmButtonText: "确定",
    callback: () => {
      root.service.delete(`${url}/${id}`).then((res) => {
        if (res.data.status === 200) {
          callB(root, url);

          root.$message({ message: res.data.message, type: "success" });
        }
      });
    },
  });
}

// 对请求作业列表的数据方法进行封装
export function getWorkInfos(root, url, params, arr) {
  root.service
    .get(url, { params: params || {} })
    .then((res) => {
      if (res.data.status === 200) {
        root.tableData = res.data.data;
        root.total = res.data.total;
        root.tableData.map((aItem) => {
          arr.map((item) => {
            aItem[item]
              ? (aItem[item + "_text"] = "是")
              : (aItem[item + "_text"] = "否");
          });
        });
        root.loading = false;
      }
    })
    .catch((err) => {
      throw err;
    });
}
