"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useMemo } from "react";

export type InsightChartVariant = "election" | "media" | "risk";

const baseOptions: Highcharts.Options = {
  accessibility: {
    enabled: false,
  },
  chart: {
    backgroundColor: "#001F5C",
    height: 160,
    margin: [24, 18, 24, 18],
    spacing: [0, 0, 0, 0],
    style: {
      fontFamily: "var(--font-body)",
    },
    animation: {
      duration: 900,
      easing: "easeOutCubic",
    },
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: false,
    backgroundColor: "rgba(255,255,255,0.96)",
    borderColor: "#C9A44B",
    borderRadius: 12,
    padding: 10,
    style: {
      color: "#001F5C",
      fontSize: "12px",
      fontWeight: "600",
    },
  },
  xAxis: {
    visible: false,
  },
  yAxis: {
    visible: false,
    title: {
      text: undefined,
    },
  },
  plotOptions: {
    series: {
      enableMouseTracking: false,
      animation: {
        duration: 1100,
      },
      marker: {
        enabled: false,
      },
      states: {
        hover: {
          enabled: false,
        },
        inactive: {
          opacity: 1,
        },
      },
    },
  },
};

function getOptions(variant: InsightChartVariant): Highcharts.Options {
  if (variant === "election") {
    return {
      ...baseOptions,
      chart: {
        ...baseOptions.chart,
        type: "areaspline",
        backgroundColor: {
          radialGradient: { cx: 0.82, cy: 0.18, r: 0.9 },
          stops: [
            [0, "#174B9F"],
            [0.52, "#001F5C"],
            [1, "#001534"],
          ],
        },
        margin: [14, 16, 18, 16],
      },
      tooltip: {
        ...baseOptions.tooltip,
        pointFormat: "<b>{point.y}%</b> keyword momentum",
      },
      xAxis: {
        visible: false,
        min: 0,
        max: 7,
      },
      yAxis: {
        visible: false,
        min: 0,
        max: 46,
        title: {
          text: undefined,
        },
      },
      plotOptions: {
        ...baseOptions.plotOptions,
        column: {
          animation: {
            duration: 900,
          },
          borderWidth: 0,
          borderRadius: 4,
          pointPadding: 0.18,
          groupPadding: 0.12,
        },
        areaspline: {
          animation: {
            duration: 1300,
          },
          marker: {
            enabled: false,
          },
        },
        scatter: {
          dataLabels: {
            enabled: true,
            crop: false,
            overflow: "allow",
            style: {
              color: "#F8FAFC",
              fontSize: "10px",
              fontWeight: "800",
              textOutline: "none",
            },
            y: -12,
          },
          marker: {
            enabled: true,
            radius: 7,
            lineColor: "rgba(255,255,255,0.8)",
            lineWidth: 1,
            states: {
              hover: {
                radiusPlus: 3,
              },
            },
          },
        },
      },
      series: [
        {
          type: "column",
          name: "Conversation volume",
          data: [8, 11, 10, 15, 21, 18, 26, 34],
          color: "rgba(255,255,255,0.12)",
          enableMouseTracking: false,
        },
        {
          type: "areaspline",
          name: "Keyword momentum",
          data: [12, 16, 15, 24, 31, 28, 35, 38],
          color: "#F2D17A",
          fillColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, "rgba(242,209,122,0.65)"],
              [1, "rgba(201,164,75,0.05)"],
            ],
          },
          lineWidth: 3,
        },
        {
          type: "spline",
          name: "Baseline",
          data: [9, 10, 12, 15, 17, 20, 23, 26],
          color: "rgba(255,255,255,0.65)",
          dashStyle: "ShortDash",
          lineWidth: 2,
        },
        {
          type: "scatter",
          name: "Breakout",
          color: "#F8FAFC",
          data: [
            {
              x: 7,
              y: 38,
              name: "Breakout",
            },
          ],
        },
      ],
    };
  }

  if (variant === "media") {
    return {
      ...baseOptions,
      chart: {
        ...baseOptions.chart,
        type: "spline",
        backgroundColor: {
          radialGradient: { cx: 0.54, cy: 0.42, r: 0.88 },
          stops: [
            [0, "#173A7F"],
            [0.5, "#001F5C"],
            [1, "#001534"],
          ],
        },
        margin: [14, 16, 18, 16],
      },
      tooltip: {
        ...baseOptions.tooltip,
        pointFormat: "<b>{series.name}</b>: {point.y}",
      },
      xAxis: {
        visible: false,
        min: 0,
        max: 7,
      },
      yAxis: {
        visible: false,
        min: 0,
        max: 78,
        title: {
          text: undefined,
        },
      },
      plotOptions: {
        ...baseOptions.plotOptions,
        column: {
          animation: {
            duration: 850,
          },
          borderWidth: 0,
          borderRadius: 5,
          pointPadding: 0.2,
          groupPadding: 0.08,
        },
        spline: {
          animation: {
            duration: 1350,
          },
          marker: {
            enabled: false,
          },
        },
        scatter: {
          animation: {
            duration: 1200,
          },
          dataLabels: {
            enabled: true,
            crop: false,
            overflow: "allow",
            format: "12h Shift",
            style: {
              color: "#F8FAFC",
              fontSize: "10px",
              fontWeight: "800",
              textOutline: "none",
            },
            x: 10,
            y: -10,
          },
          marker: {
            enabled: true,
            radius: 9,
            lineColor: "rgba(255,255,255,0.9)",
            lineWidth: 1,
            symbol: "circle",
            states: {
              hover: {
                radiusPlus: 3,
              },
            },
          },
        },
      },
      series: [
        {
          type: "column",
          name: "Shift window",
          data: [0, 0, 0, 0, 78, 0, 0, 0],
          color: "rgba(201,164,75,0.12)",
          enableMouseTracking: false,
        },
        {
          type: "column",
          name: "Coverage volume",
          data: [10, 12, 14, 18, 26, 32, 36, 40],
          color: "rgba(255,255,255,0.11)",
          enableMouseTracking: false,
        },
        {
          type: "spline",
          name: "Personal issue",
          data: [68, 66, 61, 55, 43, 31, 25, 22],
          color: "#C9A44B",
          lineWidth: 3,
        },
        {
          type: "spline",
          name: "Policy verification",
          data: [12, 14, 18, 28, 42, 58, 64, 71],
          color: "#F8FAFC",
          lineWidth: 3.5,
        },
        {
          type: "scatter",
          name: "Shift glow",
          data: [{ x: 4, y: 43, name: "Shift Window" }],
          color: "rgba(242,209,122,0.24)",
          enableMouseTracking: false,
          dataLabels: {
            enabled: false,
          },
          marker: {
            enabled: true,
            radius: 20,
            lineWidth: 0,
            symbol: "circle",
          },
        },
        {
          type: "scatter",
          name: "Frame shift",
          data: [{ x: 4, y: 43, name: "12h Shift" }],
          color: "#F2D17A",
          marker: {
            enabled: true,
            radius: 9,
            lineColor: "rgba(255,255,255,0.8)",
            lineWidth: 1,
            symbol: "circle",
            states: {
              hover: {
                radiusPlus: 3,
              },
            },
          },
        },
      ],
    };
  }

  return {
    ...baseOptions,
    chart: {
      ...baseOptions.chart,
      type: "scatter",
      backgroundColor: {
        radialGradient: { cx: 0.72, cy: 0.38, r: 0.85 },
        stops: [
          [0, "#123E8A"],
          [0.48, "#001F5C"],
          [1, "#001534"],
        ],
      },
      margin: [16, 16, 18, 16],
    },
    tooltip: {
      ...baseOptions.tooltip,
      pointFormat: "<b>{point.name}</b><br/>Risk weight: {point.z}",
    },
    xAxis: {
      visible: false,
      min: 0,
      max: 100,
    },
    yAxis: {
      visible: false,
      min: 0,
      max: 100,
      title: {
        text: undefined,
      },
    },
    plotOptions: {
      ...baseOptions.plotOptions,
      line: {
        animation: {
          duration: 1350,
        },
        enableMouseTracking: false,
        marker: {
          enabled: false,
        },
      },
      scatter: {
        animation: {
          duration: 1400,
        },
        dataLabels: {
          enabled: true,
          allowOverlap: true,
          crop: false,
          overflow: "allow",
          style: {
            color: "#F8FAFC",
            fontSize: "10px",
            fontWeight: "700",
            textOutline: "none",
          },
          y: -10,
        },
        marker: {
          lineColor: "rgba(255,255,255,0.35)",
          lineWidth: 1,
          radius: 7,
          states: {
            hover: {
              enabled: true,
              radiusPlus: 3,
            },
          },
        },
      },
    },
    series: [
      {
        type: "line",
        name: "Primary spread",
        data: [
          [10, 34],
          [27, 56],
          [48, 45],
          [66, 68],
          [84, 56],
        ],
        color: "rgba(248,250,252,0.42)",
        lineWidth: 2,
      },
      {
        type: "line",
        name: "Secondary routes",
        data: [
          [27, 56],
          [34, 78],
          [66, 68],
          [74, 84],
          [84, 56],
          [91, 32],
        ],
        color: "rgba(201,164,75,0.5)",
        dashStyle: "ShortDash",
        lineWidth: 2,
      },
      {
        type: "line",
        name: "Community bridge",
        data: [
          [10, 34],
          [35, 23],
          [48, 45],
          [59, 23],
          [84, 56],
        ],
        color: "rgba(255,255,255,0.2)",
        lineWidth: 1.5,
      },
      {
        type: "scatter",
        name: "Core risk",
        color: "#F2D17A",
        marker: {
          enabled: true,
          radius: 10,
          symbol: "circle",
        },
        data: [
          { x: 48, y: 45, z: 87, name: "Issue Hub" },
          { x: 66, y: 68, z: 81, name: "Amplifier" },
        ],
      },
      {
        type: "scatter",
        name: "Spread nodes",
        color: "#C9A44B",
        marker: {
          enabled: true,
          radius: 7,
          symbol: "circle",
        },
        data: [
          { x: 27, y: 56, z: 64, name: "Short-form" },
          { x: 84, y: 56, z: 58, name: "Local Media" },
          { x: 34, y: 78, z: 52, name: "Creator" },
        ],
      },
      {
        type: "scatter",
        name: "Outer signals",
        color: "#F8FAFC",
        marker: {
          enabled: true,
          radius: 5,
          symbol: "circle",
        },
        data: [
          { x: 10, y: 34, z: 42, name: "Community" },
          { x: 35, y: 23, z: 31, name: "Forum" },
          { x: 59, y: 23, z: 35, name: "Regional" },
          { x: 74, y: 84, z: 44, name: "Press" },
          { x: 91, y: 32, z: 28, name: "Search" },
        ],
      },
    ],
  };
}

export function InsightHighchart({
  variant,
}: {
  variant: InsightChartVariant;
}) {
  const options = useMemo(() => getOptions(variant), [variant]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ className: "insight-chart-motion h-full w-full" }}
    />
  );
}
