import React from "react";


import { Grid, GridItem } from "nr1";
import { AreaChart, BarChart,LineChart,TableChart,SparklineChart,StackedBarChart, PieChart } from "nr1";
import { Area } from "recharts";

const index = () => {
  return (
    <div className="heading">
      <h1>Network Traffic</h1>
      <AreaChart
        accountId={4439976}
        query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzOTk3NnxJTkZSQXxOQXw0MjY0NjcwNTc0ODQ2MDI5NzE2') TIMESERIES AUTO"
        fullWidth
      />
      <h1>Load average</h1>
      <LineChart
        accountId={4439976}
        query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzOTk3NnxJTkZSQXxOQXw0MjY0NjcwNTc0ODQ2MDI5NzE2') TIMESERIES AUTO"
        fullWidth
      />
      <h1>CPU Usage</h1>
      <AreaChart
        accountId={4439976}
        query="SELECT average(cpuPercent) AS `CPU used %` FROM SystemSample WHERE (entityGuid = 'NDQzOTk3NnxJTkZSQXxOQXw0MjY0NjcwNTc0ODQ2MDI5NzE2') TIMESERIES AUTO"
        fullWidth
      />
      <h2>Memory usage</h2>
      <SparklineChart
        accountId={4439976}
        fullWidth
        query="SELECT average(memoryUsedPercent) AS `Memory used %` FROM SystemSample WHERE (entityGuid = 'NDQzOTk3NnxJTkZSQXxOQXw0MjY0NjcwNTc0ODQ2MDI5NzE2') TIMESERIES AUTO"
      />
      <h2>Storage Usage</h2>
       <StackedBarChart
        accountId={4439976}
        fullWidth
        query="SELECT average(diskUsedPercent) AS `Storage used %` FROM StorageSample WHERE (entityGuid = 'NDQzOTk3NnxJTkZSQXxOQXw0MjY0NjcwNTc0ODQ2MDI5NzE2') TIMESERIES AUTO"
      />
    </div>
  );
};

export default index;
