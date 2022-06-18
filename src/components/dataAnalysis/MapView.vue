<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>
<script>
import geoJSON from "@/assets/img/data.json";
export default {
  data() {
    return {};
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("main"));
    this.$echarts.registerMap("china", geoJSON); //注可用的地图，必须包括map图标和geo组件才能使用
    let option = {
      backgroundColor: "rgb(121, 145, 209)",
      geo: {
        map: "china",
        aspectScale: 0.75, //scale地图长宽比
        zoom: 1.1,
        itemStyle: {
          normal: {
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "#09132c", // 0%处的颜色
                },
                {
                  offset: 1,
                  color: "#274d68", // 100%处的颜色
                },
              ],
              globalCoord: true,
            },
            shadowColor: "rgb(58, 115, 192)",
            shadowOffsetX: 10,
            shadowOffsetY: 11,
          },
        },
        regions: [
          {
            name: "南海诸岛",
            itemStyle: {
              opacity: 0,
            },
          },
        ],
      },
      series: [
        {
          //配置地图相关的参数，绘制地图，这个对象是关于地图图表的相关配置
          type: "map",
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "#1DE9B6",
              },
            },
            emphasis: {
              textStyle: {
                color: "rgb(183, 185, 14)",
              },
            },
          },
          zoom: 1.1,
          map: "china",
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>
<style lang="scss">
.map-view {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>
