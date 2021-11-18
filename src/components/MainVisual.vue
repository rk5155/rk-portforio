<template>
    <kinesis-container id="container">
        
            <div id="main-visual">
                <kinesis-element class="blue" :strength="10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#5882FA"/>
                        </svg>
                </kinesis-element>
                
                <div class="main-visual__text">
                    <h1>Ryu-ki Production</h1><br>
                    <p>ワンランク上のWEB制作を。</p>
                </div>

                <kinesis-element class="red" :strength="-10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#F78181"/>
                        </svg>
                </kinesis-element>

                <kinesis-element class="pink" :strength="10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#F6CEEC"/>
                        </svg>
                </kinesis-element>

                <kinesis-element class="yellow" :strength="-10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#F2F5A9"/>
                        </svg>
                </kinesis-element>

                <kinesis-element class="green" :strength="10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#CEF6D8"/>
                        </svg>
                </kinesis-element>

                <kinesis-element class="perple" :strength="10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#D8CEF6"/>
                        </svg>
                </kinesis-element>

                <kinesis-element class="orang" :strength="-10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#F5D0A9"/>
                        </svg>
                </kinesis-element>

                <kinesis-element class="mizuiro" :strength="10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#CEF6F5"/>
                        </svg>
                </kinesis-element>






                <kinesis-element class="red2" :strength="-10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#FA5858"/>
                        </svg>
                </kinesis-element>

                <kinesis-element class="pink2" :strength="10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#F781F3"/>
                        </svg>
                </kinesis-element>

                <kinesis-element class="yellow2" :strength="10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#F4FA58"/>
                        </svg>
                </kinesis-element>

                <kinesis-element class="green2" :strength="-10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#58FAAC"/>
                        </svg>
                </kinesis-element>

                <kinesis-element class="perple2" :strength="10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#AC58FA"/>
                        </svg>
                </kinesis-element>

                <kinesis-element class="orang2" :strength="-10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#FF8000"/>
                        </svg>
                </kinesis-element>

                <kinesis-element class="mizuiro2" :strength="10" type="rotate" transform-origin="50% 100%" axis="x">
                        <svg width="300" height="300">
                                <circle cx="80" cy="80" r="80" fill="#2EFEF7"/>
                        </svg>
                </kinesis-element>

                

                
            </div>
        
    </kinesis-container>
</template>

<style scoped>
#main-visual {
    height: 986px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
}
.main-visual__text {
    z-index: 10;
    font-weight: bold;
}
#main-visual .blue {
    position: absolute;
    top: 20px;
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
    top: 700px;
    left: 37vw;
}
#main-visual .perple {
    position: absolute;
    top: 800px;
    left: 300px;
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
    top: 700px;
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
    top: 800px;
    right: 300px;
}
#main-visual .orang2 {
    position: absolute;
    top: 100px;
    right: 1vw;
}
#main-visual .mizuiro2 {
    position: absolute;
    top: 150px;
    right: 300px;
}

</style>
