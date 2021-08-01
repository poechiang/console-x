import createChart, { Chart } from '@lib/antv';
import { get } from '@lib/fetch';
import { format, startOfHour } from 'date-fns';
import React, { useEffect, useState } from 'react';

const LineChart = createChart((chart: Chart) => {
    chart?.line()?.position?.('date*visits');

    chart?.render?.();
});

const DailyViews = ({ height }: ComponentProps) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        get('http://localhost:9999/statistics/blog/visits/minute', {
            startTime: startOfHour(Date.now()).getTime(),
            endTime: Date.now(),
        }).subscribe(resp => {
            setData(resp.result || []);
        });
    }, []);

    return (
        <LineChart
            debug={true}
            axis={{
                date: {
                    label: {
                        formatter: (dt: string) => format(new Date(dt), 'HH:mm'),
                    },
                },
            }}
            scale={{
                date: {
                    nice: true,
                },

                visits: {
                    nice: true,
                },
            }}
            autoFit={true}
            height={height || 500}
            data={data}
        />
    );
};
export default DailyViews;
