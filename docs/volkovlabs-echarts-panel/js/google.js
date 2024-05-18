const gmap = {
  gmap: {
    /**
     * Center and Zoom
     */
    center: { lng: -81.76, lat: 27.99 },
    zoom: 4,

    // whether echarts layer should be rendered when the map is moving. `true` by default.
    // if false, it will only be re-rendered after the map `moveend`.
    // It's better to set this option to false if data is large.
    renderOnMoving: true,
  },
  series: [
    {
      type: "scatter",
      coordinateSystem: "gmap",
      // data items [[lng, lat, value], [lng, lat, value], ...]
      data: [[-81.76, 27.99, 100]],
      encode: {
        // encode the third element of data item as the `value` dimension
        value: 2,
        lng: 0,
        lat: 1,
      },
    },
  ],
};

/**
 * Loading
 */
const loading = {
  graphic: {
    elements: [
      {
        type: "group",
        left: "center",
        top: "center",
        children: new Array(7).fill(0).map((val, i) => ({
          type: "rect",
          x: i * 20,
          shape: {
            x: 0,
            y: -40,
            width: 10,
            height: 80,
          },
          style: {
            fill: "#5470c6",
          },
          keyframeAnimation: {
            duration: 1000,
            delay: i * 200,
            loop: true,
            keyframes: [
              {
                percent: 0.5,
                scaleY: 0.3,
                easing: "cubicIn",
              },
              {
                percent: 1,
                scaleY: 1,
                easing: "cubicOut",
              },
            ],
          },
        })),
      },
    ],
  },
};

/**
 * Maps are Ready
 */
window.gmapReady = () => {
  context.grafana.notifySuccess(["Google Maps", "Loaded..."]);
  context.panel.chart.setOption(gmap, (notmerge = true));
};

return typeof google === "object" && typeof google.maps === "object"
  ? gmap
  : loading;
