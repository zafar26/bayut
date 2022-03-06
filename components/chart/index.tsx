import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function MyChart({ data, title, width, height }: any) {
    let options = {
        title: {
            text: 'Pie point CSS',
        },
        series: [
            {
                type: 'pie',
                allowPointSelect: true,
                keys: ['name', 'y', 'selected', 'sliced'],
                data: [
                    ['Apples', 29.9, false],
                    ['Pears', 71.5, false],
                    ['Oranges', 106.4, false],
                    ['Plums', 129.2, false],
                    ['Bananas', 144.0, false],
                    ['Peaches', 176.0, false],
                    ['Prunes', 135.6, true, true],
                    ['Avocados', 148.5, false],
                ],
                showInLegend: true,
            },
        ],
        chart: {
            width,
            height,
        },
    };
    if (title) {
        options.title.text = title;
    }
    if (data) {
        // console.log(options.series[0].data, "options")
        options.series[0].data = data;
    }
    return (
        <div
            style={{
                backgroundColor: 'transparent',
                // width: '100%',
                // height: '80%',
            }}
        >
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}
MyChart.getInitialProps = async (props: any) => {
    return {
        data: props.data,
        title: props.title,
    };
};
