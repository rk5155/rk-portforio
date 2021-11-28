<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  name: 'chart',
  data () {
    return {
      data: {
        labels: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Vue.js', 'Ruby'],
        datasets: [
          {
            label: '',
            data: [95, 90, 80, 80, 75, 60],
            backgroundColor: [
              '#FA5858',
              '#F781F3',
              '#F4FA58',
              '#58FAAC',
              '#AC58FA',
              '#FF8000'
            ]
          }
        ]
      },
      options: {                             //◆オプション
            responsive: true,                  //グラフ自動設定
            legend: {                          //凡例設定
                display: false                 //表示設定
           },
           tooltips: {             //hover 時の文字を非表示
            enabled: false
           },
            title: {                           //タイトル設定
                display: true,                 //表示設定
                fontSize: 30,                  //フォントサイズ
                text: ''                //ラベル
            },
            scales: {                          //軸設定
                yAxes: [{                      //y軸設定
                    display: true,             //表示設定
                    scaleLabel: {              //軸ラベル設定
                       display: true,          //表示設定
                       labelString: '',  //ラベル
                       fontSize: 30               //フォントサイズ
                    },
                    ticks: {                      //最大値最小値設定
                        min: 0,                   //最小値
                        max: 100,                  //最大値
                        fontSize: 30,             //フォントサイズ
                        stepSize: 25               //軸間隔
                    },
                }],
                xAxes: [{                         //x軸設定
                    display: true,                //表示設定
                    barPercentage: 1.4,           //棒グラフ幅
                    categoryPercentage: 0.4,      //棒グラフ幅
                    scaleLabel: {                 //軸ラベル設定
                       display: true,             //表示設定
                       labelString: '',  //ラベル
                       fontSize: 30               //フォントサイズ
                    },
                    ticks: {
                        fontSize: 30             //フォントサイズ
                    },
                    gridLines: {
                      display: false
                    }
                }],
            },
            layout: {                             //レイアウト
                padding: {                          //余白設定
                    left: 10,
                    right: 10,
                    top: 0,
                    bottom: 0
                }
            }
        }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

<style scoped>
#bar-chart {
    width: 980px!important;
    height: 800px!important;
    margin: 0 auto;
    padding: 0;
}
@media screen and (max-width: 580px) {
  #bar-chart {
    width: 90%!important;
    height: auto!important;
    margin: 0;
  }

}
</style>