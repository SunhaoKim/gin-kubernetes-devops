<template>
  <div>
    <el-row :gutter="15">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-col :span="9">
          <el-form-item label="集群名称" prop="cluster_name">
            <el-select v-model="formData.cluster_name" placeholder="请选择集群" clearable :style="{width: '100%'}">
              <el-option v-for="(item, index) in cluster_nameOptions" :key="index" :label="item.label"
                :value="item.value" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="15">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        cluster_name: "",
      },
      rules: {
        cluster_name: [{
          required: true,
          message: '请选择集群',
          trigger: 'change'
        }],
      },
      cluster_nameOptions: [{
        "label": "11",
        "value": 11
      }, {
        "label": "22",
        "value": 22
      }],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  }
}

</script>
<style>
</style>
