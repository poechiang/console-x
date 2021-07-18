import { Chart, IGroup, registerShape } from '@antv/g2';
import { ShapeInfo } from '@antv/g2/lib/interface';
import { isEmpty } from 'lodash';

registerShape('polygon', 'boundary-polygon', {
    draw(cfg: ShapeInfo, container: IGroup) {
        if (!isEmpty(cfg.points)) {
            const group = container.addGroup();
            const attrs: any = {
                stroke: '#fff',
                lineWidth: 1,
                fill: cfg.color,
            };
            const points = cfg.points as any[];
            const path = [
                ['M', points[0].x, points[0].y],
                ['L', points[1].x, points[1].y],
                ['L', points[2].x, points[2].y],
                ['L', points[3].x, points[3].y],
                ['Z'],
            ];
            attrs.path = (this as any).parsePath(path);
            group.addShape('path', {
                attrs,
            });

            if ((cfg?.data as any).lastWeek) {
                const linePath = [
                    ['M', points[2].x, points[2].y],
                    ['L', points[3].x, points[3].y],
                ];
                // 最后一周的多边形添加右侧边框
                group.addShape('path', {
                    attrs: {
                        path: (this as any).parsePath(linePath),
                        lineWidth: 4,
                        stroke: '#404040',
                    },
                });
                if ((cfg?.data as any).lastDay) {
                    group.addShape('path', {
                        attrs: {
                            path: (this as any).parsePath([
                                ['M', points[1].x, points[1].y],
                                ['L', points[2].x, points[2].y],
                            ]),
                            lineWidth: 4,
                            stroke: '#404040',
                        },
                    });
                }
            }

            return group;
        }
    },
});
const render = <T = any>(container: string, data: T[], config?: any) => {
    const chart = new Chart({
        container: 'container',
        autoFit: true,
        height: 500,
        padding: [150, 30, 150, 70],
    });
    chart.data(data);
    chart.scale({
        day: {
            type: 'cat',
            values: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        },
        week: {
            type: 'cat',
        },
        commits: {
            sync: true,
        },
        date: {
            type: 'cat',
        },
    });

    chart.axis('week', {
        position: 'top',
        tickLine: null,
        line: null,
        label: {
            offset: 12,
            style: {
                fontSize: 12,
                fill: '#666',
                textBaseline: 'top',
            },
            formatter: val => {
                if (val === '2') {
                    return 'MAY';
                } else if (val === '6') {
                    return 'JUN';
                } else if (val === '10') {
                    return 'JUL';
                } else if (val === '15') {
                    return 'AUG';
                } else if (val === '19') {
                    return 'SEP';
                } else if (val === '24') {
                    return 'OCT';
                }
                return '';
            },
        },
    });
    chart.axis('day', {
        grid: null,
    });
    chart.legend(false);
    chart.tooltip({
        title: 'date',
        showMarkers: false,
    });
    chart.coordinate().reflect('y');
    chart.polygon().position('week*day*date').color('commits', '#BAE7FF-#1890FF-#0050B3').shape('boundary-polygon');

    chart.interaction('element-active');

    chart.render();
};

export default render;
