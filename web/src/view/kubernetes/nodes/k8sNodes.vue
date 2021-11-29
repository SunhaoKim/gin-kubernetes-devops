<template>
  <div>
    <div class="search-term">
      <el-form :inline="true" :model="searchInfo" class="demo-form-inline">            
        <el-form-item>
          <el-button @click="onSubmit" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="openDialog" type="primary">添加节点</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="tableData.slice((page-1)*pageSize,page*pageSize)"
      @selection-change="handleSelectionChange"
      border
      ref="multipleTable"
      stripe
      style="width: 100%"
      tooltip-effect="dark"
    >
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column label="ID" prop="id" width="55"></el-table-column>
    <el-table-column label="节点" prop="nodeName" width="120"></el-table-column> 
    <el-table-column label="IP地址" prop="ip" width="120"></el-table-column>
    <el-table-column label="状态" prop="status" width="80"></el-table-column> 
        
    <el-table-column label="角色" prop="roles" width="80"></el-table-column> 
    
    <el-table-column label="创建时间" prop="createTime" width="180"></el-table-column> 
    
    <el-table-column label="版本" prop="version" width="120"></el-table-column>
    <el-table-column label="节点资源" prop="resource" width="120"></el-table-column>  
    
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button class="table-button" @click="updateK8sNodes(scope.row)" size="small" type="primary" icon="el-icon-edit">设置标签</el-button>
        <el-button class="table-button" @click="updateK8sNodes(scope.row)" size="small" type="primary" icon="el-icon-edit">上线下线</el-button>
        <el-popover placement="top" width="160" v-model="scope.row.visible">
          <p>确定要删除节点吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="scope.row.visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="deleteK8sNodes(scope.row)">确定</el-button>
          </div>
          <el-button type="danger" icon="el-icon-delete" size="mini" slot="reference">删除节点</el-button>
        </el-popover>
      </template>
    </el-table-column>
    </el-table>

    <el-pagination
      :current-page="page"
      :page-size="pageSize"
      :page-sizes="[10, 30, 50, 100]"
      :style="{float:'right',padding:'20px'}"
      :total="total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>

    <el-dialog :before-close="closeDialog" :visible.sync="dialogFormVisible" title="添加操作">
      <el-form :model="formData" label-position="right" label-width="80px">
      <el-form-item label="选择集群:">
            <el-input v-model="formData.label" clearable placeholder="请选择添加到的集群" ></el-input>
      </el-form-item>
         <el-form-item label="节点IP:">
            <el-input v-model="formData.name" clearable placeholder="请输入节点ip" ></el-input>
      </el-form-item>           
         <el-form-item label="节点标签:">
            <el-input v-model="formData.label" clearable placeholder="请输入节点标签" ></el-input>
      </el-form-item>      
         <el-form-item label="登陆用户:">
            <el-input v-model="formData.roles" clearable placeholder="请输入登陆用户名" ></el-input>
      </el-form-item>      
         <el-form-item label="登陆密码:">
            <el-input v-model="formData.version" clearable placeholder="请输入登陆密码或ssh秘钥" ></el-input>
      </el-form-item>
       </el-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
    createK8sNodes,
    deleteK8sNodes,
    deleteK8sNodesByIds,
    updateK8sNodes,
    findK8sNodes,
    getK8sNodesList
} from "@/api/k8sNodes";  //  此处请自行替换地址
import { formatTimeToStr } from "@/utils/date";
import infoList from "@/mixins/infoList";
export default {
  name: "K8sNodes",
  mixins: [infoList],
  data() {
    return {
      listApi: getK8sNodesList,
      dialogFormVisible: false,
      visible: false,
      type: "",
      deleteVisible: false,
      multipleSelection: [],formData: {
            name:"",
            label:"",
            roles:"",
            createTime:new Date(),
            version:"",
            
      }
    };
  },
  filters: {
    formatDate: function(time) {
      if (time != null && time != "") {
        var date = new Date(time);
        return formatTimeToStr(date, "yyyy-MM-dd hh:mm:ss");
      } else {
        return "";
      }
    },
    formatBoolean: function(bool) {
      if (bool != null) {
        return bool ? "是" :"否";
      } else {
        return "";
      }
    }
  },
  methods: {
      //条件搜索前端看此方法
      onSubmit() {
        this.page = 1
        this.pageSize = 10          
        this.getTableData()
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
      },
      async onDelete() {
        const ids = []
        if(this.multipleSelection.length == 0){
          this.$message({
            type: 'warning',
            message: '请选择要删除的数据'
          })
          return
        }
        this.multipleSelection &&
          this.multipleSelection.map(item => {
            ids.push(item.ID)
          })
        const res = await deleteK8sNodesByIds({ ids })
        if (res.code == 0) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.deleteVisible = false
          this.getTableData()
        }
      },
    async updateK8sNodes(row) {
      const res = await findK8sNodes({ ID: row.ID });
      this.type = "update";
      if (res.code == 0) {
        this.formData = res.data.rek8sNodes;
        this.dialogFormVisible = true;
      }
    },
    closeDialog() {
      this.dialogFormVisible = false;
      this.formData = {
          name:"",
          label:"",
          roles:"",
          createTime:new Date(),
          version:"",
          
      };
    },
    async deleteK8sNodes(row) {
      this.visible = false;
      const res = await deleteK8sNodes({ ID: row.ID });
      if (res.code == 0) {
        this.$message({
          type: "success",
          message: "删除成功"
        });
        this.getTableData();
      }
    },
    async enterDialog() {
      let res;
      switch (this.type) {
        case "create":
          res = await createK8sNodes(this.formData);
          break;
        case "update":
          res = await updateK8sNodes(this.formData);
          break;
        default:
          res = await createK8sNodes(this.formData);
          break;
      }
      if (res.code == 0) {
        this.$message({
          type:"success",
          message:"创建/更改成功"
        })
        this.closeDialog();
        this.getTableData();
      }
    },
    openDialog() {
      this.type = "create";
      this.dialogFormVisible = true;
    }
  },
  async created() {
    await this.getTableData();
  
}
};
</script>

<style lang="scss" scoped>
.table-box /deep/ .cell{
   text-align: center;
}
</style>