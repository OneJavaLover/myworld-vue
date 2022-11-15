<template>
  <div>
    <div id="he-plugin-standard"></div>
  </div>
</template>

<script>
export default {
  name:"WeatherFrame",
  created() {
    window.WIDGET = {
      "CONFIG": {
        "layout": "2",
        "width": 250,
        "height": 450,
        "background": "1",
        "language":"zh",
        "dataColor": "FFFFFF",
        "borderRadius": "10",
        "key": "d0d3b2104f5f479fbac093b261b5c29b"  //这里换成自己的key！
      }
    }
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0';
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}
</script>

<style>

</style>
