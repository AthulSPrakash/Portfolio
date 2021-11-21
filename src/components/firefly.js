import { useEffect } from "react"
import $ from 'jquery'
import jQuery from "jquery"

export default function Firefly(){

    useEffect(()=>{
        (function ($) { 
            var defaults = {
                total: 100, 
                ofTop: 0, 
                ofLeft: 0, 
                on: 'document.body',
                twinkle: 0.2, 
                minPixel: 1, 
                maxPixel: 3, 
                color: '#85edee', 
                namespace: 'jqueryFireFly', 
                zIndex: Math.ceil(Math.random() * 20) - 1, 
                borderRadius: '50%', 
                _paused: false
            };
            $.firefly = function (settings) {
                $.firefly.settings = $.extend({}, defaults, settings)
                $.firefly.eleHeight = $($.firefly.settings.on).height() 
                $.firefly.eleWidth = $($.firefly.settings.on).width()
        
                if ($.firefly.settings.on !== 'document.body') {
                    var off = $($.firefly.settings.on).offset()
                    $.firefly.offsetTop = off.top 
                    $.firefly.offsetLeft = off.left 
                    $.firefly.eleHeight = $($.firefly.settings.on).height()
                    $.firefly.eleWidth = $($.firefly.settings.on).width()
                } else {
                    $.firefly.offsetTop = 0 
                    $.firefly.offsetLeft = 0 
                    $.firefly.eleHeight = $(document.body).height()
                    $.firefly.eleWidth = $(document.body).width() 
                }
        
                for (let i = 0; i < $.firefly.settings.total; i++) { 
                    var randomPixel = $.firefly.randomPixel($.firefly.settings.minPixel, $.firefly.settings.maxPixel)
                    var sp = $.firefly.create(randomPixel) 
                    $.firefly.fly(sp)
                }
        
                $.firefly.sparks = $($.firefly.settings.on).children('.' + $.firefly.settings.namespace) 
        
                return this
            }
        
            $.firefly.create = function (pixelSize) {
                let spark = $('<div>').hide()
                spark.addClass($.firefly.settings.namespace)
                $.firefly.settings._onSparkID++
        
                if ($.firefly.settings.on === 'document.body') {
                    $(document.body).append(spark)
                } else {
                    $($.firefly.settings.on).append(spark)
                }
        
                return spark.css({
                    'position': 'absolute', 
                    'width': pixelSize, 
                    'height': pixelSize, 
                    'background-color': $.firefly.settings.color, 
                    'z-index': $.firefly.settings.zIndex, 
                    'border-radius': $.firefly.settings.borderRadius, 
                    'top': $.firefly.offsetTop + $.firefly.random(($.firefly.eleHeight - 50)), 
                    'left': $.firefly.offsetLeft + $.firefly.random(($.firefly.eleWidth - 50)), 
                    'pointer-events': 'none' 
                }).show()
            }
        
            
            $.firefly.fly = function (sp) {
                $(sp).animate({
                    top: $.firefly.offsetTop + $.firefly.random(($.firefly.eleHeight - 50)), 
                    left: $.firefly.offsetLeft + $.firefly.random(($.firefly.eleWidth - 50)), 
                    opacity: $.firefly.opacity($.firefly.settings.twinkle) 
                }, {
                    duration: (($.firefly.random(10) + 5) * 2000),
                    done: function () {
                        if (!$.firefly.settings._paused) {
                            $.firefly.fly(sp)
                        }
                    }
                })
            }
        
            $.firefly.randomPixel = function (min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
        
            $.firefly.random = function (max) {
                return Math.ceil(Math.random() * max) - 1
            }
        
            $.firefly.opacity = function (min) {
                let op = Math.random()
                if (op < min) {
                    return 0
                } else {
                    return 1
                }
            }
        })(jQuery)
        $.firefly({
                color: '#85edee',
                minPixel: 1,
                maxPixel: 3,
                total : 100,
                on: '#firefly'
        })
    })

    return(
        <div id="firefly"></div>
    )
}