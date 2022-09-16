<template>
  <div class="home-list">
    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ y: 400 }"
      :pagination="pagination"
      :customRow="rowClick"
      :rowClassName="setRowClassName"
      :loading="loading"
      bordered
      ><template #operation="{ record }">
        <a-popconfirm
          v-if="data.length"
          title="确定下载?"
          @confirm="onDownLoad(record)"
        >
          <a-button type="primary" class="download">下载</a-button>
        </a-popconfirm>
      </template></a-table
    >
  </div>
</template>
<script>
import { defineComponent, ref, onMounted, inject, computed } from "vue";

export default defineComponent({
  setup() {
    const message = inject("$message");
    const columns = [
      {
        title: "项目名称",
        dataIndex: "name",
        width: 150,
        align: "center",
      },
      {
        title: "项目明细",
        dataIndex: "age",
        width: 150,
        align: "center",
      },
      {
        title: "项目明细",
        dataIndex: "age",
        width: 150,
        align: "center",
      },
      {
        title: "耗材名称",
        dataIndex: "age",
        width: 150,
        align: "center",
      },
      {
        title: "最佳送检量",
        dataIndex: "age",
        width: 150,
        align: "center",
      },

      {
        title: "保存条件",
        dataIndex: "age",
        width: 150,
        align: "center",
      },
      {
        title: "临床意义",
        dataIndex: "age",
        width: 150,
        align: "center",
      },
      {
        title: "下载申请单模板",
        dataIndex: "operation",
        align: "center",
        slots: { customRender: "operation" },
      },
    ];

    const data = [...Array(100)].map((_, i) => ({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    }));
    const currentRow = null;
    const rowClick = (record, index) => {
      return {
        on: {
          click: () => {
            // console.log(record);
            currentRow = record; //自己定义个变量，用于保存点击行的数据
          },
        },
      };
    };
    const current = ref(1);
    const pagination = computed(() => ({
      current: current.value, //分页的索引
      total: 50,
      pageSize: 10, //每页中显示10条数据
      showSizeChanger: false, //不设置每页的数据条数
      pageSizeOptions: ["10", "20", "50", "100"], //每页中显示的数据
      showTotal: (total) => {
        return "总共" + total + "条记录"; //分页中显示总的数据
      },
      onChange: (page) => handleTableChange(page),
    }));
    const handleTableChange = (page) => {
      current.value = page;
    };
    // 行样式设置
    const setRowClassName = (record, index) => {
      let rowColor = index % 2 === 0 ? "evenRowStyl" : ""; //判断单双行，赋予不同样式
      return record === currentRow ? "clickRowStyl" : rowColor; //赋予点击行样式
    };
    const onDownLoad = (item) => {
      console.log(item);
      message.success("下载成功");
    };
    const loading = ref(true);
    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    });
    return {
      data,
      columns,
      pagination,
      setRowClassName,
      rowClick,
      currentRow,
      loading,
      onDownLoad,
      handleTableChange,
    };
  },
});
</script>


<style lang="less" >
.home-list {
  flex: 1;
  padding-top: 43px;
  width: 1200px;
  align-items: center;
  justify-content: center;
  z-index: 0;
}
.ant-table-thead > tr > th {
  font-size: 14px;
  font-family: Noto Sans S Chinese-Bold, Noto Sans S Chinese;
  font-weight: bold;
  color: #323741;
  background: #beeee4 !important;
}
//点击行的样式
.clickRowStyl {
  background-color: #bbbbff !important;
}
//偶数行的样式
.evenRowStyl {
  background-color: #f5fdfb !important;
}
.download {
  border-radius: 24px 24px 24px 24px;
  opacity: 1;
  font-size: 14px;
  font-family: Noto Sans S Chinese-Regular, Noto Sans S Chinese;
  font-weight: 400;
  color: #ffffff;
}
</style>
