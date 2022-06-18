<template>
  <div class="travel-map">
    <div id="main"></div>
  </div>
</template>
<script>
import geoJSON from "@/assets/img/data.json";
import { getTravel } from "../../api/api";
export default {
  data() {
    return {};
  },
  created() {
    getTravel().then((res) => {
      if (res.data.status === 200) {
        let { points, linesData } = res.data.data;
        this.draw(points, linesData);
      }
    });
  },
  methods: {
    draw(points, linesData) {
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
            itemStyle: {
              normal: {
                backgroundColor: "rgb(147, 235, 248)",
                borderWidth: 1,
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgb(31, 54, 150)", // 0%处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgb(89, 128, 142)", // 100%处的颜色
                    },
                  ],
                  globalCoord: true,
                },
              },
              emphasis: {
                areaColor: "rgb(46, 229, 206)",
                borderWidth: 0.1,
              },
            },
          },
          // 关于地图中散点图的配置
          {
            type: "effectScatter", //散点图
            coordinateSystem: "geo",
            showEffectOn: "render",
            symbolSize: 10, //散点大小
            zlevel: 1,
            data: points,
            rippleEffect: {
              // 涟漪特效相关配置
              period: 15,
              scale: 4,
              brushType: "fill",
            },
          },
          //   关于地图中线路动画效果设置
          {
            type: "lines",
            zlevel: 2, //层级关系
            effect: {
              show: true,
              period: 4, //动画周期
              symbol: "arrow",
              symbolSize: 7,
              trailLength: 0.4, //箭头拖尾的效果
            },
            lineStyle: {
              normal: {
                color: "#1DE9B6",
                width: 3, //线条的一个 宽度
                opacity: 0.1,
                curveness: 0.3, //线的弯曲程度
              },
            },
            data: linesData,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style lang="scss">
.travel-map {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>
