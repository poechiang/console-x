/* eslint-disable react-hooks/exhaustive-deps */
import { Chart } from '@antv/g2';
import '@lib/antv/themes';
import { withScope } from '@lib/console';
import { isPlainObject, isUndefined, merge, uniqueId } from 'lodash';
import { createElement, useEffect, useState } from 'react';
export { Chart };
const console = withScope('antv');
const defaultConfig = {
    autoFit: true,
    padding: [20, 60, 40],
};
const createChart = (render: CallableFunction) => {
    const uid = uniqueId('r-a-c-');
    return ({ id, data, debug = false, theme = 'darken', ...config }: ComponentProps) => {
        const { autoFit = true, axis, container, className, coordinate, height = 500, interaction, legend, scale, tooltip } = config || {};
        const chartId = container || id || uid;

        const [chart, setChart] = useState<Chart>();
        useEffect(() => {
            const chart = new Chart(
                merge(
                    {},
                    defaultConfig,
                    {
                        autoFit,
                        height,
                    },
                    { container: chartId }
                )
            );
            chart.theme(theme);
            data && chart.data(data);

            if (axis && isPlainObject(axis)) {
                Object.entries(axis).forEach(([key, cfg]) => {
                    chart.axis(key, cfg as any);
                });
            } else if (axis === false) {
                chart.axis(false);
            }
            if (scale) {
                chart.scale(scale);
            }
            if (!isUndefined(legend)) {
                chart.legend(legend);
            }

            if (!isUndefined(tooltip)) {
                chart.tooltip(tooltip);
            }

            if (!isUndefined(coordinate)) {
                const view = chart.coordinate();
                coordinate?.reflect && view.reflect(coordinate.reflect);
            }
            interaction && chart.interaction(interaction.name || interaction, interaction.cfg || undefined);
            render?.(chart);
            chart.render();

            setChart(chart);
            return () => chart.destroy();
        }, []);

        useEffect(() => {
            debug && console.log('other configs changed...', config);
            chart?.updateOptions(config);
            chart?.render(true);
        }, [...Object.values(config)]);
        useEffect(() => {
            debug && console.log('theme changed...', theme);
            chart?.theme(theme);
        }, [theme]);

        useEffect(() => {
            debug && console.log('data changed...', data);

            chart?.changeData(data);
            render?.(chart);
            chart?.render(false);
        }, [data]);

        return createElement('div', {
            id: chartId,
            className,
        });
    };
};

export default createChart;
