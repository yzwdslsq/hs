<template>
  <div>

    <h1>业务查询</h1>
    <h-form
      ref="formItem1"
      :model="formItem1"
      :compareModel="formItem2"
      :label-width="80"
      errorFocus
      cols="12"
    >

      <!-- 客户账号输入框 -->

      <h-form-item
        label="客户账号"
        prop="clientID"
        required
        cols="12"
      >
        <h-input
          v-model="formItem1.clientID"
          placeholder="请输入"
        ></h-input>
      </h-form-item>

      <h2>筛选</h2>

      <!-- 业务类型选择框 -->
      <h-form-item
        label="业务类型"
        prop="businessType"
        cols="6"
      >
        <h-select
          v-model="formItem1.businessType"
          filterable
        >
          <h-option value="申购">产品申购</h-option>
          <h-option value="赎回">产品赎回</h-option>
        </h-select>
      </h-form-item>

      <!-- 客户类型选择框 -->
      <h-form-item
        label="客户类型"
        prop="clientType"
        cols="6"
      >
        <h-select
          v-model="formItem1.clientType"
          filterable
        >
          <h-option value="个体户">个体户</h-option>
          <h-option value="集体户">集体户</h-option>
        </h-select>
      </h-form-item>

      <!-- 产品名称输入框 -->
      <h-form-item
        label="产品名称"
        prop="productName"
        cols="6"
      >
        <h-input
          v-model="formItem1.productName"
          placeholder="请输入"
        ></h-input>
      </h-form-item>

      <!-- 银行名称输入框 -->
      <h-form-item
        label="银行名称"
        prop="bankName"
        cols="6"
      >
        <h-input
          v-model="formItem1.bankName"
          placeholder="请输入"
        ></h-input>
      </h-form-item>

      <!-- 日期选择框 -->

      <h-form-item
        label="日期"
        prop="data"
        cols="7"
      >
        <h-fast-date
          type="daterange"
          placement="bottom-end"
          placeholder="选择日期"
          v-model="formItem1.data"
        ></h-fast-date>
      </h-form-item>

      <h-form-item cols="5">
        <h-button
          type="primary"
          @click="handleSubmit('formItem1')"
        >查询</h-button>
        <h-button
          type="ghost"
          style="margin-left: 8px;"
          @click="handleReset('formItem1')"
        >重置</h-button>
      </h-form-item>

    </h-form>

    <!-- 查询内容 -->
    <div>
      <h-table
        height="200"
        border
        :columns="columns2"
        :data="data4"
        stripe
      ></h-table>
    </div>
    <button @click="btnTest">test</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model1: "",
      changeform: false,
      formItem1: {
        clientID: "",
        clientType: "",
        businessType: "",
        bankName: "",
        productName: "",
        data: ""
      },
      formItem2: {
        clientID: "",
        clientType: "",
        businessType: "",
        bankName: "",
        productName: "",
        data: ""
      },
      data2: [
        {
          value: "purchase",
          label: "产品申购",
        },
        {
          value: "redeem",
          label: "产品赎回",

        },
      ],
      data3: [
        {
          value: "getihu",
          label: "个体户",
        },
        {
          value: "jitihu",
          label: "集体户",

        },
      ],

      regRule: [
        { test: /^[a-zA-Z]+$/, message: "不全是字母", trigger: "blur" },
      ],

      columns2: [
        {
          title: "产品代码",
          key: "productNum",
          // width: 100,
          // fixed: "left",
        },
        {
          title: "产品名称",
          key: "productName",
          // width: 200,
        },
        {
          title: "产品类型",
          key: "productType",
          // width: 100,
        },
        {
          title: "产品风险等级",
          key: "productRisk",
          // width: 100,
        },
        {
          title: "产品状态",
          key: "productState",
          width: 100,
        },
        {
          title: "产品当日净值",
          key: "netTotalWorth",
          // width: 100,
        },
        {
          title: "日增长率",
          key: "dailyGrowthRate",
          // width: 100,
        },
        {
          title: "操作",
          key: "action",
          // fixed: "right",
          // width: 120,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small",
                  },
                },
                "撤单"
              )

            ]);
          },
        },
      ],
      data4: [
        {
          productNum: "00000",
          productName: 'xxxxx',
          productType: "xxxxx",
          productRisk: "xxxxx",
          productState: "xxxxx",
          netTotalWorth: 1.0000,
          dailyGrowthRate: '0.00%',
        }
      ],

    };
  },
  methods: {
    changeform1 () {
      this.changeform = !this.changeform;
    },
    handleSubmit (name) {
      let _this = this;
      this.$refs[name].validate((valid) => {
        if (valid) {
          _this.$hMessage.success("提交成功!");


          // 配置axios
          axios.defaults.baseURL = 'http://127.0.0.1:8000';
          axios({
            //请求方法
            method: 'POST',
            //url
            url: '/axios-server',
            //url参数
            params: {
              // vip: 10, level: 30
            },
            //头信息
            headers: {
              // a: 100, b: 200
            },
            //请求体参数
            data: {
              bankName: this.formItem1.bankName,
              businessType: this.formItem1.bankName,
              clientID: this.formItem1.clientID,
              clientType: this.formItem1.clientID,
              startData: this.formItem1.data[0],
              endData: this.formItem1.data[1]

            }
          }).then(response => {
            // console.log(response);
            // //响应状态码
            // console.log(response.status);
            // //响应状态字符串
            // console.log(response.statusText);
            // //响应头信息
            // console.log(response.headers);
            // //响应体
            // console.log(response.data);
            this.data4.push({
              productNum: response.productNum,
              productName: response.productName,
              productType: response.productType,
              productRisk: response.productRisk,
              productState: response.productState,
              netTotalWorth: response.netTotalWorth,
              dailyGrowthRate: response.dailyGrowthRate,
            })
          });


        } else {
          _this.$hMessage.error("表单验证失败!");
        }
      });
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    },
  }
}
</script>
