<template>
    <kinesis-container id="container">
            <div id="main-visual">
                <div class="main-visual__text vov zoom-in">
                    <h1>Ryu-ki Production</h1><br>
                    <p>ワンランク上のWEB制作を。</p>
                    <router-link class="main-visual__btn" to="/contact" active-class="link-active" exact>お問い合わせ</router-link>
                </div>

                <div v-if="$mq === 'lg'">
                    <kinesis-element  v-for="ball in balls" :key="ball.class" :class="ball.class" :strength="ball.strength" type="rotate" transform-origin="50% 100%" axis="x">
                         <svg :class="ball.classSvg" width="150" height="150">
                                <circle :cx="ball.size" :cy="ball.size" :r="ball.size" :fill="ball.fill"/>
                         </svg>
                    </kinesis-element>
                </div>

                <div v-else event="scroll">
                    <kinesis-element v-for="ball in balls" :key="ball.class" :class="ball.class" :strength="ball.strength" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg :class="ball.classSvg" width="100" height="100">
                                <circle :cx="ball.size - 30" :cy="ball.size - 30" :r="ball.size- 30" :fill="ball.fill"/>
                        </svg>
                    </kinesis-element>
                </div>
                
                        
               
            </div>
    </kinesis-container>
</template>

<script>
export default {
  data () {
    return {
      balls: [
        {
          class: 'blue',
          classSvg: 'vov roll-in-right slow',
          size: 70,
          fill: '#5882FA',
          strength: 10
        },
        {
          class: 'red',
          classSvg: 'vov roll-in-left slow',
          size: 60,
          fill: '#F78181',
          strength: -10
        },
        {
          class: 'pink',
          classSvg: 'vov roll-in-right',
          size: 50,
          fill: '#F6CEEC',
          strength: 10
        },
        {
          class: 'yellow',
          classSvg: 'vov roll-in-left slower',
          size: 70,
          fill: '#F2F5A9',
          strength: -10
        },
        {
          class: 'green',
          classSvg: 'vov roll-in-right slow',
          size: 60,
          fill: '#CEF6D8',
          strength: 10
        },
        {
          class: 'perple',
          classSvg: 'vov roll-in-left slow',
          size: 50,
          fill: '#D8CEF6',
          strength: -10
        },
        {
          class: 'orang',
          classSvg: 'vov roll-in-right',
          size: 70,
          fill: '#F5D0A9',
          strength: 10
        },
        {
          class: 'mizuiro',
          classSvg: 'vov roll-in-left slow',
          size: 60,
          fill: '#CEF6F5',
          strength: -10
        },
        {
          class: 'red2',
          classSvg: 'vov roll-in-right slow',
          size: 50,
          fill: '#FA5858',
          strength: 10
        },
        {
          class: 'pink2',
          classSvg: 'vov roll-in-left slower',
          size: 70,
          fill: '#F781F3',
          strength: -10
        },
        {
          class: 'yellow2',
          classSvg: 'vov roll-in-right',
          size: 60,
          fill: '#F4FA58',
          strength: 10
        },
        {
          class: 'green2',
          classSvg: 'vov roll-in-left',
          size: 50,
          fill: '#58FAAC',
          strength: -10
        },
        {
          class: 'perple2',
          classSvg: 'vov roll-in-right slow',
          size: 70,
          fill: '#AC58FA',
          strength: 10
        },
        {
          class: 'orang2',
          classSvg: 'vov roll-in-left slowest',
          size: 60,
          fill: '#FF8000',
          strength: 10
        },
        {
          class: 'mizuiro2',
          classSvg: 'vov roll-in-right slower',
          size: 50,
          fill: '#2EFEF7',
          strength: 10
        }
      ]
    }
  }
}
</script>

<style scoped>
#main-visual {
    width: 100%;
    min-height: 100vh;
    /* header の高さ分 */
    margin-top: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    -webkit-animation: fadeIn 3.5s ease 0s 1 normal;
    animation: fadeIn 1s ease 0s 1 normal;
}
@keyframes fadeIn {
    0% {
      opacity: 0
    }

    100% {
      opacity: 1
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0
    }

    100% {
      opacity: 1
    }
  }
.main-visual__text {
    z-index: 10;
    font-weight: bold;
}
#main-visual .blue {
    position: absolute;
    top: 20px;
    right: 7VW;
}
#main-visual .red {
    position: absolute;
    top: 400px;
    left: 10vw;
}
#main-visual .yellow {
    position: absolute;
    top: 300px;
    left: 27vw;
}
#main-visual .pink {
    position: absolute;
    top: 500px;
    left: 40vw;
}
#main-visual .green {
    position: absolute;
    bottom: 50px;
    left: 37vw;
}
#main-visual .perple {
    position: absolute;
    bottom: 60px;
    right: 10vw;
}
#main-visual .orang {
    position: absolute;
    top: 100px;
    left: 100px;
}
#main-visual .mizuiro {
    position: absolute;
    top: 150px;
    left: 15vw;
}


#main-visual .red2 {
    position: absolute;
    top: 400px;
    right: 100px;
}
#main-visual .yellow2 {
    position: absolute;
    bottom: 4vw;
    right: 2vw;
}
#main-visual .pink2 {
    position: absolute;
    top: 450px;
    right: 23vw;
}
#main-visual .green2 {
    position: absolute;
    top: 200px;
    right: 700px;
}
#main-visual .perple2 {
    position: absolute;
    bottom: 10px;
    right: 300px;
}
#main-visual .orang2 {
    position: absolute;
    top: 100px;
    right: 10vw;
}
#main-visual .mizuiro2 {
    position: absolute;
    top: 150px;
    left: 1vw;
}
.main-visual__btn {
  display: inline-block;
  border: 1px solid #3B4452;
  color: #3B4452;
  padding: 10px 30px;
  margin-top: 20px;
  border-radius: 10px;
}
.main-visual__btn:hover {
    background-color: #3B4452;
    color: #ffffff;
    text-decoration: none;
}

</style>
