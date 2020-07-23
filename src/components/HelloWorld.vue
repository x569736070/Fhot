<template>
      <div>
          <div id="main"></div>
      </div>
</template>
<script>
  import json from '../assets/json'
  import 'echarts/extension/bmap/bmap'
  import $echarts from 'echarts'
  import bff from '../components/Bdff'
  export default {
  components:{
    bff
  },
  data () {
    return {
      json:json,
    }
  },
  mounted() {
    var myChart = $echarts.init(document.getElementById("main"));
      var points = [].concat.apply([], this.json.map(function (track) {
        return track.map(function (seg) {
          return seg.coord.concat([1]);
        });
      }));
      myChart.setOption({
        animation: false,
        bmap: {
          center: [120.13066322374, 30.240018034923],
          zoom: 14,
          roam: true
        },
        visualMap: {
          show: false,
          top: 'top',
          min: 0,
          max: 5,
          seriesIndex: 0,
          calculable: true,
          inRange: {
            color: ['blue', 'blue', 'green', 'yellow', 'red']
          }
        },
        series: [{
          type: 'heatmap',
          coordinateSystem: 'bmap',
          data: points,
          pointSize: 5,
          blurSize: 6
        }]
      });
      // 添加百度地图插件
      var bmap = myChart.getModel().getComponent('bmap').getMap();
      bmap.addControl(new BMap.MapTypeControl());
  }
}
</script>

<style scoped>

</style>
