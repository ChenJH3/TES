$(function () {
    echartsDeviceStatus();
    echarts_1();
    //     echarts_2();
    echarts_4();
    risk1();
    risk2();
    risk3();
    // echarts_32();
    //  echarts_33();
    // echarts_5();
    // echarts_6();

    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [
                {
                    type: 'bar',
                    data: [20, 30, 32, 19, 15, 10, 26, 23],
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color: '#2f89cf',
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    }
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#dddc6b'
                    }
                }
            },
            legend: {
                top: '0%',
                data: ['2018', '2019', '2020'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            grid: {
                left: '10',
                top: '30',
                right: '10',
                bottom: '10',
                containLabel: true
            },

            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }

                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

            }, {

                axisPointer: { show: false },
                axisLine: { show: false },
                position: 'bottom',
                offset: 20,
            }],

            yAxis: [{
                type: 'value',
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },

                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            toolbox: {
                feature: {
                    magicType: {
                        title: "22",
                        show: true,
                        type: 'line',
                    }
                },
            },
            series: [
                {
                    name: '2019',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#0184d5',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(1, 132, 213, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(1, 132, 213, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#0184d5',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [23, 4, 3, 4, 3, 4, 3, 21, 2, 4, 2, 4, 3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4]

                },
                {
                    name: '2018',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: '#00d887',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 216, 135, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0, 216, 135, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00d887',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]

                },

            ]

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        var dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                //shadowBlur: 40,
                //shadowColor: 'rgba(40, 40, 40, 1)',
            }
        };
        var placeHolderStyle = {
            normal: {
                color: 'rgba(255,255,255,.05)',
                label: { show: false, },
                labelLine: { show: false }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        option = {
            color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
            tooltip: {
                show: true,
                formatter: "{a} : {c} "
            },
            legend: {
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 12,
                bottom: '3%',

                data: ['浙江', '上海', '广东', '北京', '深圳'],
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
            },

            series: [
                {
                    name: '浙江',
                    type: 'pie',
                    clockWise: false,
                    center: ['50%', '42%'],
                    radius: ['59%', '70%'],
                    itemStyle: dataStyle,
                    hoverAnimation: false,
                    data: [{
                        value: 80,
                        name: '01'
                    }, {
                        value: 20,
                        name: 'invisible',
                        tooltip: { show: false },
                        itemStyle: placeHolderStyle
                    }]
                },
                {
                    name: '上海',
                    type: 'pie',
                    clockWise: false,
                    center: ['50%', '42%'],
                    radius: ['49%', '60%'],
                    itemStyle: dataStyle,
                    hoverAnimation: false,
                    data: [{
                        value: 70,
                        name: '02'
                    }, {
                        value: 30,
                        name: 'invisible',
                        tooltip: { show: false },
                        itemStyle: placeHolderStyle
                    }]
                },
                {
                    name: '广东',
                    type: 'pie',
                    clockWise: false,
                    hoverAnimation: false,
                    center: ['50%', '42%'],
                    radius: ['39%', '50%'],
                    itemStyle: dataStyle,
                    data: [{
                        value: 65,
                        name: '03'
                    }, {
                        value: 35,
                        name: 'invisible',
                        tooltip: { show: false },
                        itemStyle: placeHolderStyle
                    }]
                },
                {
                    name: '北京',
                    type: 'pie',
                    clockWise: false,
                    hoverAnimation: false,
                    center: ['50%', '42%'],
                    radius: ['29%', '40%'],
                    itemStyle: dataStyle,
                    data: [{
                        value: 60,
                        name: '04'
                    }, {
                        value: 40,
                        name: 'invisible',
                        tooltip: { show: false },
                        itemStyle: placeHolderStyle
                    }]
                },
                {
                    name: '深圳',
                    type: 'pie',
                    clockWise: false,
                    hoverAnimation: false,
                    center: ['50%', '42%'],
                    radius: ['20%', '30%'],
                    itemStyle: dataStyle,
                    data: [{
                        value: 50,
                        name: '05'
                    }, {
                        value: 50,
                        name: 'invisible',
                        tooltip: { show: false },
                        itemStyle: placeHolderStyle
                    }]
                },]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echartsDeviceStatus() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('deviceStaus'));
        option = {
            title: [{
                show: false,
                text: '设备状态',
                left: 'left',
                top: '1',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }
            }],
            tooltip: {
                showtip: true,
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                right: '0%',
                top: '15%',
                orient: 'vertical',
                itemWidth: 10,
                itemHeight: 10,
                data: ['在测', '空闲', '故障'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '设备状态',
                    type: 'pie',
                    selectedMode: 'single',
                    center: ['50%', '45%'],
                    radius: ['25%', '75%'],
                    color: ['#86c8ab', '#066eab', '#ff0000'],
                    label: { show: false },
                    data: [
                        { value: 26189, name: '在测' },
                        { value: 2410, name: '空闲' },
                        { value: 612, name: '故障' },
                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
        option = {

            title: [{
                text: '职业分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['电子商务', '教育', 'IT/互联网', '金融', '学生', '其他'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '年龄分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 5, name: '电子商务' },
                        { value: 1, name: '教育' },
                        { value: 6, name: 'IT/互联网' },
                        { value: 2, name: '金融' },
                        { value: 1, name: '学生' },
                        { value: 1, name: '其他' },
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
        option = {
            title: [{
                text: '兴趣分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['汽车', '旅游', '财经', '教育', '软件', '其他'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '兴趣分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 2, name: '汽车' },
                        { value: 3, name: '旅游' },
                        { value: 1, name: '财经' },
                        { value: 4, name: '教育' },
                        { value: 8, name: '软件' },
                        { value: 1, name: '其他' },
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function risk1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('risk1'));
        var v2 = 23//一级风险
        option = {
            series: [{
                type: 'pie',
                radius: ['70%', '80%'],
                color: '#ff0000',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '一级风险',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    name: '一级风险',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
        myChart.on('click', function (params) {
            console.log(params);
            alert("一级风险 点击事件触发")
        });
    }
    function risk2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('risk2'));
        var v1 = 56//二级风险
        option = {
            series: [{
                type: 'pie',
                radius: ['70%', '80%'],
                color: '#ffff00',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '二级风险',
                    label: {
                        normal: {
                            formatter: v1 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    name: '二级风险',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
        myChart.on('click', function (params) {
            console.log(params);
            alert("二级风险 点击事件触发")
        });
    }
    function risk3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('risk3'));
        var v1 = 223//女消费
        option = {
            series: [{
                type: 'pie',
                radius: ['70%', '80%'],
                color: '#1E90FF',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '三级风险',
                    label: {
                        normal: {
                            formatter: v1 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    name: '三级风险',
                    label: {
                        normal: {
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
        myChart.on('click', function (params) {
            console.log(params);
            alert("三级风险 点击事件触发")
        });
    }
    // 表单滚动效果
    $(document).ready(function () {
        var html = $(".wrap ul").html()
        $(".wrap ul").append(html)
        var ls = $(".wrap li").length / 2 + 1
        i = 0
        ref = setInterval(function () {
            i++
            if (i == ls) {
                i = 1
                $(".wrap ul").css({ marginTop: 0 })
                $(".wrap ul").animate({ marginTop: -'.52' * i + 'rem' }, 1000)
            }
            $(".wrap ul").animate({ marginTop: -'.52' * i + 'rem' }, 1000)

        }, 2400);
        var html2 = $(".adduser ul").html()
        $(".adduser ul").append(html2)
        var ls2 = $(".adduser li").length / 2 + 1
        a = 0
        ref = setInterval(function () {
            a++
            if (a == ls2) {
                a = 1
                $(".adduser ul").css({ marginTop: 0 })
                $(".adduser ul").animate({ marginTop: -'.5' * a + 'rem' }, 800)
            }
            $(".adduser ul").animate({ marginTop: -'.5' * a + 'rem' }, 800)
        }, 4300);
    })
})