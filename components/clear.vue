<template>
  <div>
    <!-- 清算流程 -->
    <h1>清算</h1>
    <h-row>
      <h-col span="16">
        <div id="bcbox">
          <h-steps
            :current="current"
            processIcon="iconfont icon-barrage_fill"
            waitIcon="more"
            finishIcon="android-done icon-android-done"
            style="margin-bottom: 12px;"
            direction="vertical"
          >
            <h-step>
              <h-button
                shape="circle"
                class="btn"
                @on-click="next"
                :type="type[0]"
              >日初始化</h-button>
            </h-step>
            <h-step>
              <h-button
                :type="type[1]"
                shape="circle"
                class="btn"
                @click="next"
              >接收行情
              </h-button>
            </h-step>

            <h-step>
              <h-button
                :type="type[2]"
                shape="circle"
                class="btn"
                @click="next"
              >处理确认数据</h-button>
            </h-step>
            <h-step>
              <h-button
                :type="type[3]"
                shape="circle"
                class="btn"
                @click="next"
              >停止当日交易</h-button>
            </h-step>

            <h-step>
              <h-button
                :type="type[4]"
                shape="circle"
                class="btn"
                @click="next"
              >导出申请数据</h-button>
            </h-step>

            <h-step>
              <h-button
                :type="type[5]"
                shape="circle"
                class="btn"
                @click="next"
              >数据汇总</h-button>
            </h-step>
          </h-steps>

        </div>
      </h-col>

      <!-- 清算日志 -->
      <h-col span="8">
        <div
          id="box2"
          :class="{active:!totalNum}"
        >
          <h-row :gutter="16">
            <h-col span="5">
              <p>清算日志</p>
            </h-col>
            <h-col span="6">2022-07-24</h-col>
            <h-col span="13">
              <h-date-picker
                :value="value2"
                format="yyyy/MM/dd"
                type="daterange"
                placement="bottom-end"
                placeholder="按日期查询日期"
                size="small"
              ></h-date-picker>
            </h-col>
          </h-row>

          <!-- 清算列表 -->
          <div>
            <h-table
              :data="tData"
              :columns="columns"
              style="margin-bottom: 8px;"
            ></h-table>
            <h-page
              :total="totalNum"
              @on-change="dataChange"
              simple
              :page-size="8"
            ></h-page>
          </div>

          <!-- 未清算图片 -->
          <div
            id="box4"
            v-show="!totalNum"
          >
            <h-row>
              <h-col span="24">
                <img
                  id="img1"
                  src="../assets/404.png"
                  alt="#"
                >
                <p>今日还未做清单</p>
              </h-col>
            </h-row>

          </div>

        </div>
      </h-col>
    </h-row>

  </div>
</template>

<script>
// 清算列表
var data = [
  {
    date: "2022-07-15",
    infor: '已清算'
  },
  {
    date: "2022-07-16",
    infor: '已清算'
  },
  {

    date: "2022-07-17",
    infor: '已清算'
  },
  {
    date: "2022-07-18",
    infor: '已清算'
  },
  {
    date: "2022-07-19",
    infor: '已清算'
  },
  {
    date: "2022-07-20",
    infor: '已清算'
  },
  {
    date: "2022-07-21",
    infor: '已清算'
  },

];
var columns = [
  {
    title: "时间",
    key: "date",
  }, {
    title: "清算详情",
    key: "infor",
  },

];
export default {
  name: 'clear',
  data () {
    return {
      current: 0,
      value2: ["", ""],
      tData: data.slice(0, 8),
      columns: columns,
      totalNum: data.length,
      type: ['ghost', 'ghost', 'ghost', 'ghost', 'ghost', 'ghost'],
    }
  },
  methods: {
    next () {
      if (this.current < 6) {
        this.current += 1;

        this.type[this.current - 1] = 'success';

      }

    },
    pageChange (index) {
      // console.log(index);
    },
    numChange (value) {
      console.log(value);
    },
    dataChange (i) {
      this.tData = data.slice((i - 1) * 8, i * 8);
    },
  },
}

</script>

<style>
.time {
  font-size: 14px;
  font-weight: bold;
}
.content {
  padding-left: 5px;
}
.progress {
  width: 250px;
}
.btn {
  width: 200px;
}
#bcbox {
  margin-left: 50px;
  width: 250px;
}
#box2 {
  width: 333px;
  height: 380px;
  margin-left: 20px;
  position: relative;
}
.active {
  background-color: rgba(166, 166, 166, 0.078);
}
#box3 {
  position: absolute;
  bottom: 0px;
  width: 310px;
}
#box4 {
  text-align: center;
  /* line-height: 380px; */
  position: absolute;
  height: 155px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#img1 {
  width: 205px;
  height: 118px;
}
</style>